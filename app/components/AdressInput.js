"use client";
import React, { useState } from 'react';
import styles from '../styles/donnees.css';

const AdressInput = ({ setCenter }) => {
    const [adress, setAdress] = useState('');

    const handleAdresseChange = (e) => {
        setAdress(e.target.value);
    };

    const handleUpdateAdress = () => {
        if (adress) {
            const url = "https://api-adresse.data.gouv.fr/search/?q=";


            fetch(url + adress)
                .then(response => {
                    // Vérifie si la requête s'est déroulée avec succès (statut HTTP 200)
                    if (!response.ok) {
                        throw new Error('Erreur de réseau');
                    }
                    return response.json();
                })
                .then(data => {
                    // On change le centre de la carte
                    setCenter({ lat: parseFloat(data.features[0].geometry.coordinates[1]), lng: parseFloat(data.features[0].geometry.coordinates[0]) });
                })
        }
    };

    return (
        <div className="coordinates-input container">
            <h3>Insérez une adresse ou une ville pour visualiser la localisation</h3>
            <input role="combobox"
                aria-autocomplete="list"
                aria-expanded="false"
                autoComplete="on"
                placeholder="Chercher une adresse..."
                aria-label="Recherche"
                className="jsx-2370006322 search"
                value={adress}
                onChange={handleAdresseChange}>
            </input>

            <button className='button' onClick={handleUpdateAdress}>Mettre à jour la carte</button>
        </div>
    );
};

export default AdressInput;