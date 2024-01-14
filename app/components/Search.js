"use client"
import { useState } from 'react';
import styles from '../styles/tableau.css';

export default function Search() {
    const [commune, setCommune] = useState('');
    const [dataResponse, setDataResponse] = useState(['']);

    const handleAdresseChange = (e) => {
        setCommune(e.target.value);
    };

    async function handleUpdateAdress() {
        if (commune) {
            const url = "https://api-adresse.data.gouv.fr/search/?q=";
            fetch(url + commune)
                .then(response => {
                    // Vérifie si la requête s'est déroulée avec succès (statut HTTP 200)
                    if (!response.ok) {
                        throw new Error('Erreur de réseau');
                    }
                    // Utilise la méthode .json() quand elle veut bien, pour obtenir les données JSON que je peut ENFIN traiter !!!
                    return response.json();
                })
                .then(async data => {
                    const apiUrlEndpoint = `/api/getdata`;
                    const postData = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: data.features[0].properties.citycode
                        }),
                    }
                    const response = await fetch(apiUrlEndpoint, postData);
                    const res = await response.json();
                    setDataResponse(res.results);
                })
        }
    };

    return (
        <>
            <div className="TableauContainer">
                <h1 style={{marginLeft: '0px'}}>Tableau de couverture réseau française</h1>
            
                <div>
                    <h2>Insérez le nom d'une commune pour accéder à ses informations</h2>
                    <input role="combobox"
                        aria-autocomplete="list"
                        aria-expanded="false"
                        autoComplete="on"
                        placeholder="Chercher une commune..."
                        aria-label="Recherche"
                        className="jsx-2370006322 search"
                        value={commune}
                        onChange={handleAdresseChange}>
                    </input>

                    <button className='button' onClick={handleUpdateAdress}>Rechercher</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Département</th>
                            <th>Nombre</th>
                            <th>1GB</th>
                            <th>100MB</th>
                            <th>30MB</th>
                            <th>8MB</th>
                            <th>3MB</th>
                            <th>0.5MB</th>
                            <th>Inéligible</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{dataResponse.nom_com}</td>
                            <td>{dataResponse.code_dep}</td>
                            <td>{dataResponse.nbr}</td>
                            <td>{dataResponse.elig_thd1g} {dataResponse == '' ? '' : '('+Math.round(dataResponse.elig_thd1g / dataResponse.nbr * 100)+' %)'}</td>
                            <td>{dataResponse.elig_thd100} {dataResponse == '' ? '' : '('+Math.round(dataResponse.elig_thd100 / dataResponse.nbr * 100)+' %)'}</td>
                            <td>{dataResponse.elig_thd30} {dataResponse == '' ? '' : '('+Math.round(dataResponse.elig_thd30 / dataResponse.nbr * 100)+' %)'}</td>
                            <td>{dataResponse.elig_bhd8} {dataResponse == '' ? '' : '('+Math.round(dataResponse.elig_bhd8 / dataResponse.nbr * 100)+' %)'}</td>
                            <td>{dataResponse.elig_hd3} {dataResponse == '' ? '' : '('+Math.round(dataResponse.elig_hd3 / dataResponse.nbr * 100)+' %)'}</td>
                            <td>{dataResponse.elig_hd05} {dataResponse == '' ? '' : '('+Math.round(dataResponse.elig_hd05 / dataResponse.nbr * 100)+' %)'}</td>
                            <td>{dataResponse.inel_hd} {dataResponse == '' ? '' : '('+Math.round(dataResponse.inel_hd / dataResponse.nbr * 100)+' %)'}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
};