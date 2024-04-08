import React, {useContext} from 'react';
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography
} from "@mui/material";
import LogoName from "../images/Logo Name.png";
import Glyph from "../images/Glyph.png";
import {UserContext} from "../utils/userContext.js";


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const FtAppBar = () => {

    const user = useContext(UserContext);

    const styleSingIn = {
        textTransform: 'none',
        "&:hover": {
            backgroundColor: "#383393"

        },
        "&:active": {
            backgroundColor: "#383393"
        }
    };


    return (
        <AppBar position="static" sx={{background: "#04031C"}}>

            <Toolbar variant="dense" sx={{}}>
                <Box
                    component="img"
                    sx={{
                        height: 33,
                        marginRight: 2
                    }}
                    alt=">>"
                    src={Glyph}
                />

                <Box
                    justifyContent={"end"}
                    component="img"
                    sx={{
                        height: 18
                    }}
                    alt="StockStat"
                    src={LogoName}
                />

                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                </Typography>


                <Button
                    sx={styleSingIn}
                    variant="text"
                    color="inherit"
                    onClick={ () => {user.handleDisplay(true);}}>
                    Sing in
                </Button>

            </Toolbar>
        </AppBar>


    );
};

export default FtAppBar;