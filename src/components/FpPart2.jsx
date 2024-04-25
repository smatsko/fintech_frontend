import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import {prjStyles} from "../utils/styles.js";
import GraphDemo1 from "../images/graph_demo1.png";
import ThumbPlusMenu from "../images/ThumbPlusMenu.png";

const FpPart2 = () => {
    return (
        <Grid container spacing={1} alignItems="top" style={prjStyles.fpPart4}>
            <Grid item xs={12} sx={{mt:2}}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <Typography sx={{
                    fontWeight: "200",
                    fontSize: "24px",
                    opacity: "0.6"

                }}>
                    ANALYZE THE RELATIONSHIP BETWEEN TWO STOCKS
                </Typography>
                <Typography sx={{
                    fontWeight: "800",
                    fontSize: "48px",
                    mb: 3,
                }}>
                    Assessing the Dependence <br/> of Two Stocks
                </Typography>
                <Typography sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                }}>
                    Discover the correlation coefficient between any two stocks with our easy-to-use calculator.
                    Make informed investment decisions based on the data-driven analysis of stock market trends
                </Typography>
            </Grid>
            <Grid item xs={5} >
                <Box component={"img"} src={ThumbPlusMenu} alt={"ThumbPlusMenu"} width="500px"/>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Box component={"img"} src={GraphDemo1} alt={"GraphDemo1"} maxWidth="90%" maxHeight="90%"
                     sx={{m: 0, p: 0,}}/>
            </Grid>


        </Grid>


    )
        ;
};

export default FpPart2;