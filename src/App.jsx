import React, {useEffect, useState} from 'react';
import FtAppBar from "./components/FtAppBar.jsx";
import DialogLogin from "./components/DialogLogin.jsx";
import {UserContext} from "./utils/userContext.js";
import DialogRegistration from "./components/DialogRegistration.jsx";
import UserProfile, {loadFromStorage, logOut} from "./utils/UserProfile.js";
import {createToken, testUser, testUserOn} from "./utils/constants.js";
import DialogProfile from "./components/DialogProfile.jsx";
import Main from "./components/Main.jsx";
import FtBottomNavigation from "./components/FtBottomNavigation.jsx";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {fetchUser} from "./utils/accountActions.js";
import {useNavigate} from "react-router-dom";


const App = () => {

    const [userProfile, setUserProfile] = React.useState(
        new UserProfile(testUserOn ? testUser : null,
            testUserOn ? createToken(testUser.login, testUser.password) : null));

    const [dialogLogin, handleDialogLogin] = React.useState(false);
    const [dialogRegistration, handleDialogRegistration] = React.useState(false);
    const [dialogProfile, handleDialogProfile] = React.useState(false);
    const [screenSize, setScreenSize] = useState(window.innerHeight);

    let navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerHeight)
        };
        window.addEventListener('resize', handleResize);

        if (!userProfile.user) {
            const  userProfile = loadFromStorage();
            if (userProfile && userProfile.user) {
                fetchUser( userProfile.user, userProfile.token)
                    .then(
                        response => {
                            if (response.ok) {
                                return response.json();
                            } else throw Error("")
                        }
                    )
                    .then ( res => {
                        setUserProfile({user: res, token: userProfile.token});
                        navigate("/statistics");
                    })
                    .catch (
                        ()=> {
                            setUserProfile(logOut());
                            navigate("/");}

                    );
            }
        }


        return () => {
            window.removeEventListener('resize', handleResize);
        };


    }, []);


    return (

        <UserContext.Provider value={{
            screenSize,
            userProfile,
            setUserProfile,
            dialogLogin,
            handleDialogLogin,
            dialogRegistration,
            handleDialogRegistration,
            handleDialogProfile,
            dialogProfile
        }}>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                    <FtAppBar/>
                    <Main/>
                    <FtBottomNavigation/>
                    {dialogLogin && <DialogLogin/>}
                    {dialogRegistration && <DialogRegistration/>}
                    {dialogProfile && <DialogProfile/>}
                </div>
            </LocalizationProvider>
        </UserContext.Provider>

    );
}

export default App;