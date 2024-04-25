import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import FpPart1 from "./FpPart1.jsx";
import FpPart4 from "./FpPart4.jsx";
import FpPart3 from "./FpPart3.jsx";
import FpPart2 from "./FpPart2.jsx";

const FirstPage = () => {
    return (
        <Box component={"div"} sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
        }}>
            <FpPart1/>
            <FpPart2/>
            <FpPart3/>
            <FpPart4/>

        </Box>
    );


};

export default FirstPage;