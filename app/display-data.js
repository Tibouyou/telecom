'use client';
import { useEffect, useState } from 'react';

export default function DisplayData() {
    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `/api/getdata`;
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            console.log(res);
            setDataResponse(res.results);
        }
        getPageData();
    }, []);

    return (
        <div>
            <h1>Display Data</h1>
            {dataResponse.map((data) => data.text)}
        </div>
    )
}