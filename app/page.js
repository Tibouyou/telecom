import React from "react";
import styles from "./styles/styles.css";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Presentation from "./components/Presentation.js";
import Objectifs from "./components/Objectifs.js";
import Container from "./components/Container.js";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Presentation />
      <Objectifs />
      <div className='titles' id="Map_scroll">Découvrez notre interface intuitive</div>
      <Container />
      
      <Footer />
    </div>
  );
}