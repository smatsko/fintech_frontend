import React, {useEffect, useState} from 'react';
import {Box, Link, Stack, Typography} from "@mui/material";
import {styleTopBottom} from "../utils/styles.js";
import Glyph from "../images/Glyph.png";
import LogoName from "../images/Logo Name.png";

const FtBottomNavigation = () => {


    return (

        <Stack direction="row" sx={{
            display: 'flex',
            flexDirection: 'horizontal',
            justifyContent: 'space-between',
            alignItems: "center",
            ...styleTopBottom
        }}>
            <Stack direction="row">
                <Typography sx={{m: 2}}>oll@investing.com</Typography>
                <Typography sx={{m: 2}}>+972 53 11111</Typography>
            </Stack>
            <Stack direction="row" sx={{
                m: 1,
                justifyContent: 'space-between',
                alignItems: "center"
            }}>
                <Link href="/">
                    <Box component="img" alt=">>" src={Glyph} sx={{mr: 1}}/>
                </Link>
                <Link href="/">
                    <Box component="img" alt="StockStat" src={LogoName}/>
                </Link>
            </Stack>
        </Stack>
    );
};

export default FtBottomNavigation;