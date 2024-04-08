import React, {useContext} from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {UserContext} from "../utils/userContext.js";
import {
    Avatar, Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup, Stack,
    TextField, Typography
} from "@mui/material";
import {gravatarFullUrl, gravatarNames} from "../utils/gravatar.js";

const MyDialog = () => {


    const user = useContext(UserContext);

    return (
        <Dialog
            PaperProps={{
                style: {
                    backgroundColor: "#383393",
                    boxShadow: "none",
                    color: "whitesmoke",
                },
            }}
            sx={{alignItems: "center"}}
            onClose={() => user.handleDisplay(false)}
            open={user.openDialog}
        >

            <DialogTitle sx={{alignSelf: "center"}}> Enter to account </DialogTitle>

            <Box
                component="form"
                sx={{
                       display: 'flex',
                       flexDirection: 'vertical',
                       alignItems: 'center',
                        justifyContent: {xs: 'center', md: 'center'},
                       '& .MuiTextField-root': {
                        m: 1,
                        width: '30ch', color: 'white', textColor: "white"
                    },
                    backgroundColor: "white", borderColor: "black",
                    borderTop: 1,
                    color: "white"
                }}
                noValidate
                autoComplete="off"
            >
                <Stack>
                    <TextField
                        sx={{backgroundColor: "white", borderColor: "black"}}
                        required
                        id="outlined-required"
                        label="E-Mail or phone number"
                        defaultValue=""
                        variant="filled"
                    />

                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />


                    <div align={"center"}>
                        <Button
                            sx={{m:1}}
                            id="button1"
                            variant="outlined"
                            onClick={() => {
                                user.handleDisplay(false)

                            }}
                        ><span>OK</span>
                        </Button>
                    </div>

                </Stack>

            </Box>

            <Typography variant="subtitle2" sx={{mb: 4, width: '70%', m: 1, textAlign: "center", alignSelf: "center" }}>
                <p>Are you not with us yet?</p>
                <p>To register new account, please, click here. </p>
            </Typography>

        </Dialog>

    );
};

export default MyDialog;