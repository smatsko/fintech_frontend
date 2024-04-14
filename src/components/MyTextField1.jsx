import React from 'react';
import {TextField} from "@mui/material";

const MyTextField1 = ({xName, xLabel, xFormFields, xOnChange, xOnBlur}) => {
    return (
        <TextField
            sx={{mb:2}}
            value={xFormFields[xName] ? xFormFields[xName] : ""}
            onChange={xOnChange}
            onBlur={xOnBlur}
            error={(xName in xFormFields) && !xFormFields[xName]}
            required
            id={xName}
            label={xLabel}
            helperText={(xName in xFormFields) && !xFormFields[xName] ? "value is required" : ""}
            variant="standard"
        />
    )

}

export default MyTextField1;