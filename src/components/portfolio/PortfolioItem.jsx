import React from "react";

import styles from "styled-components";

const StyledPortfolioItem = styles.div`
  width:100%;
  aspect-ratio: 1/.6;
  border-radius:.25rem;
  background-color: ${({ bgColor }) => bgColor};
`;

const PortfolioItem = () => {
  const h = Math.round(Math.random() * 359);
  const bgColor = `hsl(${h},69%,88%)`;
  return <StyledPortfolioItem bgColor={bgColor}></StyledPortfolioItem>;
};

export default PortfolioItem;
