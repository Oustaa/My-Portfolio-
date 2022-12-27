import React from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import GetInTouch from "./components/GetInTouch";

import GlobalStyles from "./Styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <Skills />
        <Experience />
        <Services />
        <GetInTouch />
      </main>
    </>
  );
};

export default App;
