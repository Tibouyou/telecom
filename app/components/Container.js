"use client";
import React, {useState, useRef} from 'react';
import dynamic from 'next/dynamic'
import CoordinatesInput from './CoordonatesInput.js'
import AdressInput from './AdressInput.js'

const Map = dynamic(() => import("./Map.js"), {
  loading: () => <p>loading...</p>,
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
    <Map center={center} zoom={zoom} innerRef={mapRef}/>
    <CoordinatesInput setCenter={setCenter} />
    <AdressInput setCenter={setCenter} />
    <button className="recenter-button" onClick={recenterMap}>Recentrer</button>
    </>
  );
};

