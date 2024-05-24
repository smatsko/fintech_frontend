import {
    Box, Grid, Stack,
    Typography
} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import dayjs from "dayjs";
import {UserContext} from "../utils/userContext.js";
import Graph2 from "./Graph2.jsx";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const Block3 = ({graphParams, stat, data}) => {


    const tableHeader = () => {

        const font1 = (text) =>
            (
                <Typography sx={{mr:2, opacity: "0.4", fontFamily: "Oxygen", fontWeight: "200"}}>{text}&nbsp;</Typography>
            );

        const font2 = (text) => (
            <Typography sx={{mr: 3,}}>{text}&nbsp;&nbsp;</Typography>
        )


        return (
            <div>
                <Stack direction={"row"} sx={{}}>
                    {font1("Stock portfolio")}
                    {font2(graphParams.stock + " - " + graphParams.amount + " stock(s)")}
                    {font1("From")}
                    {font2(dayjs(graphParams.from).format("DD/MMM/YYYY"))}
                    {font1("To")}
                    {font2(dayjs(graphParams.to).format("DD/MMM/YYYY"))}
                    {font1("With period,day(s)")}
                    {font2(graphParams.days)}
                </Stack>

                <Stack direction={"row"} sx={{}}>
                    {font1("At start, $")}
                    {stat.start ? font2(stat.start.toFixed(2)) : "0.00"}
                    {font1("High, $")}
                    {stat.max ? font2(stat.max.toFixed(2)) : "0.00"  }
                    {font1("Low, $")}
                    {stat.min ? font2(stat.min.toFixed(2)) : "0.00" }
                    {font1("At end, $")}
                    {stat.end ? font2(stat.end.toFixed(2)) : "0.00" }
                </Stack>
                <Typography>&nbsp;</Typography>
            </div>)
    }


    return (

        <Box sx={{
            background: "#1F263E",
            color: "white",
            borderRadius: "14px",
        }}>

            <Box component={"div"} sx={{
                display: "flex",
                flexDirection: 'horizontal',
                justifyContent: 'space-between',
                background: "#383393",
                borderRadius: "14px 14px 0 0",
                p: 3
            }}>

                {graphParams.stock ? tableHeader() : ""}

            </Box>

            <Grid container>
                <Grid item xs={12} sx={{minHeight: 300, mt: 5}}>
                    <Graph2 data={data} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Block3;