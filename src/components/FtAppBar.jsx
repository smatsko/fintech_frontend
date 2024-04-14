import * as React from 'react';
import {
    AppBar, Avatar,
    Box,
    Button, Divider, IconButton, ListItemIcon, Menu, MenuItem,
    Toolbar, Tooltip,
    Typography
} from "@mui/material";
import LogoName from "../images/Logo Name.png";
import Glyph from "../images/Glyph.png";
import {UserContext} from "../utils/userContext.js";
import {useContext} from "react";
import MenuUserProfile from "./MenuUserProfile.jsx";


const FtAppBar = () => {

    const [subMenu, setSubMenu] = React.useState(null);
    const {userProfile, handleDialogLogin}   = useContext(UserContext);


    const handleClick = (event) => {
        setSubMenu(event.currentTarget);
    };


    const styleSingIn = {
        textTransform: 'none',
        "&:hover": {
            backgroundColor: "#383393"

        },
        "&:active": {
            backgroundColor: "#383393"
        }
    };


    let a = !userProfile.user ? <Button
        sx={styleSingIn}
        variant="text"
        color="inherit"
        onClick={() => {
            handleDialogLogin(true);
        }}>
        Sign in
    </Button> : <MenuUserProfile
        setSubMenu={setSubMenu}
        subMenu={subMenu}
        handleClick={handleClick}/>
    ;


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
                    //justifyContent={"end"}
                    component="img"
                    sx={{
                        height: 18
                    }}
                    alt="StockStat"
                    src={LogoName}
                />



                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                </Typography>

                {a}


            </Toolbar>
        </AppBar>


    );
};

export default FtAppBar;