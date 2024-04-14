import React from 'react';
import SideBar from "./SideBar.jsx";
import Content from "./Content.jsx";
import {Box, Button, Grid, Typography} from "@mui/material";
import Glyph from "../images/Glyph.png";
import Rocket from "../images/Rocket.png";
import {baseColor} from "../utils/constants.js";
import Block1 from "./Block1.jsx";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Body = () => {
    return (
        <div className={"mainpart"}>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={1}></Grid>
                <Grid item xs={7}>
                    <div className={"divright"}>
                        <p className={"bigtext"}>Build Your Ideal</p>
                        <p className={"bigtext"}>Investment Portfolio</p>
                        <p className={"smalltext"}>Make informed investment decisions with data analysis</p>

                        <Button variant="contained"
                                sx={{background: "linear-gradient(269.97deg, #985076 -80.41%, #B81D6F -27.59%, #FE8745 100.7%)",
                                    borderRadius: "0px",
                                    marginTop: "40px",
                                    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)"}} endIcon={<ArrowForwardIcon/>}>
                            GET STARTED
                        </Button>


                    </div>
                </Grid>
                <Grid item xs={3}>
                    <img src={Rocket} alt={"Rocket"}/>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}></Grid>
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

            </Grid>
        </div>
    );


};

export default Body;