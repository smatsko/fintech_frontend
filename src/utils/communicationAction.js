import {baseUrl, createToken} from "./constants.js";
const thisUrl = baseUrl + "/communication";

export const getIndexes = (token) => {
    return fetch(`${thisUrl}/index`, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
    })
}

