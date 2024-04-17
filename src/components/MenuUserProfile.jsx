import React, {useContext} from 'react';
import {Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import LogoutIcon from '@mui/icons-material/Logout';
import {UserContext} from "../utils/userContext.js";
import User from "../utils/User.js";


const MenuUserProfile = ({subMenu, setSubMenu, handleClick}) => {
    const {userProfile, setUserProfile, handleDialogProfile} = useContext(UserContext);

    return (
        <div className={".barSubMenu"}>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ml: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{width: 28, height: 28}}>{userProfile.user.login[0]}</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>

            <Menu
                anchorEl={subMenu}
                open={subMenu != null}
                onClose={() => setSubMenu(null)}
                onClick={() => setSubMenu(null)}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                           backgroundColor: "black",
                            color: "white",
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                backgroundColor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            }
                        }
                    }
                }}

            >
                <MenuItem disabled={true} >
                    <Typography variant="inherit" >{userProfile.user.firstName} {userProfile.user.lastName}</Typography>
                </MenuItem>

                <Divider sx={{ borderColor: "white"}}/>

                <MenuItem
                    onClick={() => {
                        handleDialogProfile(true);
                    }
                    }>
                    {/*<ListItemIcon>*/}
                    {/*    <LogoutIcon fontSize="small" sx={{color: "white"}}/>*/}
                    {/*</ListItemIcon>*/}
                    <Typography variant="inherit">Edit profile</Typography>
                </MenuItem>

                <MenuItem
                    onClick={() => {
                        setUserProfile({user: null})
                    }
                    }>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" sx={{color: "white"}}/>
                    </ListItemIcon>
                    <Typography variant="inherit">Log out</Typography>
                </MenuItem>
            </Menu>
        </div>

    );
};

export default MenuUserProfile;