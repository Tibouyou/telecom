import React from 'react';
import styles from '../styles/recenterbutton.css';

const RecenterButton = ({ onClick }) => (
  <div>
    <button className="recenter-button" onClick={onClick}>Recentrer</button>
  </div>
);

export default RecenterButton;
