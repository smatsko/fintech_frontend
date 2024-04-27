import {baseUrl} from "./constants.js";
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

export const getIndexPeriod = (token, index) => {
    return fetch(`${thisUrl}/index/${index}`, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
    })
}
