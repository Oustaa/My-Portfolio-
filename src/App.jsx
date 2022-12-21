import React from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/portfolio/PortfolioSection";

import GlobalStyles from "./Styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
      </main>
    </>
  );
};

export default App;
