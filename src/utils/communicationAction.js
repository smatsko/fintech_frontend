import {baseUrl} from "./constants.js";

const thisUrl = baseUrl + "/communication";

export const _postData = async (url = '', data = {}, token) => {

    return await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: token,

        },
        body: JSON.stringify(data)
    })
        .then ((ans)=>{
            if (!ans.ok) {
                throw new Error(`${ans.status}`)
            } else {
                return ans.json();
            }
        }) .catch ((e)=>{
            throw new Error(`_postData: ${e}`)
        })

}



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


export const getDataPeriodDays = (token, indexes, fromDate, toDate, periodDays) => {
    return _postData(`${thisUrl}/data`,
        {
            "indexs": indexes,
            "type": "days",
            "quantity": periodDays,
            "from": fromDate,
            "to": toDate,
        }, token);
}

