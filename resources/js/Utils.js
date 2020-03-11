import React, {useEffect, useState} from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    async function fetchData() {
        try {
            const response = await fetch(url, {
                mode: 'cors'
            });
            const json = await response.json();
            setData(json);
        } catch (err){
            fetchData();
        }
    }

    useEffect(() => {fetchData()},[url]);
    return data;
}

export async function postFetch(url, sendData) {

    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(sendData)
        });

        return await response.json();
    } catch (err){
        console.error(err);
        return false;
    }
}

export async function getFetch(url){
    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        });

        return await response.json();
    } catch (err){
        console.error(err);
        return false;
    }
}


