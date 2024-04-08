import React, {useContext} from 'react';
import {UserContext} from "../utils/userContext.js";
import {Avatar} from "@mui/material";
import {gravatarFullUrl} from "../utils/gravatar.js";

const MyAvatar = ({size, spVariant}) => {
    const user = useContext(UserContext);

    let spSize=10;

    return (
        <Avatar
            src={gravatarFullUrl(user.name)}
            alt={user.name}
            variant={spVariant}
            sx={{ width: size, height: size}}
            onClick={() => {
                user.handleDisplay(true);
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                const newName = prompt('Enter new name');
                user.setName(newName || user.name);
            }}
        />
    );
};

export default MyAvatar;