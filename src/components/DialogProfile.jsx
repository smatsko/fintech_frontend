import React, {useContext, useState} from 'react';
import Dialog from "@mui/material/Dialog";
import {UserContext} from "../utils/userContext.js";
import {Box, Button, FormHelperText, Grid, IconButton, Stack, Typography} from "@mui/material";
import {changePassword, updateUser} from "../utils/accountActions.js";
import MyTextField1 from "./MyTextField1.jsx";
import MyPasswordField, {checkPassword} from "./MyPasswordField.jsx";
import DialogHeader,{ dialogPaperProps} from "./dialogCommon.jsx";
import {createToken} from "../utils/constants.js";


const DialogProfile = () => {

    const {dialogProfile, handleDialogProfile, userProfile, setUserProfile} = useContext(UserContext);
    const [showOldPassword, setShowOldPassword] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordAgain, setShowPasswordAgain] = React.useState(false);
    const [formFields, setFormFields] = React.useState({...userProfile["user"]});
    const [formFields1, setFormFields1] = React.useState({});
    const [formHelper, setFormHelper] = useState({});
    const [enableOk, setEnableOk] = useState(false);
    const [enableOk1, setEnableOk1] = useState(false);


    const setFormMessageError = msg => {
        setFormHelper({err: true, message: msg});
    }

    const setFormMessageOk = msg => {
        setFormHelper({err: false, message: msg});
    }

    const setFormMessageClear = () => {
        if ("message" in formHelper) setFormHelper({});
    }


    const onFormClose = () => {
        handleDialogProfile(false);
        setFormFields({...userProfile["user"]});
        setFormFields1({});
        setOldPassword(false)
        setShowPassword(false);
        setShowPasswordAgain(false)
        setFormMessageClear();
        setEnableOk(false);
        setEnableOk1(false);
    }


    const handleOnBlur = e => {
        let p = {};
        p[e.target.id] = e.target.value.trim();
        p = {...formFields, ...p}
        setFormFields(p);
    }

    const handleOnBlur1 = e => {
        let p = {};
        p[e.target.id] = e.target.value.trim();
        p = {...formFields1, ...p}
        setFormFields1(p);
    }

    const handleFieldsChange = e => {
        let tmp = {};
        tmp[e.target.id] = e.target.value;
        tmp = {...formFields, ...tmp}
        setFormFields(tmp);
        setEnableOk(
            tmp["firstName"]
            && tmp["lastName"]
            && (tmp["firstName"] !== userProfile.user["firstName"]
                || tmp["lastName"] !== userProfile.user["lastName"])
        );
        if ("message" in formHelper) setFormHelper({});
    };

    const handleFieldsChange1 = e => {
        let tmp = {};
        tmp[e.target.id] = e.target.value;
        tmp = {...formFields1, ...tmp}
        setFormFields1(tmp);
        setEnableOk1(
            "oldPassword" in tmp
            && tmp["oldPassword"] !== ""
            && "password" in tmp
            && checkPassword(tmp["password"])
            && "passwordAgain" in tmp
            && checkPassword(tmp["passwordAgain"])
            && tmp["password"] === tmp["passwordAgain"]);
        if ("message" in formHelper) setFormHelper({});
    };


    const submitHandler = (e) => {
        e.preventDefault();
        setEnableOk(false)


        updateUser(userProfile.user.login, userProfile.token, formFields)
            .then(
                response => {
                    if (response.ok) return response.json();
                    return response.json().then(response => {
                        throw new Error(response.status);
                    })
                })
            .then(res => {
                setUserProfile( {...userProfile, user: res})
                setFormMessageOk("Profile is changed.");
            })
            .catch(e => {
                setFormMessageError("Sorry, there is a problem to connect to the server. Try later.");
                setEnableOk(true);
            });
    }

    const submitHandler1 = (e) => {
        e.preventDefault();
        setEnableOk1(false)
        changePassword(userProfile.user.login, formFields1["oldPassword"], formFields1["password"])
            .then(
                response => {
                    if (response.ok) {
                        setFormMessageOk("Password is changed.");
                        setUserProfile( { ...userProfile, token: createToken(userProfile.user.login, formFields1["password"])  });
                        setFormFields1({});
                    } else throw new Error(response.status);
                }
            )
            .catch(e => {
                if (e.message === "401") {
                    setFormMessageError(`Wrong current password.`);
                    delete formFields1.oldPassword;
                } else {
                    setFormMessageError("Sorry, there is a problem to connect to the server. Try later.");
                    setEnableOk1(true);
                }
            });
    }


    return (
        <Dialog
            PaperProps={dialogPaperProps}
            sx={{alignItems: "center", color: "white"}}
            onClose={() => onFormClose()}
            open={dialogProfile}
        >
            <DialogHeader title={"Edit profile"} onFormClose={onFormClose}/>
            <Grid container spacing={1} justifyContent={"space-between"} alignItems={"center"} sx={{padding: "2px"}}>
                <Grid item xs={12}>
                    <Grid container spacing={1} justifyContent={"center"} alignContent={"flex-start"}
                          flexWrap={"wrap"}
                          sx={{padding: "4px", backgroundColor: "white", color: "black"}}>
                        <Grid item xs={6}>
                            <Grid item xs={6}>
                                <Typography
                                    sx={{
                                        border: '2px solid gray',
                                        borderRadius: "10px",
                                        width: '25ch',
                                        m: 2,
                                        paddingX: 1
                                        // backgroundColor: "white"
                                    }}>E-mail/login: {formFields["login"]} </Typography>

                            </Grid>

                            <Grid item xs={6}>

                                <Box component="form"
                                     onSubmit={submitHandler}
                                     sx={{
                                         border: '2px solid gray',
                                         borderRadius: "10px",
                                         width: '30ch',
                                         m: 2
                                         // backgroundColor: "white"
                                     }}
                                     noValidate
                                     autoComplete="on"
                                >


                                    <Stack sx={{
                                        m: 2,
                                        width: '25ch',
                                        border: "10px",
                                        borderColor: "red",
                                        alignJustify: "center"
                                    }}>

                                        <MyTextField1 xName="firstName" xLabel={"Your first name"}
                                                      xFormFields={formFields}
                                                      xOnChange={handleFieldsChange} xOnBlur={handleOnBlur}/>
                                        <MyTextField1 xName="lastName" xLabel={"Your last name"}
                                                      xFormFields={formFields}
                                                      xOnChange={handleFieldsChange} xOnBlur={handleOnBlur}/>

                                        <div align={"center"}>
                                            <Button
                                                sx={{m: 1}}
                                                type='submit'
                                                id="button1"
                                                disabled={!enableOk}
                                                variant="outlined"
                                            ><span>Save</span>
                                            </Button>
                                        </div>

                                    </Stack>

                                </Box>
                            </Grid>
                        </Grid>


                        <Grid item xs={6}>
                            <Box component="form"
                                 onSubmit={submitHandler1}
                                 sx={{
                                     border: '2px solid gray',
                                     borderRadius: "10px",
                                     width: '30ch',
                                     m: 2
                                     // backgroundColor: "white"
                                 }}
                                 noValidate
                                 autoComplete="on"
                            >


                                <Stack sx={{
                                    m: 2,
                                    width: '25ch',
                                    border: "10px",
                                    borderColor: "red",
                                    alignJustify: "center"
                                }}>

                                    <MyPasswordField xName="oldPassword" xLabel={"Your current password"}
                                                     xFormFields={formFields1}
                                                     xOnChange={handleFieldsChange1} xOnBlur={handleOnBlur1}
                                                     xSetShowPassword={setShowOldPassword} xShowPassword={showOldPassword}
                                                     xCheckNameValue={""} xCheckPassword={false}/>
                                    <MyPasswordField xName="password" xLabel={"New password"} xFormFields={formFields1}
                                                     xOnChange={handleFieldsChange1} xOnBlur={handleOnBlur1}
                                                     xSetShowPassword={setShowPassword} xShowPassword={showPassword}
                                                     xCheckNameValue={""} xCheckPassword={true}/>
                                    <MyPasswordField xName="passwordAgain" xLabel={"New password again"}
                                                     xFormFields={formFields1}
                                                     xOnChange={handleFieldsChange1} xOnBlur={handleOnBlur1}
                                                     xSetShowPassword={setShowPasswordAgain}
                                                     xShowPassword={showPasswordAgain}
                                                     xCheckNameValue="password" xCheckPassword={true}/>

                                    <div align={"center"}>
                                        <Button
                                            sx={{m: 1}}
                                            type='submit'
                                            id="button2"
                                            disabled={!enableOk1}
                                            variant="outlined"
                                        ><span>Change password</span>
                                        </Button>
                                    </div>
                                </Stack>
                            </Box>


                        </Grid>
                        <Grid item xs={12}>
                            <FormHelperText id="form-helper" error={formHelper.err}
                                            sx={{
                                                width: "90%",
                                                alignSelf: "center",
                                                textAlign: "center",
                                                color: "green"
                                            }}>
                                {formHelper.message} </FormHelperText>


                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Dialog>


    );
};

export default DialogProfile