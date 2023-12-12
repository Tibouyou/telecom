// components/Map.js
"use client"
import React, {useRef, useState} from 'react'
import { MapContainer, TileLayer, GeoJSON, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styles from '../styles/map.css'
import departements from '../data/departements.json'
import communes from '../data/communes.json'
import { useMapEvents } from 'react-leaflet'
import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet'

const communesLayer = L.geoJSON(communes, { onEachFeature: randomColor });
const departementsLayer = L.geoJSON(departements, { onEachFeature: randomColor });

function randomColor(feature, layer) {
  const popupContent = `
    <div>
      <p>${feature.properties.dep}</p>       
    </div>
  `;
  //layer.bindPopup(popupContent);
  var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'black'];
  var color = colors[Math.floor(Math.random() * colors.length)];
  layer.setStyle({
    color: color,
    weight: 0.5,
    opacity: 0.5,
    fillOpacity: 0.2
  });
}

function HandleZoom() {
  const context = useLeafletContext();
  const container = context.layerContainer || context.map;
  
  const mapEvents = useMapEvents({
      zoomend: () => {
        const zoomLevel = mapEvents.getZoom();
          if (zoomLevel >= 9) {
            if (container.hasLayer(communesLayer)) {
              return null;
            } else {
              container.addLayer(communesLayer);
            container.removeLayer(departementsLayer);
            }
          }
          if (zoomLevel < 9) {
            if (container.hasLayer(departementsLayer)) {
              return null;
            } else {
              container.addLayer(departementsLayer);
              container.removeLayer(communesLayer);
            }
          }
      },
  });
  return null;
}

export default function Map( { center, zoom, innerRef } ) {

  return (
    <>
      <div className='MapContainer-all'>
        <div className='MapContainer-titre'>
          <h1>Carte de couverture réseau française</h1>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='MapContainer-map'>
              <MapContainer className='map' center={center} zoom={zoom} ref={innerRef}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <HandleZoom />
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
