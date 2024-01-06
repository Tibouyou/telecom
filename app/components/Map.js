// components/Map.js
"use client"
import React, { useRef, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styles from '../styles/map.css'
import departements from '../data/departements.json'
import communes from '../data/communes.json'
import { useMapEvents } from 'react-leaflet'
import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet'

import communesData from '../data/communesData.json'
import depData from '../data/depData.json'

var currentFilter = 'elig_thd1g';
const communesLayer = L.geoJSON(communes, { style: styleCom, onEachFeature: popupCom });
const departementsLayer = L.geoJSON(departements, { style: styleDep, onEachFeature: popupDep });

function styleCom(feature) {
  var color;
  var colors = ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'];
  let eligibility = communesData['array'][feature.properties.codgeo][currentFilter] / communesData['array'][feature.properties.codgeo]['nbr']
  if (eligibility == 1) {
    color = colors[4];
  } else color = colors[Math.floor(eligibility * (colors.length))];
  return {
    weight: 1,
    opacity: 1,
    color: color,
    fillOpacity: 0.7
  };
}

function styleDep(feature) {
  var color;
  var colors = ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'];
  let eligibility = depData['array'][feature.properties.code_insee][currentFilter] / depData['array'][feature.properties.code_insee]['nbr']
  if (eligibility == 1) {
    color = colors[4];
  } else color = colors[Math.floor(eligibility * (colors.length))];
  return {
    weight: 1,
    opacity: 1,
    color: color,
    fillOpacity: 0.7
  };
}

function popupDep(feature, layer) {
  const popupContent = `
    <div>
      <p>${feature.properties.nom}</p>
      <p>Eligibilité 1GB : ${Math.round(depData['array'][feature.properties.code_insee]['elig_thd1g'] / depData['array'][feature.properties.code_insee]['nbr'] * 100)}%</p> 
      <p>Eligibilité 100MB : ${Math.round(depData['array'][feature.properties.code_insee]['elig_thd100'] / depData['array'][feature.properties.code_insee]['nbr'] * 100)}%</p>
      <p>Eligibilité 30MB : ${Math.round(depData['array'][feature.properties.code_insee]['elig_thd30'] / depData['array'][feature.properties.code_insee]['nbr'] * 100)}%</p>
      <p>Eligibilité 8MB : ${Math.round(depData['array'][feature.properties.code_insee]['elig_bhd8'] / depData['array'][feature.properties.code_insee]['nbr'] * 100)}%</p>
      <p>Eligibilité 3MB : ${Math.round(depData['array'][feature.properties.code_insee]['elig_hd3'] / depData['array'][feature.properties.code_insee]['nbr'] * 100)}%</p>
      <p>Eligibilité 0.5MB : ${Math.round(depData['array'][feature.properties.code_insee]['elig_hd05'] / depData['array'][feature.properties.code_insee]['nbr'] * 100)}%</p>
    </div>
  `;
  layer.bindPopup(popupContent);
}

function popupCom(feature, layer) {
  const popupContent = `
    <div>
      <p>${communesData['array'][feature.properties.codgeo]['nom_com']}</p>  
      <p>Eligibilité 1GB : ${Math.round(communesData['array'][feature.properties.codgeo]['elig_thd1g'] / communesData['array'][feature.properties.codgeo]['nbr'] * 100)}%</p>    
      <p>Eligibilité 100MB : ${Math.round(communesData['array'][feature.properties.codgeo]['elig_thd100'] / communesData['array'][feature.properties.codgeo]['nbr'] * 100)}%</p>
      <p>Eligibilité 30MB : ${Math.round(communesData['array'][feature.properties.codgeo]['elig_thd30'] / communesData['array'][feature.properties.codgeo]['nbr'] * 100)}%</p>
      <p>Eligibilité 8MB : ${Math.round(communesData['array'][feature.properties.codgeo]['elig_bhd8'] / communesData['array'][feature.properties.codgeo]['nbr'] * 100)}%</p>
      <p>Eligibilité 3MB : ${Math.round(communesData['array'][feature.properties.codgeo]['elig_hd3'] / communesData['array'][feature.properties.codgeo]['nbr'] * 100)}%</p>
      <p>Eligibilité 0.5MB : ${Math.round(communesData['array'][feature.properties.codgeo]['elig_hd05'] / communesData['array'][feature.properties.codgeo]['nbr'] * 100)}%</p>
    </div>
  `;
  layer.bindPopup(popupContent);
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

export default function Map({ center, zoom, innerRef }) {
  function changeFilter(value) {
    currentFilter = value;
    communesLayer.setStyle(styleCom);
    departementsLayer.setStyle(styleDep);
  }
  return (
    <>
      <div className='MapContainer-all'>
        <div className='MapContainer-titre'>
          <h1>Carte de couverture réseau française</h1>
        </div>

        <select name="select" onChange={e => changeFilter(e.target.value)}>
          <option value="elig_thd1g">1G/s</option>
          <option value="elig_thd100">100M/s</option>
          <option value="elig_thd30">30M/s</option>
          <option value="elig_bhd8">8M/s</option>
          <option value="elig_hd3">3M/s</option>
          <option value="elig_hd05">0.5M/s</option>
        </select>
        
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
