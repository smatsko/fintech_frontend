import React from 'react';
import {baseColor} from "../utils/constants.js";
import {Box, Stack, Typography} from "@mui/material";
import SouthIcon from '@mui/icons-material/South';

const Block1 = ({Text1, Text2, onClick}) => {
    return (
        <Box component="section"
             onClick={onClick}
             sx={{
                 p: 3,
                 borderRadius: "10px",
                 m: 1,
                 backgroundColor: baseColor
             }}>
            <Typography sx={{fontSize: "12px", textTransform: "uppercase", opacity: "0.5"}}> {Text1} </Typography>
            <Stack direction={"row"} sx={{ alignItems: "center"}}>
                <Typography sx={{fontSize: "48px"}}> {Text2} </Typography>
                <SouthIcon sx={{ml:1}}/>
            </Stack>
        </Box>
    )
        ;
};

export default Block1;