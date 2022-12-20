import React from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

import GlobalStyles from "./Styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  );
};

export default App;
