import {
    Box, Stack,
    Typography
} from "@mui/material";
import {GraphDemo} from "../utils/constants.js";
import Map from "../images/map.png";
import React from "react";


const Block3 = () => {
    return (

        <Box sx={{
            background: "#1F263E",
            color: "white",
            borderRadius: "14px",
        }}>

            <Box component={"div"} sx={{
                display: "flex",
                flexDirection: 'horizontal',
                justifyContent: 'space-between',
                background:"#383393",
                p:3,
                borderRadius: "14px 14px 0 0",

            }}>

                <Typography sx={{ml:3, mr:3}}>APPL</Typography>
                <Stack direction={"row"} sx={{ }}>
                    <Typography sx={{mr:3, opacity: "0.4", fontFamily: "Oxygen", fontWeight: "200"}}> High</Typography>
                    <Typography sx={{mr:3, }}>725,974</Typography>
                    <Typography sx={{mr:3,opacity: "0.4"}}>Low</Typography>
                    <Typography sx={{mr:3, }}>718,000</Typography>
                    <Typography sx={{mr:3, opacity: "0.4"}}>24h Volume</Typography>
                    <Typography sx={{mr:3}}>677,7 BTC</Typography>
                </Stack>
                <Typography >&nbsp;</Typography>
            </Box>


            <Box component="div" sx={{p:0}}>
                <Box component={"img"} src={GraphDemo}  sx={{m:0, p:0, width:"100%"}}/>
            </Box>


        </Box>


        /* <AppBar position="static" sx={{background: "#04031C", height:"100%"}}>
             <Toolbar>


             </Toolbar>
         </AppBar>*/


        /* <Grid justifyContent={"center"} sx={{background:"blue"}}>
            <Grid item xs={9} sx={{background: "red"}}>
                <Typography xs={11}>APPL</Typography>
            </Grid>
            <Grid item xs={2} sx={{background: "green"}}>
                dsfsfsda
            </Grid>
        </Grid>*/
    )
        ;
};

export default Block3;