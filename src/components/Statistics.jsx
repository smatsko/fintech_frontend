import React from 'react';
import {styleMainBody} from "../utils/styles.js";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import Block3 from "./Block3.jsx";
import Block4 from "./Block4.jsx";
import Block5 from "./Block5.jsx";


const setStatistics = [
    {
        stock: "Gold",
        last: "1905.80",
        chg: "+12.30",
        chgPst: "+0.82"
    },
    {
        stock: "S&P500",
        last: "3916.04",
        chg: "-43,84",
        chgPst: "-1.10"
    },
    {
        stock: "Gold",
        last: "1905.80",
        chg: "+12.30",
        chgPst: "+0.82"
    },
    {
        stock: "S&P500",
        last: "3916.04",
        chg: "-43,84",
        chgPst: "-1.10"
    },
    {
        stock: "S&P500",
        last: "3916.04",
        chg: "-43,84",
        chgPst: "-1.10"
    },
    {
        stock: "Gold",
        last: "1905.80",
        chg: "+12.30",
        chgPst: "+0.82"
    },
    {
        stock: "S&P500",
        last: "3916.04",
        chg: "-43,84",
        chgPst: "-1.10"
    }

];

const Statistics = () => {

    const [formFields] = React.useState({
            stock: "APPL",
            to: dayjs(),
            from: dayjs().subtract(1, 'month'),
        }
    );





    return (


        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={0}  sx={styleMainBody}>
                <Grid item xs={1}></Grid>
                <Grid item xs={11} sx={{mb: 4, mt: 4}}>
                    <Typography sx={{
                        fontFamily: "Inter",
                        mt: "20px",
                        mb: "10px",
                        fontSize: "74px",
                        lineHeight: "80px"
                    }}> Statistics </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
{/*
                <Grid item xs={9} sx={{mt: 5}}> <Block3/> </Grid>
*/}
                <Grid item xs={12}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4} sx={{mt: 5}}>
                    <Block5 setStatistics={setStatistics}/>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4} sx={{mt: 5}}>
                    <Block4 text1="APPL"
                            text2="NasdaqGS - NasdaqGS Real Time Price."
                            text3={`from ${formFields.from.format("DD/MMM/YYYY")} to ${formFields.to.format("DD/MMM/YYYY")}`}
                            text4="157.66"
                            text5="+0.26 (+0.2%)"
                            text6="132.20"
                            text7="161.30"/>

                </Grid>
            </Grid>
        </LocalizationProvider>
    );
}

export default Statistics;