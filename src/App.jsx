import React, { useState } from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import GlobalStyles from "./Styles/GlobalStyles";
import SideNav from "./components/Ui/SideNav";

const App = () => {
  const [isOpend, setIsOpend] = useState(false);

  const openSideNav = () => {
    setIsOpend(true);
  };
  const closeSideNav = () => {
    setIsOpend(false);
  };

  return (
    <>
      <GlobalStyles />
      <Header opneSideNav={openSideNav} />
      <SideNav open={isOpend} closeSideNav={closeSideNav} />
      <main>
        <HeroSection />
        <PortfolioSection />
        <Skills />
        <Experience />
        <Services />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
};

export default App;
