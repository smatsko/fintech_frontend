import * as React from 'react';
import {
    AppBar,
    Box,
    Button,
    Toolbar,
} from "@mui/material";
import LogoName from "../images/Logo Name.png";
import Glyph from "../images/Glyph.png";
import {UserContext} from "../utils/userContext.js";
import {useContext} from "react";
import MenuUserProfile from "./MenuUserProfile.jsx";
import ButtonMainMenu from "./ButtonMainMenu.jsx";
import {NavLink, useNavigate} from "react-router-dom";

const mainMenuItems = ["Statistics", "Analytics", "Contacts"];


const FtAppBar = () => {

    const [subMenu, setSubMenu] = React.useState(null);
    const {userProfile, handleDialogLogin} = useContext(UserContext);


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


    let navigate = useNavigate();

    return (

        <AppBar position="static" sx={{background: "#04031C"}}>
            <Toolbar>
                <NavLink to="/">
                    <Box component="img" alt=">>" src={Glyph} sx={{mr: 1}}/>
                </NavLink>
                <NavLink to="/">
                    <Box component="img" alt="StockStat" src={LogoName}/>
                </NavLink>

                <Box component="div" sx={{
                    flexGrow: 1, display: {xs: 'none', md: 'flex'},
                    justifyContent: "center"
                }}>



                    {userProfile.user && mainMenuItems.map((item) => (
                        <ButtonMainMenu key={item} onClick={() => {
                            navigate("/" + item.toLowerCase())
                        }}
                                        sx={{ml: 4, mr: 4}}>
                            {item}
                        </ButtonMainMenu>

                    ))}


                </Box>

                {!userProfile.user ? <Button
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
                    handleClick={handleClick}
                />
                }


            </Toolbar>
        </AppBar>


    );
};

export default FtAppBar;