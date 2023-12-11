// components/Presentation.js

import React from 'react';
import Link from 'next/link';

export default function Presentation() {
  return (
    <div className='PresentationContainer'>
        <div className='PresentationTextContainer'> Visualisez facilement la couverture réseau française </div>
        <Link href="#Map_scroll">  <button className='Button'>Accéder aux données</button></Link>
    </div>
  );
};
