import React from "react";

import PortfolioItem from "./PortfolioItem";

import Container from "../../Styles/Container";
import styles from "styled-components";

const StyledPortfolioHeader = styles.div`
  display:flex;
  align-items:center;
  gap:1rem;
  p{
    color: var(--secondary-gray);
  }
`;

const StyledPortfolioContainer = styles.div`
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:1rem;
`;

const PortfolioSection = () => {
  return (
    <section id="Portfolio">
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
    </section>
  );
};

export default PortfolioSection;
