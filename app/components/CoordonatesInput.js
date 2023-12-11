"use client";
import React, { useState } from 'react';
import styles from '../styles/coordonatesinput.css';

const CoordonatesInput = ({ setCenter }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const handleUpdateCoordinates = () => {
    if (latitude && longitude) {
      setCenter({ lat: parseFloat(latitude), lng: parseFloat(longitude) });
    }
  };

  return (
    <div className="coordinates-input container">
      <h3>Insérez des coordonnées pour visualiser la localisation</h3>
      <br />
      <input
        type="number"
        placeholder="Latitude"
        value={latitude}
        onChange={handleLatitudeChange}
      />
      <input
        type="number"
        placeholder="Longitude"
        value={longitude}
        onChange={handleLongitudeChange}
      />
      <button className='button-input' onClick={handleUpdateCoordinates}>Mettre à jour la carte</button>
    </div>
  );
};

export default CoordonatesInput;
