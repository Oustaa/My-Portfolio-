import React from "react";

import PortfolioItem from "./PortfolioItem";

import Container from "../../Styles/Container";
import Section from "../../Styles/Section";
import styles from "styled-components";

import ProjectsData from "../../data/ProjectsData";

const StyledPortfolioHeader = styles.div`
  display:flex;
  align-items:center;
  gap:1rem;
  p{
    color: var(--secondary-gray);
    margin-bottom:1rem;
  }

  @media screen and (max-width:700px) {
    flex-direction:column;
    row-gap:0;
    
    p{
      width:90%;
      text-align:center;
      margin-top:0;
    }
  }
`;

const StyledPortfolioContainer = styles.div`
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:2rem;

  @media screen and (max-width:700px){
    grid-template-columns: repeat(1, 1fr);
  }
  
`;

const PortfolioSection = () => {
  return (
    <Section id="Portfolio">
      <Container>
        <StyledPortfolioHeader>
          <h2>Portfolio</h2>
          <p>
            Welcome to my portfolio section, where you can discover some of my
            latest and greatest projects. I've had the privilege to work with an
            array of different technologies, such as HTML, CSS, Bootstrap, Sass,
            JavaScript, React, styled-components, PHP, and MySQL. These projects
            represent a diversity of industries, including e-commerce, social
            media, and healthcare, and span a range of applications, from
            responsive web design to interactive user interfaces. As you explore
            my portfolio, you'll see that I've leveraged my technical expertise
            to create dynamic, engaging, and user-friendly products. I'm
            passionate about pushing the boundaries of what's possible in the
            digital world, and I hope that my portfolio inspires you to do the
            same.
          </p>
        </StyledPortfolioHeader>
        <StyledPortfolioContainer>
          {ProjectsData.map((item, index) => (
            <PortfolioItem {...item} key={index} />
          ))}
        </StyledPortfolioContainer>
      </Container>
    </Section>
  );
};

export default PortfolioSection;
