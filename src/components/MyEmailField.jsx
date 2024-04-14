import React from 'react';
import {TextField} from "@mui/material";


export const checkEMail = email =>  {
        return /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(email);
};


const MyEmailField = ({xName, xLabel, xFormFields, xOnChange, xOnBlur, checkValue}) => {
    return (
        <TextField
            sx={{mb:2}}
            value={xFormFields[xName] ? xFormFields[xName] : ""}
            onChange={xOnChange}
            type="email"
            onBlur={xOnBlur}
            error={(xName in xFormFields) && !checkEMail(xFormFields[xName])}
            required
            id={xName}
            label={xLabel}
            helperText={(xName in xFormFields) && !checkEMail(xFormFields[xName]) ? "is not a valid email" : ""}
            variant="standard"
        />
    )

}

export default MyEmailField;