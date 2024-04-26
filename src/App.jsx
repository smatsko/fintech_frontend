import React, {useEffect, useState} from 'react';
import FtAppBar from "./components/FtAppBar.jsx";
import DialogLogin from "./components/DialogLogin.jsx";
import {UserContext} from "./utils/userContext.js";
import DialogRegistration from "./components/DialogRegistration.jsx";
import UserProfile from "./utils/UserProfile.js";
import {testUser, testUserOn} from "./utils/constants.js";
import DialogProfile from "./components/DialogProfile.jsx";
import Main from "./components/Main.jsx";
import FtBottomNavigation from "./components/FtBottomNavigation.jsx";



const App = () => {

   const [userProfile, setUserProfile] = React.useState(
        new UserProfile(testUserOn ? testUser : null));

    const [dialogLogin, handleDialogLogin] = React.useState(false);
    const [dialogRegistration, handleDialogRegistration] = React.useState(false);
    const [dialogProfile, handleDialogProfile] = React.useState(false);
    const [ screenSize, setScreenSize] = useState(Math.max(0, window.innerHeight));

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerHeight)
        };
        window.addEventListener('resize', handleResize);
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

            <div>
                <FtAppBar/>
                <Main/>
                <FtBottomNavigation/>
                {dialogLogin && <DialogLogin/>}
                {dialogRegistration && <DialogRegistration/>}
                {dialogProfile && <DialogProfile/>}
            </div>

        </UserContext.Provider>

    );
}

export default App;