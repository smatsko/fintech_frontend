import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import FirstPage from "./FirstPage.jsx";
import Contacts from "./Contacts.jsx";
import Statistics from "./Statistics.jsx";
import Analytics from "./Analytics.jsx";
import {UserContext} from "../utils/userContext.js";
import {isAdministrator} from "../utils/UserProfile.js";
import AdministrativePanel from "./AdministrativePanel.jsx";


const Main = () => {
    const {
        userProfile
    } = useContext(UserContext);
    return (
        <Routes>
            {userProfile.user && <Route keys="statistics" path="/statistics" element={<Statistics/>}/>}
            {userProfile.user && <Route keys="analytics" path="/analytics" element={<Analytics/>}/>}
            {userProfile.user && <Route keys="contacts" path="/contacts" element={<Contacts/>}/>}
            {isAdministrator(userProfile) &&<Route keys="administravepanel" path="/administrativepanel" element={<AdministrativePanel/>}/>}
            <Route keys="def" path="*" element={<FirstPage/>}/>
        </Routes>
    )
};

export default Main;