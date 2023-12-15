"use client";
import React, {useState, useRef} from 'react';
import dynamic from 'next/dynamic'
import CoordinatesInput from './CoordonatesInput.js'
import AdressInput from './AdressInput.js'
import RecenterButton from './RecenterButton.js'
import styles from '../styles/container.css';

const Map = dynamic(() => import("./Map.js"), {
  loading: () => <div class="lds-ring"><div></div><div></div><div></div><div></div></div>,
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
      <Map center={center} zoom={zoom} innerRef={mapRef}/>
      <div className='DonneesContainer'>
        <RecenterButton onClick={recenterMap} />
        <CoordinatesInput setCenter={setCenter} />
        <AdressInput setCenter={setCenter} />
      </div>
    </div>
    </>
  );
};

