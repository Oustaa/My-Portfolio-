import React from "react";

import HeroImg from "../asits/heroSectionImg.png";

import styles from "styled-components";
import Container from "../Styles/Container";

const StyledHero = styles.div`
  display:flex;
  align-items:center;
  height:calc(100vh - 4rem);
  min-height:600px;
  max-height:900px;

  @media screen and (max-width:700px) {
    padding-top:3rem;
    flex-direction: column;
    height:fit-content;
    min-height:unset;
  }
`;
const StyledInfo = styles.div`
  width:40%;

  h2{
    font-size:1rem;
    font-weight:400;
    margin-bottom:0;
    color: var(--secondary-gray);
    margin-bottom:.5rem;
  }
  @media screen and (max-width:700px) {
    width:100%;
    text-align:center;
    margin-bottom:1rem;
  }
`;
const StyledImg = styles.div`
  width:60%;
  height:100%;
  display:flex;
  align-items:center;

  img{
    max-width:100%;
  }
  @media screen and (max-width:700px) {
    width:100%;
  }
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
  @media screen and (max-width:700px) {
    justify-content:center;
  }
`;

const HeroSection = () => {
  return (
    <div id='Hero'>
      <Container>
        <StyledHero>
          <StyledInfo>
            <h2>I am</h2>
            <h1>A Freelance Full Stack Developer</h1>
            <h1>And UI/UX designer</h1>
            <StyledActions>
              <a href='#Portfolio'>Portfolio</a>
              <a href='#Contact'>Contact</a>
            </StyledActions>
          </StyledInfo>
          <StyledImg>
            <img src={HeroImg} alt='of a persone showcasing my apility' />
          </StyledImg>
        </StyledHero>
      </Container>
    </div>
  );
};

export default HeroSection;
