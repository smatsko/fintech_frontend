import React, {createRef, useContext, useEffect, useState} from 'react';
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import Rocket from "../images/Rocket.png";
import Block1 from "./Block1.jsx";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {AppBarHeight, prjStyles} from "../utils/styles.js";
import {NavLink, useNavigate} from "react-router-dom";
import {UserContext} from "../utils/userContext.js";


const FpPart1 = () => {
    const {
        handleDialogLogin,
        screenSize,
    } = useContext(UserContext);
    const refComp1 = createRef();
    const refComp2 = createRef();
    let navigate = useNavigate();
    const [minHeight, setMinHeight] = useState(screenSize - AppBarHeight);


    useEffect(() => {
        setMinHeight(Math.max(refComp1.current.getBoundingClientRect().height
            + refComp2.current.getBoundingClientRect().height + 200, screenSize - AppBarHeight));
    }, [refComp1, refComp2]);


    return (

            <Stack id="about" direction={"column"} style={prjStyles.fpPart1}
                 sx={{height: `${minHeight}px`}}>
                <Stack direction={"column"}
                       sx={{height:"100%",
                           alignItems:"center",
                           justifyContent: "space-around"}}>
                    <Stack ref={refComp1} direction={"row"}>
                        <Box>
                            <Typography sx={{
                                fontWeight: "800",
                                fontSize: "74px",
                                mt: 4,
                            }}>
                                Build Your Ideal <br/>
                                Investment Portfolio
                            </Typography>

                            <Typography sx={{
                                fontWeight: "400",
                                fontSize: "23px",
                                mt: 1,
                            }}>
                                Make informed investment decisions with data analysis
                            </Typography>

                            <Button variant="contained"
                                    onClick={() => {
                                        handleDialogLogin(true)
                                    }}
                                    sx={{
                                        background: "linear-gradient(269.97deg, #985076 -80.41%, #B81D6F -27.59%, #FE8745 100.7%)",
                                        borderRadius: "0px",
                                        marginTop: "40px",
                                        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
                                    }} endIcon={<ArrowForwardIcon/>}>
                                GET STARTED
                            </Button>
                        </Box>
                        <Box component={"img"} src={Rocket} alt={"Rocket"}/>
                    </Stack>
                    <Stack ref={refComp2} direction={"row"} sx={{
                        width: "100%",
                        display: "flex", justifyContent: "space-between",
                    }}>
                        <Block1 Text1={"Exploring securities trend"} Text2={"Statistics"}
                                onClick={() => {
                                    navigate("/#Analysis")
                                }}/>
                        <Block1 Text1={"SMART INVESTMENT INSIGHTS"} Text2={"Analysis"}
                                onClick={() => {
                                    navigate("/#Statistics")
                                }}/>
                        <Block1 Text1={"REAL-TIME DATA & ANALYSISIS"} Text2={"Stock API"}
                                onClick={() => {
                                    navigate("/#DataApi")
                                }}/>

                    </Stack>

                </Stack>
            </Stack>
    );
};

export default FpPart1;