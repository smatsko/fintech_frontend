import React, {useContext, useEffect, useState} from 'react';
import {AppBarHeight, AppBottomBarHeight, styleMainBody} from "../utils/styles.js";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {
    Box,
    Button, FormControl,
    Grid,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import dayjs from "dayjs";
import Block3 from "./Block3.jsx";
import {getDataPeriodDays, getIndexes} from "../utils/communicationAction.js";
import {UserContext} from "../utils/userContext.js";
import {dayjsToApi} from "../utils/constants.js";


const Analytics = () => {

    const {userProfile, screenSize,} = useContext(UserContext);
    const [indexes, setIndexes] = useState([]);
    const [formFields, setFormFields] = useState({
            stock: "",
            to: dayjs(),
            from: dayjs().subtract(1, 'month'),
            days: 7,
            amount: "1"
        }
    );

    const [data, setData] = useState([]);
    const [stat, setStat] = useState({});
    const [graphParams, setGraphParam] = useState({});
    const [minHeight, setMinHeight] = useState(screenSize - AppBarHeight);


    const fetchData = async () => {
        try {
            console.log("-1", formFields.stock );
            getDataPeriodDays(userProfile.token,
                [formFields.stock],
                dayjsToApi(formFields.from),
                dayjsToApi(formFields.to),
                formFields.days)
                .then(res => {
                    const xMap = new Map();
                    res.map((vol) => {
                        let tmp = xMap.get(vol.from) ? xMap.get(vol.from) : {};
                        tmp["value"] = +vol["startClose"] * formFields.amount;
                        tmp["date"] = dayjs(vol.from).format("DD/MMM/YY");
                        xMap.set(vol.from, tmp)
                        tmp = xMap.get(vol.to) ? xMap.get(vol.to) : {};
                        tmp["value"] = +vol["endClose"] * formFields.amount;
                        tmp["date"] = dayjs(vol.to).format("DD/MMM/YY")
                        xMap.set(vol.to, tmp);
                    });
                    const xData = [...xMap.values()];
                    const xStat = {
                        start: xData.length > 0 ? xData[0].value : 0,
                        end: xData.length > 0 ? xData[xData.length - 1].value : 0,
                        min: xData.length > 0 ? xData[0].value : 0,
                        max: xData.length > 0 ? xData[0].value : 0,
                    }
                    xData.forEach((x) => {
                        if (x.value < xStat.min) xStat.min = x.value;
                        if (x.value > xStat.max) xStat.max = x.value;
                    })
                    setStat(xStat);
                    setData(xData);
                })
                .catch()
        } catch {
            console.log("here222")
        }
    }


    const theme = createTheme({
        components: {
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        background: "#706CD0",
                        width: "21ch"
                    }
                }
            }
        }
    });

    const handleOnBlur = e => {
        let p = {};
        p[e.target.id] = e.target.value.trim();
        p = {...formFields, ...p}
        setFormFields(p);
    }

    const handleFieldsChange = (e, fieldName) => {
        let tmp = {...formFields};
        if (fieldName === "from" || fieldName === "to") {
            tmp[fieldName] = e;
        } else tmp[fieldName] = e.target.value;
        setFormFields(tmp);
    };


    useEffect(() => {

        (async () => {
            try {
                let indexes = await getIndexes(userProfile.token)
                    .then(
                        res => {
                            if (res.ok) return res.json();
                            return res.json().then((res) => {
                                throw new Error(res.status);
                            })
                        });

                setIndexes(indexes);
            } catch {
                setIndexes({});
            }
        })();

        setMinHeight(Math.max(screenSize - AppBarHeight - AppBottomBarHeight));


    }, []);

    const myLabeled = Element => (xLabel, xId = xLabel.toLowerCase()) => props => {

        return (
            <Box element="div" sx={{mr: 3}}>
                <Typography>{xLabel}</Typography>
                <Element
                    id={xId}
                    onBlur={handleOnBlur}
                    onChange={(e) => {
                        handleFieldsChange(e, xId)
                    }}
                    value={formFields[xId]}
                    {...props} />
            </Box>
        )
    };


    const MySelect = myLabeled(Select)("Stock");


    return (


        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={0} alignItems="center" sx={
                {...styleMainBody, minHeight: `${minHeight}px`}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={11} sx={{mb: 4, mt: 4}}>
                    <Typography sx={{
                        fontFamily: "Inter",
                        mt: "20px",
                        mb: "10px",
                        fontSize: "74px",
                        lineHeight: "80px"
                    }}> Analytics </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>
                    <FormControl>
                        <Stack direction="row"
                               sx={{
                                   display: 'flex',
                                   flexDirection: 'horizontal',
                                   justifyContent: 'space-between',
                                   alignItems: "center",
                               }}>


                            <ThemeProvider theme={theme}>

                                {myLabeled(DatePicker)("From")({format: 'DD/MMM/YYYY'})}
                                {myLabeled(DatePicker)("To")({format: 'DD/MMM/YYYY', minDate: formFields.from})}

                                {myLabeled(TextField)("Period, days", "days")({
                                    type: "number",
                                    InputProps: {inputProps: {min: 1}}
                                })}


                                <MySelect>
                                    {indexes.map((val) =>
                                        <MenuItem key={val} value={val}>{val}</MenuItem>
                                    )}
                                </MySelect>

                                {/*if (!/^[0-9\b]+$/.test(value)) return;
*/}

                                {myLabeled(TextField)("Amount, units", "amount")({
                                    type: "number",
                                    InputProps: {inputProps: {min: 1}}
                                })}


                                {/*
                                {myLabeled(MyCurrencyField)("Amount")({
                                    variant: "outlined",
                                    currencySymbol: "$",
                                    minimumValue: "0",
                                    outputFormat: "string",
                                    decimalCharacter: ".",
                                    digitGroupSeparator: ","
                                })}
*/}

                            </ThemeProvider>


                            <Button
                                sx={{
                                    mt: 3,
                                    ml: 4,
                                    color: "white",
                                    background: "linear-gradient(269.97deg, #985076 -80.41%, #B81D6F -27.59%, #FE8745 100.7%)",
                                    borderRadius: "3px",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)"
                                }}
                                disabled={
                                    !(formFields.stock &&
                                        formFields.to &&
                                        formFields.from &&
                                        formFields.days &&
                                        formFields.amount)}
                                onClick={() => {
                                    setGraphParam(formFields);
                                    fetchData();
                                }}>
                                &nbsp;&nbsp; CALCULATE &nbsp;&nbsp;
                            </Button>

                        </Stack>
                    </FormControl>
                </Grid>
                <Grid item xs={2}></Grid>

                <Grid item xs={9} sx={{mt: 5}}>

                    <Block3 graphParams={graphParams} stat={stat} data={data}/> </Grid>

                <Grid item xs={2}></Grid>

                <Grid item xs={4} sx={{mt: 5}}>
                    {/*<Block4 graphParam = {graphParam}
               */} </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </LocalizationProvider>
    )
        ;
}

export default Analytics;