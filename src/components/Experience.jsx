import React from "react";

import Container from "../Styles/Container";
import Section from "../Styles/Section";

import styles from "styled-components";

const StyledExperiences = styles.div`
    position: relative;
    padding-block: 2rem;
`;

const StyledExperience = styles.div`
  border-left: 2px dashed var(--primary-purble);
  width:40%;
  position: relative;
  left:${({ left }) => (left ? `${left}%` : "50%")};
  text-align:left;
  padding-left:3.5rem;
  padding-block:3rem;
  &:after{
    content:"";
    position:absolute;
    width: ${({ afterWidth }) => (afterWidth ? `${afterWidth}%` : "0%")};
    left:${({ afterleft }) => (afterleft ? `${afterleft}%` : "0%")};
    bottom:0;
    border-top: 2px dashed var(--primary-purble);
  }
  .date{
    position: absolute;
    top:50%;
    right:100%;
    transform: translateY(-50%) translateX(50%);

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

const Experience = () => {
  return (
    <Section id="Experience">
      <Container textAlign="center">
        <h2>Experience/Studies</h2>
        <StyledExperiences>
          <StyledExperience afterleft={-50} afterWidth={50}>
            <div className="date">2020/10/25</div>
            <div className="info">
              <h3 className="title">BACALORIOS</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur ducimus corrupti unde maxime explicabo.
              </p>
            </div>
          </StyledExperience>
          <StyledExperience left={30} afterleft={1} afterWidth={36}>
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
          <StyledExperience left={45} afterWidth={0}>
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
        </StyledExperiences>
      </Container>
    </Section>
  );
};

export default Experience;
