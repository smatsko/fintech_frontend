import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import Rocket from "../images/Rocket.png";
import Block1 from "./Block1.jsx";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {prjStyles} from "../utils/styles.js";


const FpPart1 = () => {
    return (
        <Grid container spacing={1} alignItems="center" style={prjStyles.fpPart1}>
            <Grid item xs={2}></Grid>
            <Grid item xs={6}>
                <Typography sx={{
                    fontWeight: "800",
                    fontSize: "74px",
                    mt: 4,
                }}>
                    Build Your Ideal <br/>
                    Investment Portfolio
                </Typography>

                <Typography sx={{
                    fontWeight: "400",
                    fontSize: "23px",
                    mt: 1,
                }}>
                    Make informed investment decisions with data analysis
                </Typography>

                <Button variant="contained"
                        sx={{background: "linear-gradient(269.97deg, #985076 -80.41%, #B81D6F -27.59%, #FE8745 100.7%)",
                            borderRadius: "0px",
                            marginTop: "40px",
                            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)"}} endIcon={<ArrowForwardIcon/>}>
                    GET STARTED
                </Button>

            </Grid>
            <Grid item xs={1}>
                <img src={Rocket} alt={"Rocket"}/>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
                <Block1 Text1={"Exploring securities trend"} Text2={"Statistics"}/>
            </Grid>
            <Grid item xs={3}>
                <Block1 Text1={"SMART INVESTMENT INSIGHTS"} Text2={"Analysis"}/>
            </Grid>
            <Grid item xs={3}>
                <Block1 Text1={"REAL-TIME DATA & ANALYSISIS"} Text2={"Stock API"}/>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={12} sx={{mb:4}}></Grid>

        </Grid>


    );
};

export default FpPart1;