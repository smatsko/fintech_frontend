import React from 'react';
import {baseColor} from "../utils/constants.js";
import {Box, Stack, Typography} from "@mui/material";

const Block2 = ({Icon, Text1, Text2}) => {
    return (
        <Stack  sx={{
            borderRadius: "10px",
            backgroundColor: baseColor,
            alignItems: "center",
            minWidth: "400px",
            minHeight: "200px",
            justifyContent: "center",
            m: 1
        }}>
            <Box component="img" src={Icon} sx={{width:"64px", height:"64px", mb: 2 }} />
            <Typography sx={{fontSize: "20px",mb:2}}> {Text1} </Typography>
            <Typography sx={{fontSize: "20px", }}> {Text2} </Typography>
        </Stack>
    );
};

export default Block2;