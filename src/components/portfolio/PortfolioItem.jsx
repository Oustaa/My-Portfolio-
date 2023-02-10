import React from "react";

import { BsGithub, BsLink } from "react-icons/bs";
import { DiReact, DiSass, DiBootstrap, DiPhp, DiMysql } from "react-icons/di";
import {
  SiStyledcomponents,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import styles from "styled-components";

const StyledPortfolioItem = styles.div`
  width:100%;
  aspect-ratio: 1/.6;
  border-radius:.25rem;
  background-color: var(--primary-purble);
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
      bottom:1.2rem;
      transform:translateY(0) translateX(-50%);
    }
    .Tech{
      top:1.2rem;
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
    font-size:2vw;
    transition: transform 0.5s ease;
  }

  .Links{
    bottom: -0.5rem;
    transform:translateY(100%) translateX(-50%);
    a{
      margin:0;
      padding:0;
      display:flex;
    }
  }

  .Tech{
    top: 0;
    transform:translateY(calc(-100% - 0.5rem)) translateX(-50%);
  }
`;

const StyledTechIcon = styles.div`
  position:relative; 
  &:hover{  
    &::after{
      content:attr(data-label);
      font-size:.8vw;
      position:absolute;
      top:100%;
      left:50%;
      transform:translateX(-50%);

      background-color:#fff;
      color:var(--primary-purble);
      padding:0.25rem;
      border-radius:.25rem;
    }
  }
`;

const TechIcons = {
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,
  react: <DiReact />,
  sass: <DiSass />,
  bootstrap: <DiBootstrap />,
  php: <DiPhp />,
  mysql: <DiMysql />,
  styledComponents: <SiStyledcomponents />,
};

const PortfolioItem = ({ technologies, urls, imgUrl, title }) => {
  const h = Math.round(Math.random() * 359);
  const bgColor = `hsl(${h}, 69%, 88%)`;

  const PortfolioLinks = (
    <div className="Links Container">
      {urls.github && (
        <a target="_blank" rel="noopener noreferrer" href={urls.github}>
          <BsGithub />
        </a>
      )}
      {urls.liveDemo && (
        <a target="_blank" rel="noopener noreferrer" href={urls.liveDemo}>
          <BsLink />
        </a>
      )}
    </div>
  );
  const PortfolioTech = (
    <div className="Tech Container">
      {technologies.map((tech, index) => (
        <StyledTechIcon key={index} data-label={tech}>
          {TechIcons[tech]}
        </StyledTechIcon>
      ))}
    </div>
  );

  return (
    <StyledPortfolioItem bgColor={bgColor}>
      {PortfolioTech}
      {PortfolioLinks}
      <img
        src={
          imgUrl
            ? imgUrl
            : "https://www.techniqueweb.com/images/Mindful-Motion-LA-Personal-Trainer-Website-Design.png"
        }
        alt={`${title}`}
      />
    </StyledPortfolioItem>
  );
};

export default PortfolioItem;
