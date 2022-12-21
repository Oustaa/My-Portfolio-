import React from "react";

import { BsGithub, BsLink } from "react-icons/bs";
import { DiReact } from "react-icons/di";
import { SiStyledcomponents, SiPhp } from "react-icons/si";

import styles from "styled-components";

const StyledPortfolioItem = styles.div`
  width:100%;
  aspect-ratio: 1/.6;
  border-radius:.25rem;
  background-color: ${({ bgColor }) => bgColor};
  position: relative;
  overflow: hidden;

  display:flex;
  align-items:center;
  justify-content:center;

  img{
    width:90%;
    height:90%;
    object-fit: contain;
  
  }

  &:hover,&:focus-within{
    .Links{
      bottom:.5rem;
      transform:translateY(0) translateX(-50%);
    }
    .Tech{
      top:.5rem;
      transform:translateY(0) translateX(-50%);
    }
  }

  .Container{
    padding:0.5rem;
    color:#fff;
    display:flex;
    gap:0.5rem;
    border-radius:0.25rem;
    background-color:var(--primary-purble);
    position: absolute;
    left:50%;
    font-size:3vw;
    transition: transform 0.5s ease;
  }

  .Links{
    bottom:0;
    transform:translateY(100%) translateX(-50%);
    a{
      margin:0;
      padding:0;
      display:flex;
    }
  }

  .Tech{
    top:0.5rem;
    transform:translateY(calc(-100% - 0.5rem)) translateX(-50%);
  }
`;

const PortfolioItem = () => {
  const h = Math.round(Math.random() * 359);
  const bgColor = `hsl(${h},69%,88%)`;

  const PortfolioLinks = (
    <div className="Links Container">
      <a href="/">
        <BsGithub />
      </a>
      <a href="/">
        <BsLink />
      </a>
    </div>
  );
  const PortfolioTech = (
    <div className="Tech Container">
      <DiReact />
      <SiStyledcomponents />
      <SiPhp />
    </div>
  );

  return (
    <StyledPortfolioItem bgColor={bgColor}>
      {PortfolioTech}
      {PortfolioLinks}
      <img
        src="https://www.techniqueweb.com/images/Mindful-Motion-LA-Personal-Trainer-Website-Design.png"
        alt=""
      />
    </StyledPortfolioItem>
  );
};

export default PortfolioItem;
