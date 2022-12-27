import React from "react";

import Container from "../Styles/Container";
import Section from "../Styles/Section";

import { SlArrowDown } from "react-icons/sl";

import styles from "styled-components";

const StyledExperiences = styles.div`
    position: relative;
    padding-block: 2rem;
`;

const StyledExperience = styles.div`
  width:40%;
  min-width: 150px;
  position: relative;
  padding-block:3rem;

  &:after{
    content:"";
    position:absolute;
    bottom:-.1rem;
    border-top: 2px dashed var(--primary-purble);
  }

  &:nth-child(even){
    border-right: 2px dashed var(--primary-purble);
    padding-right:3.5rem;
    text-align:right;
    left:${({ left }) => (left ? -`${left}%` : "10%")};

    &:after{
      width: ${({ afterWidth }) => (afterWidth ? `${afterWidth}%` : "0%")};
      right: -${({ afterleft }) => (afterleft ? afterleft : "0%")};
      transform: translateX(100%);
    }
    .date{
      left:100%;
      transform: translateY(-50%) translateX(-50%);
    }
  }
  &:nth-child(odd){
    border-left: 2px dashed var(--primary-purble);
    text-align:left;
    padding-left:3.5rem;
    left:${({ left }) => (left ? `${left}%` : "50%")};
    &:after{
      width: ${({ afterWidth }) => (afterWidth ? `${afterWidth}%` : "0%")};
      left: ${({ afterleft }) => (afterleft ? `${afterleft}%` : "0%")};
    }
    .date{
      right:100%;
      transform: translateY(-50%) translateX(50%);
    }

  }

  .date{
    position: absolute;
    top:50%;
    background-color:var(--primary-purble);
    color:#fff;
    padding:0.25rem;
    border-radius:.25rem;
  }

  .info {
    .title{
      font-weight:400;
      margin-bottom:0;
    }
    p{
      margin:0;
    }
  }
`;

const StyledArrow = styles.div`
  color:var(--primary-purble);
  position:relative;
  
  &:after{
    content:"Free To work With You.";
    width:max-content;
    color:black;
    position:absolute;
    top:15px;
    left:50%;
    transform:translateX(-50%);
    font-size:1.3rem;
  }
  
`;

const Experience = () => {
  return (
    <Section id="Experience">
      <Container textAlign="center">
        <h2>Experience/Studies</h2>
        <StyledExperiences>
          {/* 1 */}
          <StyledExperience afterleft={-25.4} afterWidth={25.3}>
            <div className="date">2020/10/25</div>
            <div className="info">
              <h3 className="title">BACALORIOS</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur ducimus corrupti unde maxime explicabo.
              </p>
            </div>
          </StyledExperience>
          {/* 2 */}
          <StyledExperience left={40} afterleft={0} afterWidth={37.7}>
            <div className="date">2021/02/08</div>
            <div className="info">
              <h3 className="title">CS50 Computer Sience</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur ducimus corrupti unde maxime explicabo sequi saepe
                doloribus non et labore excepturi.
              </p>
            </div>
          </StyledExperience>
          {/* 3 */}
          <StyledExperience left={55} afterleft={-12.8} afterWidth={12.7}>
            <div className="date">2023/06/23</div>
            <div className="info">
              <h3 className="title">FREELANCE</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur ducimus corrupti unde maxime explicabo sequi saepe
                doloribus non et labore excepturi.
              </p>
            </div>
          </StyledExperience>
          {/* 4 */}
          <StyledExperience left={0} afterWidth={0}>
            <div className="date">2023/06/23</div>
            <div className="info">
              <h3 className="title">FREELANCE</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur ducimus corrupti unde maxime explicabo sequi saepe
                doloribus non et labore excepturi.
              </p>
            </div>
          </StyledExperience>
          <StyledArrow>
            <SlArrowDown />
          </StyledArrow>
        </StyledExperiences>
      </Container>
    </Section>
  );
};

export default Experience;
