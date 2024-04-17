import React from 'react';
import Body from "./components/Body.jsx";
import FtAppBar from "./components/FtAppBar.jsx";
import DialogLogin from "./components/DialogLogin.jsx";
import {UserContext} from "./utils/userContext.js";
import DialogRegistration from "./components/DialogRegistration.jsx";
import UserProfile from "./utils/UserProfile.js";
import {testUser, testUserOn} from "./utils/constants.js";
import DialogProfile from "./components/DialogProfile.jsx";
import DialogCommon from "./components/dialogCommon.jsx";


const App = () => {

    const [userProfile, setUserProfile] = React.useState(
        new UserProfile(testUserOn ? testUser : null));
    const [dialogLogin, handleDialogLogin] = React.useState(false);
    const [dialogRegistration, handleDialogRegistration] = React.useState(false);
    const [dialogProfile, handleDialogProfile] = React.useState(false);



    return (

        <UserContext.Provider value={{
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
                <Body/>
                {dialogLogin && <DialogLogin/>}
                {dialogRegistration && <DialogRegistration/>}
                {dialogProfile && <DialogProfile/>}
            </div>

        </UserContext.Provider>

    );
}

export default App;