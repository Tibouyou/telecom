// components/Footer.js

import React from 'react';
import styles from '../styles/footer.css'; // Importez le fichier CSS

export default function Footer() {
  return (
    <footer className={styles.footer}> {/* Appliquez la classe CSS ici */}
      <p>&copy; 2023 Pirates de l'espace</p>
      <p>
        <a href="/mentions-legales">Mentions Légales</a> |{' '}
        <a href="/politique-de-confidentialite">Politique de Confidentialité</a>
      </p>
    </footer>
  );
};

