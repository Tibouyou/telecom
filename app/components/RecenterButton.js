import React from 'react';
import styles from '../styles/button.css';

const RecenterButton = ({ onClick }) => (
  <div className='container'>
    <h3>Recentrer la carte</h3>
    <button className="button" onClick={onClick}>Recentrer</button>
  </div>
);

export default RecenterButton;
