import React from 'react';
import {styleMainBody} from "../utils/styles.js";
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
import MyCurrencyField from "./MyCurrencyField.jsx";
import {ThemeProvider, createTheme} from '@mui/material/styles'
import dayjs from "dayjs";
import Block3 from "./Block3.jsx";
import Block4 from "./Block4.jsx";


const Analytics = () => {

    const [formFields, setFormFields] = React.useState({
            stock: "APPL",
            to: dayjs(),
            from: dayjs().subtract(1, 'month'),
            days: dayjs().diff(dayjs().subtract(1, 'month'), "day"),
            amount: "100"
        }
    );

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

    const handleFieldsChange = (e,fieldName) => {
        let tmp = {...formFields};
        if (fieldName === "from" || fieldName === "to" )
        {
            tmp[fieldName] = e;
            if (tmp.to.diff ( tmp.from, "day") < 1) tmp.to = tmp.from.add( 1, "day")
            tmp.days = tmp.to.diff( tmp.from, "day")
        }

        else tmp[fieldName] = e.target.value;


        if (fieldName==="days") {
            if (tmp.days < 1) tmp.days = 1;
            tmp.to=tmp.from.add( tmp.days, "day");}
        setFormFields(tmp);
    };



    const myLabeled = Element => (xLabel, xId = xLabel.toLowerCase()) => props => {
        return (
            <Box element="div" sx={{mr: 3}}>
                <Typography>{xLabel}</Typography>
                <Element
                    id={xId}
                    onBlur={handleOnBlur}
                    onChange={(e)=>{handleFieldsChange (e, xId)}}
                    value={formFields[xId]}
                    //              value = {formFields[xId] ? formFields[xId] : {}}
                    {...props} />
            </Box>
        )
    };


    const MySelect = myLabeled(Select)("Stock");


    return (


        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={0} alignItems="center" sx={styleMainBody}>
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
                                <MySelect>
                                    <MenuItem value={"IBM"}>IBM</MenuItem>
                                    <MenuItem value={"APPL"}>APPL</MenuItem>
                                </MySelect>
                               {myLabeled(TextField)("Period, days", "days")({
                                    type: "number",
                                    InputProps: {inputProps: {min: 1}}
                                })}

                                {/*if (!/^[0-9\b]+$/.test(value)) return;
*/}

                                {myLabeled(MyCurrencyField)("Amount")({
                                    variant: "outlined",
                                    currencySymbol: "$",
                                    minimumValue: "0",
                                    outputFormat: "string",
                                    decimalCharacter: ".",
                                    digitGroupSeparator: ","
                                })}

                            </ThemeProvider>


                            <Button
                                sx={{
                                    color: "white",
                                    background: "linear-gradient(269.97deg, #985076 -80.41%, #B81D6F -27.59%, #FE8745 100.7%)",
                                    borderRadius: "3px",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)"
                                }}>
                                &nbsp;&nbsp; CALCULATE &nbsp;&nbsp;
                            </Button>

                        </Stack>
                    </FormControl>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={9} sx={{mt: 5}}> <Block3/> </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={4} sx={{mt: 5}}>
                    <Block4 text1="APPL"
                            text2="NasdaqGS - NasdaqGS Real Time Price."
                            text3={`from ${formFields.from.format("DD/MMM/YYYY")} to ${formFields.to.format("DD/MMM/YYYY")}`}
                            text4="157.66"
                            text5="+0.26 (+0.2%)"
                            text6="132.20"
                            text7="161.30"/>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4} sx={{mt: 5}}>
                    <Block4 text1="GOLD"
                            text2="COMEX - COMEX Delayed Price."
                            text4="1,943.90"
                            text5="-38.90 (-1.96%)"
                            text6="1,726.25"
                            text7="2002.10"/>
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
}

export default Analytics;