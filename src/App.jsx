import React, { useState } from "react";

import { Header, SideNav, Footer } from "./components/Ui";
import {
  HeroSection,
  Skills,
  Experience,
  Services,
  GetInTouch,
  PortfolioSection,
} from "./components";

import GlobalStyles from "./Styles/GlobalStyles";

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
