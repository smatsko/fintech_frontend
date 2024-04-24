import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Body from "./Body.jsx";
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
            <Route keys="statistics" path="/statistics" element={<Statistics/>}/>
            <Route keys="analytics" path="/analytics" element={<Analytics/>}/>
            <Route keys="contacts" path="/contacts" element={<Contacts/>}/>
            <Route keys="def" path="*" element={<Body/>}/>
        </Routes>
    )
};

export default Main;