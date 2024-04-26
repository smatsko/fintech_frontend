import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import MarketDemo from "../images/market_demo.png";
import {prjStyles} from "../utils/styles.js";
import GraphDemo1 from "../images/graph_demo1.png";

const FpPart3 = () => {
    return (
        <Grid container id="Statistics" spacing={1} alignItems="center" style={prjStyles.fpPart4}>
            <Grid item xs={12} sx={{mt:2}}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <Typography sx={{
                    fontWeight: "200",
                    fontSize: "24px",
                    opacity: "0.6"

                }}>
                    DATA-DRIVEN STRATEGIES FOR INVESTMENT SUCCESS
                </Typography>
                <Typography sx={{
                    fontWeight: "800",
                    fontSize: "48px",
                    mb: 3,
                }}>
                    Market Insights
                </Typography>

            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Box component={"img"} src={MarketDemo} alt={"MarketDemo"} width="90%"
                     sx={{m: 0, p: 1,}}/>

            </Grid>

        </Grid>


    );
};

export default FpPart3;