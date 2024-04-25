import React from 'react';
import {baseColor} from "../utils/constants.js";
import {Box, Typography} from "@mui/material";

const Block1 = ({Text1, Text2}) => {
    return (
        <Box component="section" sx={{
            p: 3,
            borderRadius: "10px",
            mr: 4,
            backgroundColor: baseColor
        }}>
            <Typography sx={{fontSize: "12px", textTransform: "uppercase", opacity: "0.5"}}> {Text1} </Typography>
            <Typography sx={{fontSize: "48px"}}> {Text2} </Typography>
        </Box>
    );
};

export default Block1;