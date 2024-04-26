import React, {useContext, useState} from 'react';
import Dialog from "@mui/material/Dialog";
import {UserContext} from "../utils/userContext.js";
import {Box, Button, FormHelperText, Stack, TextField, Typography} from "@mui/material";
import {fetchUser} from "../utils/accountActions.js";
import MyPasswordField, {checkPassword} from "./MyPasswordField.jsx";
import DialogHeader, {dialogPaperProps} from "./dialogCommon.jsx";
import {createToken, t} from "../utils/constants.js";
import {useNavigate} from "react-router-dom";

const DialogLogin = () => {

        const {
            handleDialogRegistration,
            dialogLogin,
            handleDialogLogin,
            setUserProfile
        } = useContext(UserContext);
        const [showPassword, setShowPassword] = React.useState(false);
        const [formFields, setFormFields] = React.useState({});
        const [formError, setFormError] = useState("");
        const [enableOk, setEnableOk] = useState(false);


        const onFormClose = () => {
            handleDialogLogin(false);
            setFormFields({});
            setShowPassword(false);
            setFormError("");
            setEnableOk(false);
        }

        const handleOnBlur = e => {
            let p = {};
            p[e.target.id] = e.target.value.trim();
            p = {...formFields, ...p}
            setFormFields(p);
        }

        const handleFieldsChange = e => {
            let tmp = {};
            tmp[e.target.id] = e.target.value;
            tmp = {...formFields, ...tmp}
            setFormFields(tmp);
            setEnableOk(
                "login" in tmp
                && (tmp["login"].length > 0)
                && ("password" in tmp)
                && (tmp["password"].length > 0)
            )
            if (formError) setFormError("");
        };

        let navigate = useNavigate()

        const submitHandler = (e) => {
            e.preventDefault();
            setEnableOk(false)
            fetchUser(formFields.login, formFields.password)
                .then(
                    response => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error(response.status);
                        }
                    }
                )

                .then(res => {
                    setUserProfile({token: createToken(formFields.login, formFields.password), user: res});
                    onFormClose();
                    navigate("/statistics");

                })
                .catch(e => {
                    if (e.message === "401") {
                        setFormError(`Bad credentials.`);
                    } else {
                        setFormError("Sorry, there is a problem to connect to the server. Try later.");
                    }
                    setEnableOk(true);
                });
        }


        return (
            <Dialog
                PaperProps={dialogPaperProps}
                sx={{alignItems: "center", color: "white"}}
                onClose={() => onFormClose()}
                open={dialogLogin}
            >
                <DialogHeader title={"Enter to account"} onFormClose={onFormClose}/>

                <Box component="form"
                     onSubmit={submitHandler}
                     sx={{
                         display: 'flex',
                         flexDirection: 'horizontal',
                         justifyContent: 'center',
                         width: '98%',
                         backgroundColor: "white"
                     }}
                     noValidate
                     autoComplete="on"
                >


                    <Stack sx={{m: 2, width: '30ch'}}>

                        <TextField
                            sx={{mb: 2}}
                            value={formFields["login"] ? formFields["login"] : ""}
                            error={("login" in formFields) && formFields["login"] === ""}
                            onChange={handleFieldsChange}
                            onBlur={handleOnBlur}
                            required
                            id={"login"}
                            label={"Your email or login name"}
                            variant="standard"
                        />
                        <MyPasswordField xName="password" xLabel={"Password"} xFormFields={formFields}
                                         xOnChange={handleFieldsChange} xOnBlur={handleOnBlur}
                                         xSetShowPassword={setShowPassword} xShowPassword={showPassword}
                                         xCheckNameValue={""}/>


                        <div align={"center"}>
                            <Button
                                sx={{m: 1}}
                                type='submit'
                                id="button1"
                                disabled={!enableOk}
                                variant="outlined"
                            ><span>OK</span>
                            </Button>
                        </div>

                        <FormHelperText id="form-helper" error={true}
                                        sx={{width: '80%', alignSelf: "center", textAlign: "center"}}>
                            {formError ? formError : ""} </FormHelperText>

                    </Stack>


                </Box>

                <Typography variant="subtitle2" sx={{mb: 4, width: '70%', m: 1, textAlign: "center", alignSelf: "center"}}>
                    <p>Are you not with us yet?</p>
                    <p>
                        <Button
                            sx={{color: "#d2508f",}}
                            variant="text"
                            onClick={() => {
                                handleDialogRegistration(true);
                                onFormClose();
                            }}>
                            Register a new account !
                        </Button>
                    </p>
                </Typography>

            </Dialog>

        );
    }
;

export default DialogLogin;