import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import FirstPage from "./FirstPage.jsx";
import Contacts from "./Contacts.jsx";
import Statistics from "./Statistics.jsx";
import Analytics from "./Analytics.jsx";
import {UserContext} from "../utils/userContext.js";

const Main = () => {
    const {
        userProfile
    } = useContext(UserContext);
    return (
        <Routes>
            {userProfile.user && <Route keys="statistics" path="/statistics" element={<Statistics/>}/>}
            {userProfile.user &&<Route keys="analytics" path="/analytics" element={<Analytics/>}/>}
            {userProfile.user &&<Route keys="contacts" path="/contacts" element={<Contacts/>}/>}
            <Route keys="def" path="*" element={<FirstPage/>}/>
        </Routes>
    )
};

export default Main;