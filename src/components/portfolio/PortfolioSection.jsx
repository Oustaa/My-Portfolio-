import React from "react";

import PortfolioItem from "./PortfolioItem";

import Container from "../../Styles/Container";
import Section from "../../Styles/Section";
import styles from "styled-components";

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
    <Section id='Portfolio'>
      <Container>
        <StyledPortfolioHeader>
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, ullam reprehenderit. Nostrum recusandae voluptas, at
            rerum neque ad distinctio alias magnam voluptatem eligendi maiores
            necessitatibus.
          </p>
        </StyledPortfolioHeader>
        <StyledPortfolioContainer>
          {[1, 2, 3, 4].map((item, index) => (
            <PortfolioItem key={index} />
          ))}
        </StyledPortfolioContainer>
      </Container>
    </Section>
  );
};

export default PortfolioSection;
