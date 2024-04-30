import {baseUrl, createToken} from "./constants.js";
const thisUrl = baseUrl+"/account";


export const registerUser = (user) => {
    return fetch(`${thisUrl}/register`, {
        method: 'Post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const fetchUser = (login, token) => {
    return fetch(`${thisUrl}/login`, {
        method: 'Post',
        headers: {
            'Authorization': token
        }
    })
}

export const changePassword = (login, oldPassword, newPassword) => {
    return fetch(`${thisUrl}/user/password`, {
        method: 'Put',
        headers: {
            'Authorization': createToken(login, oldPassword),
            'X-Password': newPassword
        }
    })
}


export const updateUser = (login, token,  fields) => {
    return fetch(`${thisUrl}/user/${login}`, {
        method: 'Put',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(fields)
    })
}