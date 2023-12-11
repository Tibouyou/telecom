import React from 'react';
import styles from '../styles/recenterbutton.css';

const RecenterButton = ({ onClick }) => (
  <div className='container'>
    <h3>Recentrer la carte</h3>
    <button className="recenter-button" onClick={onClick}>Recentrer</button>
  </div>
);

export default RecenterButton;
