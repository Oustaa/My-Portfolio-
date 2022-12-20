import React from "react";

import styles from "styled-components";
import Container from "../Styles/Container";

const StyledHero = styles.div`
  display:flex;
  align-items:center;
  height:calc(100vh - 4rem);
`;
const StyledInfo = styles.div`
  width:50%;
  
  h2{
   font-size:1rem;
   font-weight:400;
   margin-bottom:0;
   color: var(--secondary-gray);
   margin-bottom:.5rem;
  }
`;
const StyledImg = styles.div`
  width:50%;
  height:100%;
  background-color: var(--background-body);
`;
const StyledActions = styles.div`
  display:flex;
  gap: 1rem;
  color: var(--secondary-gray);
  margin-top:.5rem;
  a:first-of-type{
    position: relative;
    &::after{
      content:"";
      width:100%;
      height:4px;
      border-radius:5rem;
      background-color:var(--primary-purble);
      position: absolute;
      bottom:-2px;
      left:0;
    }
  }
`;

const HeroSection = () => {
  return (
    <div id="Hero">
      <Container>
        <StyledHero>
          <StyledInfo>
            <h2>Ousta</h2>
            <h1>A Freelance Full Stack Developer</h1>
            <h1>And UI/UX designer</h1>
            <StyledActions>
              <a href="#Portfolio">Portfolio</a>
              <a href="#Contact">Contact</a>
            </StyledActions>
          </StyledInfo>
          <StyledImg>
            <img src="" alt="" />
          </StyledImg>
        </StyledHero>
      </Container>
    </div>
  );
};

export default HeroSection;