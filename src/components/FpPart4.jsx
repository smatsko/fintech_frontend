import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import Scene01 from "../images/scene01.png";
import {prjStyles} from "../utils/styles.js";

const FpPart4 = () => {
    return (
        <Grid container spacing={1} alignItems="center" style={prjStyles.fpPart4}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <Typography sx={{
                    fontWeight: "200",
                    fontSize: "24px",
                    opacity: "0.6"

                }}>
                    LATEST STOCK MARKET INFORMATION
                </Typography>
                <Typography sx={{
                    fontWeight: "800",
                    fontSize: "48px",
                    mb: 3,
                }}>
                    Real-Time Stock Price Data API
                </Typography>
                <Typography sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                    mb: 3,
                }}>
                    By choosing our API, you can save valuable time and effort on data collection and analysis,
                    and focus on making smart investment decisions based on actual data. Our API is reliable, accurate,
                    and easy to use, making it an essential tool for investors, traders, and analysts who want to stay
                    ahead of the game.
                    Invest in our stock analysis API today and take advantage of the power of real- time data and
                    in-depth analysis to achieve your investment goals.
                    For more information on our stock market analysis API, please don't hesitate to contact
                    us.
                </Typography>
                <Typography sx={{
                    fontWeight: "400",
                    fontSize: "32px",
                    color: "#D45190",
                    mb: 3,
                }}>
                    +972 53 111111
                </Typography>
                <Typography sx={{
                    fontWeight: "400",
                    fontSize: "32px",
                    color: "#D45190"
                }}>
                    Link to file README on github
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <Box component={"img"} src={Scene01} alt={"Scene01"} maxWidth="100%" maxHeight="100%"
                     sx={{m: 0, p: 0}}/>

            </Grid>
        </Grid>


    );
};

export default FpPart4;