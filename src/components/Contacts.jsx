import React, {useEffect, useState} from 'react';
import {Box, Grid, Stack, Typography} from "@mui/material";
import Map from "../images/map.png";
import Envelope from "../images/envelope.png";
import Info from "../images/info.png";
import Place from "../images/place.png";
import Block2 from "./Block2.jsx";
import {styleMainBody} from "../utils/styles.js";


const Contacts = () => {

    const [ firstMargin, setFirstMargin] = useState(Math.max(0, window.innerHeight - 900));

    useEffect(() => {
        const handleResize = (event) => {
            setFirstMargin(Math.max(0, window.innerHeight - 850))
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <Grid container spacing={0} alignItems="center" sx={styleMainBody}>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={11}>
                <Grid item xs={11} sx={{mb: 4}}>
                    <Typography  sx={{
                        mt: `${firstMargin}px`,
                        fontSize: "74px",
                        lineHeight: "80px"
                    }}> Contacts </Typography>
                </Grid>
                <Grid item xs={11} sx={{mb: 4}}>
                    <Typography sx={{
                        fontSize: "24px",
                        letterSpacing: "0.06em"
                    }}> OUR LOCATION AND CONTACT INFORMATION </Typography>
                </Grid>
                <Grid item xs={11} sx={{mb: 4}}>
                    <Typography sx={{
                        fontSize: "48px",
                    }}>
                        Let Us Help You <br/>
                        with Your Questions and Concerns
                    </Typography>
                </Grid>
                <Grid item xs={11} sx={{mb: 4}}>
                    <Typography align="justify" width="60ch" sx={{
                        fontSize: "20px",
                    }}>
                        You can reach us by phone, email, or through our online contact form.
                        Our team is committed to providing exceptional customer service and will respond to your
                        inquiries
                        promptly.
                        Don't hesitate to contact us - we are here to help you!
                    </Typography>
                </Grid>
                <Grid item xs={11} sx={{mb: 4}}>
                    <Stack direction="row" justifyContent='space-between' flexWrap="wrap">
                        <Block2 Icon={Envelope} Text1={"oll@investing.com"} Text2={"Online 24 hours"}/>
                        <Block2 Icon={Info} Text1={"+972 53 111111"} Text2={"Support 24/7"}/>
                        <Block2 Icon={Place} Text1={"Prof. Menakhem Plaut St 10, Rehovot"}
                                Text2={"Sun - Fri: 8.00-18.00"}/>
                    </Stack>
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{mt:12, p:0}}>
                <Box component={"img"} src={Map} maxWidth="100%" maxHeight="100%" sx={{m:0, p:0}}/>
            </Grid>

        </Grid>


    );
}

export default Contacts;