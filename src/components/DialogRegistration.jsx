import React, {useContext,  useState} from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {UserContext} from "../utils/userContext.js";
import {Box, Button, FormHelperText, IconButton, Stack} from "@mui/material";
import Glyph from "../images/Glyph.png";
import {registerUser} from "../utils/accountActions.js";
import MyTextField1 from "./MyTextField1.jsx";
import MyEmailField, {checkEMail} from "./MyEmailField.jsx";
import MyPasswordField, {checkPassword} from "./MyPasswordField.jsx";
import CloseIcon from '@mui/icons-material/Close';


const DialogRegistration = () => {

    const {dialogRegistration, handleDialogRegistration, setUserProfile} = useContext(UserContext);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordAgain, setShowPasswordAgain] = React.useState(false);
    const [formFields, setFormFields] = React.useState({});
    const [formError, setFormError] = useState("");
    const [enableOk, setEnableOk] = useState(false);


    const onFormClose = () => {
        handleDialogRegistration(false);
        setFormFields({});
        setShowPassword(false);
        setShowPasswordAgain(false)
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
            "firstName" in tmp
            && tmp["firstName"]
            && "login" in tmp
            && checkEMail(tmp["login"])
            && "lastName" in tmp
            && tmp["lastName"]
            && ("password" in tmp)
            && checkPassword(tmp["password"])
            && "passwordagain" in tmp
            && tmp["password"] === tmp["passwordagain"]
        );
        if (formError) setFormError("");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setEnableOk(false)
        let tmp = {...formFields}
        delete tmp.passwordagain;

        registerUser(tmp)
            .then(
                response => {
                    if (response.ok) return response.json();
                    return response.json().then(response => {
                        throw new Error(response.status);
                    })
                }
            )
            .then(res => {
                setUserProfile( {user: res});
                onFormClose();
            })
            .catch(e => {
                if (e.message === "409") {
                    setFormError(`User ${formFields["login"]} already exists.`);
                } else {
                    setFormError("Sorry, there is a problem to connect to the server. Try later.");
                }
                setEnableOk(true);
            });
    }

    return (
        <Dialog
            PaperProps={{
                style: {
                    backgroundColor: "#383393",
                    boxShadow: "none",
                    borderRadius: 10,
                    color: "white"
                },
            }}
            sx={{alignItems: "center", color: "white"}}
            onClose={() => onFormClose()}
            open={dialogRegistration}
        >

            <Box
                component="div"
                sx={{
                    display: 'flex',
                    flexDirection: 'horizontal',
                    justifyContent: 'center',
                    width: '35ch',
                }}
            >
                <Box
                    component="img"
                    sx={{m: 1}}
                    alt=">>"
                    src={Glyph}
                />

                <DialogTitle sx={{alignSelf: "center"}}>Registration form</DialogTitle>


                <IconButton sx={{
                    color: "#d2508f",
                    backgroundColor: "#555393",
                    borderRadius: "0",
                    width: "10px",
                    height: "10px",
                    margin: "5px"
                }}
                            onClick={() => onFormClose()}
                    //onMouseDown={handleMouseDownPassword}
                >
                    <CloseIcon/>

                </IconButton>

            </Box>

            <Box component="form"
                 onSubmit={submitHandler}
                 sx={{
                     display: 'flex',
                     flexDirection: 'horizontal',
                     justifyContent: 'center',
                     width: '35ch',
                     backgroundColor: "white"
                 }}
                 noValidate
                 autoComplete="on"
            >


                <Stack sx={{m: 2, width: '30ch'}}>

                    <MyTextField1 xName="firstName" xLabel={"Your first name"} xFormFields={formFields}
                                  xOnChange={handleFieldsChange} xOnBlur={handleOnBlur}/>
                    <MyTextField1 xName="lastName" xLabel={"Your last name"} xFormFields={formFields}
                                  xOnChange={handleFieldsChange} xOnBlur={handleOnBlur}/>
                    <MyEmailField xName="login" xLabel={"Your email"} xFormFields={formFields}
                                  xOnChange={handleFieldsChange} xOnBlur={handleOnBlur}/>
                    <MyPasswordField xName="password" xLabel={"Password"} xFormFields={formFields}
                                     xOnChange={handleFieldsChange} xOnBlur={handleOnBlur}
                                     xSetShowPassword={setShowPassword} xShowPassword={showPassword}
                                     xCheckNameValue={""}/>
                    <MyPasswordField xName="passwordagain" xLabel={"Password again"} xFormFields={formFields}
                                     xOnChange={handleFieldsChange} xOnBlur={handleOnBlur}
                                     xSetShowPassword={setShowPasswordAgain} xShowPassword={showPasswordAgain}
                                     xCheckNameValue="password"/>

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


                    <FormHelperText id="form-helper" error={true} sx={{width: "90%", alignSelf: "center", textAlign: "center"}}>
                        {formError ? formError : ""} </FormHelperText>

                </Stack>

            </Box>


        </Dialog>

    );
};


export default DialogRegistration;