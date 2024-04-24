import React from 'react';
import {baseColor} from "../utils/constants.js";
import {Stack, Typography} from "@mui/material";

const Block4 = ({text1, text2, text3, text4, text5, text6, text7}) => {

    const color1 = text5[0] === "-" ? "#CB5732" : "#0D9071";


    return (
        <Stack sx={{
            borderRadius: "10px",
            backgroundColor: baseColor,
            alignItems: "left",
            minWidth: "400px",
            minHeight: "200px",
            justifyContent: "center",
            p: 4,
            mb:2,
        }}>
            <Typography sx={{fontSize: "48px"}}> {text1} </Typography>
            <Typography sx={{fontSize: "20px", mt: 2}}> {text2} </Typography>
            <Typography sx={{fontSize: "16px", mt: 1}}> Currency in USD </Typography>
            <Typography sx={{fontSize: "16px", opacity: "0.6", fontWeight: "400", mt: 3}}> {text3} </Typography>
            <Stack direction="row" sx={{mt: 2}}>
                <Typography sx={{fontSize: "58px", color: "#D45190", fontWeight: "600"}}> {text4} &nbsp;</Typography>
                <Typography sx={{
                    fontSize: "20px",
                    fontWeight: "600", mt: "38px",
                    color: color1
                }}> {text5} </Typography>
            </Stack>
            <Stack direction="row" sx={{mt: 2}}>
                <Typography sx={{fontSize: "20px"}}> Min.price:&nbsp; </Typography>
                <Typography sx={{fontSize: "20px"}}> {text6} </Typography>
            </Stack>
            <Stack direction="row"><Typography sx={{fontSize: "20px"}}> Max.price:&nbsp; </Typography>
                <Typography sx={{fontSize: "20px"}}> {text7} </Typography>
            </Stack>

        </Stack>
    );
};

export default Block4;