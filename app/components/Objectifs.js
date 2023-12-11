import React from 'react';
import Image from 'next/image';
import Reseau from '../assets/images/reseauIcon.png';
import NoReseau from '../assets/images/noReseauIcon.png';

export default function Objectifs() {
    return (
        <div className='ObjectifContainer'>
        <div className='titles'>Nos objectifs</div>
        <div className='ObjectifTextContainer'>
          <div className='ObjectifText'>
            <Image className='ObjectifImg' src={Reseau} alt="Reseau" loading='eager'/>
            <p>Trouver facilement les différents réseaux disponibles chez vous</p>
          </div>
          <div className='ObjectifText'>
            <Image className='ObjectifImg' src={NoReseau} alt="NoReseau" loading='eager'/>
            <p>Déterminer les zones où l’accès au réseau est le plus restreint</p>
          </div>
      </div>
    </div>
    );
  };
  