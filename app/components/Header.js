// components/Header.js

import React from 'react';
import styles from '../styles/header.css'; // Importez le fichier CSS
import Logo from '../assets/images/logo_telecom.png'; // Importez l'image
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <Image className='logo_img' src={Logo} alt="Logo" loading='eager'/>
      <p className='title'>Accueil</p>
    </header>
  );
};

