import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const { id } = router.query;
    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        if (!router.isReady) return;
        async function getPageData() {
            const apiUrlEndpoint = `/api/getdata`;
            const postData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    id: id
                }),
            }
            const response = await fetch(apiUrlEndpoint, postData);
            const res = await response.json();
            setDataResponse(res.results);
        }
        getPageData();
    }, [router.query.id, router.isReady]);
    return (
        <div>
            <h1>Display Data</h1>
            {dataResponse.nom_com}
        </div>
    )
}