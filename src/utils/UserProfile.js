import {createToken} from "./constants.js";
import {decryptAES, encryptAES} from "../components/crypto.js";

export const isAdministrator = (userProfile) => {
    return userProfile && userProfile.user && userProfile.user.roles.includes("ADMINISTRATOR")
}



class UserProfile {
    constructor( user, token) {
       this.user = user;
       this.token = token;
    }

}

const nameInStorage = "xRtvdsIs$H3Dsad";
const nameInStorageMaxPeriod  = 5 * 24 // hours

export const saveToStorage = (user, password) => {
    const info = {
        login: user.login,
        token: createToken(user.login, password),
        time: Date.now(),
    }
    localStorage.setItem(nameInStorage, encryptAES( JSON.stringify(info), nameInStorage));
    return  {token : info.token, user: user}
}


export const logOut = () => {
    localStorage.removeItem(nameInStorage);
    return {user: null};
}

export const loadFromStorage = () => {
    try {
        let info = localStorage.getItem(nameInStorage);
        if (info) {
            info = JSON.parse(decryptAES(info, nameInStorage));
            if ((Date.now() - info.time) < nameInStorageMaxPeriod * 60 * 60 * 1000)
                return new UserProfile ({login: info.login}, info.token);
        }
    } catch  {
        logOut();
    }

    return null;
}




export default UserProfile;


