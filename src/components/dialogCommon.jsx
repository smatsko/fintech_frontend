import React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import {Box, Button, Grid, IconButton, Stack, Typography} from "@mui/material";
import {Glyph} from "../utils/constants.js";
import CloseIcon from '@mui/icons-material/Close';
import {isFunctionLikeExpression} from "eslint-plugin-react/lib/util/ast.js";


export const dialogPaperProps = {
    style: {
        backgroundColor: "#383393",
        boxShadow: "none",
        borderRadius: 10,
        color: "white"
    }
}


const DialogHeader = ({title, onFormClose}) => {

    return (

        <Box
            component="div"
            sx={{
                display: 'flex',
                flexDirection: 'horizontal',
                justifyContent: 'space-between',
            }}
        >
            <Box
                component="img"
                sx={{m: 1}}
                alt=">>"
                src={Glyph}
            />

            <DialogTitle sx={{alignSelf: "center"}}>{title}</DialogTitle>


            <IconButton sx={{
                color: "#d2508f",
                backgroundColor: "#555393",
                borderRadius: "0",
                width: "10px",
                height: "10px",
                margin: "5px",
                align: "right"
            }}
                        onClick={() => onFormClose()}
            >
                <CloseIcon/>

            </IconButton>

        </Box>




    )
}

export default DialogHeader