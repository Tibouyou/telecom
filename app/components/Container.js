"use client";
import React, {useState, useRef} from 'react';
import dynamic from 'next/dynamic'
import AdressInput from './AdressInput.js'
import RecenterButton from './RecenterButton.js'
import styles from '../styles/container.css';

const Map = dynamic(() => import("./Map.js"), {
  loading: () => <div className="lds-ring"><div></div><div></div><div></div><div></div></div>,
  ssr: false
})

export default function Container() {
  const [center, setCenter] = useState({ lat: 48.8, lng: 2.3 });
  const [zoom, setZoom] = useState(5)
  const mapRef = useRef();

  const recenterMap = () => {
    mapRef.current.setView([center.lat, center.lng], zoom);
  };

  return (
    <>
    <div className='InterfaceContainer'>
      <Map center={center} zoom={zoom} setzoom={setZoom} innerRef={mapRef}/>
      <div className='DonneesContainer'>
        <h2 style={{marginBottom: '2vh'}}>Contrôles de la carte</h2>
        <RecenterButton onClick={recenterMap} />
        <br />
        <AdressInput setCenter={setCenter} />
      </div>
    </div>
    </>
  );
};

