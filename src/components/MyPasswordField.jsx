import React from 'react';
import {FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";


export const checkPassword = pass => {
    return pass.length > 7
};


const MyPasswordField = ({
                             xName, xLabel, xFormFields, xOnChange, xOnBlur,
                             xShowPassword, xSetShowPassword, xCheckNameValue, xCheckPassword
                         }) => {


    const handleClickShowPassword = () => xSetShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleOnChange = e => {
        let tmp = "";
        for (let l of e.target.value) {
            if (/^[\da-zA-Z#$%&'()*+-./:;<=>?@[\]^_`{|}~( ]$/.test(l)) tmp = tmp + l;
        }
        e.target.value = tmp;
        xOnChange(e);
    }

    return (
        <FormControl variant="standard">
            <InputLabel htmlFor={xName}>{xLabel}</InputLabel>
            <Input
                sx={{m: 0}}
                id={xName}
                type={xShowPassword ? 'text' : 'password'}
                value={xFormFields[xName] ? xFormFields[xName] : ""}
                onChange={handleOnChange}
                onBlur={xOnBlur}
                error={ xCheckPassword && (xName in xFormFields) && !checkPassword(xFormFields[xName])}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {xShowPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText id="adsadas" error={true} sx={{mb: 2}}>{
                xCheckNameValue ?
                      (xCheckNameValue in xFormFields)
                      && ( !( xName in xFormFields)
                           || xFormFields[xName] !== xFormFields[xCheckNameValue]) ?
                         "Passwords doesn't match" : ""
                    : xCheckPassword && (xName in xFormFields) && !checkPassword(xFormFields[xName]) ? "At least 8 symbols" : ""}
            </FormHelperText>

        </FormControl>


    )

}

export default MyPasswordField;