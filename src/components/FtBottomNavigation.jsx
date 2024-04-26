import React, {useEffect, useState} from 'react';
import {Box, Link, Stack, Typography} from "@mui/material";
import {prjStyles, styleTopBottom} from "../utils/styles.js";
import Glyph from "../images/Glyph.png";
import LogoName from "../images/Logo Name.png";
import {NavLink} from "react-router-dom";

const FtBottomNavigation = () => {


    return (

        <Stack direction="row" sx={prjStyles.AppBottomBar}>
            <Stack direction="row">
                <Typography sx={{m: 2}}>oll@investing.com</Typography>
                <Typography sx={{m: 2}}>+972 53 11111</Typography>
            </Stack>
            <Stack direction="row" sx={{
                m: 1,
                justifyContent: 'space-between',
                alignItems: "center"
            }}>
                <NavLink to="/">
                    <Box component="img" alt=">>" src={Glyph} sx={{mr: 1}}/>
                </NavLink>
                <NavLink to="/">
                    <Box component="img" alt="StockStat" src={LogoName}/>
                </NavLink>
            </Stack>
        </Stack>
    );
};

export default FtBottomNavigation;