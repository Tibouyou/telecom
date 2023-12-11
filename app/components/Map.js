// components/Map.js
"use client"
import React from 'react'
import { MapContainer, TileLayer, GeoJSON, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styles from '../styles/map.css'
//import departements from '../data/departements.json'
//import communes from '../data/communes.json'
import RecenterButton from './RecenterButton'

function randomColor(feature, layer) {
  const popupContent = `
    <div>
      <p>${feature.properties.dep}</p>       
    </div>
  `;
  layer.bindPopup(popupContent);
  var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'black'];
  var color = colors[Math.floor(Math.random() * colors.length)];
  layer.setStyle({
    color: color,
    weight: 0.5,
    opacity: 0.5,
    fillOpacity: 0.2
  });
}

export default function Map( { center, zoom, innerRef } ) {

  return (
    <>
      <div className='InterfaceContainer'>
        <div className='MapContainer-all'>
          <div className='MapContainer-titre'>
            <h1>Carte de couverture réseau française</h1>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='MapContainer-map'>
                <MapContainer className='map' center={center} zoom={zoom} ref={innerRef}>
                  <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                  {/* <GeoJSON data={communes} onEachFeature={randomColor} /> */}
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
