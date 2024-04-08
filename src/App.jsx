import React from 'react';
import Body from "./components/Body.jsx";
import FtAppBar from "./components/FtAppBar.jsx";
import MyDialog from "./components/MyDialog.jsx";
import {UserContext} from "./utils/userContext.js";


const App = () => {

    const [openDialog, handleDisplay] = React.useState(false);

    const handleClose = () => {
        handleDisplay(false);
    };


    return (

        <UserContext.Provider value={{
            openDialog,
            handleDisplay,
        }}>

            <div>
                <FtAppBar/>
                <Body/>
                <MyDialog/>
            </div>

        </UserContext.Provider>

    );
}

export default App;