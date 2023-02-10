import React, { useState } from "react";

import Section from "../Styles/Section";
import Container from "../Styles/Container";

import styles from "styled-components";

const SKILLS = {
  frontEnd: [
    "Html",
    "Css",
    "Bootstarp",
    "SASS",
    "JavaScript",
    "JQuery",
    "React",
  ],
  backEnd: ["Php", "NodeJs", "Mysql", "MongoDB"],
  more: ["Git", "Figma", "Adobe XD"],
};

const StyledButtons = styles.div`
  diaplay:flex;
  border-radius: 0.25rem;
  overflow: hidden;
  width:fit-content;
  margin-inline:auto;
  button{
    background-color:var(--background-light);
    color:var(--secondary-gray);
    border:none;
    padding:.5rem 1rem;
    font-size:1rem;
    &:hover{
      background-color: var(--primary-purble);
      color:#fff;
      cursor:pointer;
    }
    &[data-active=true]{
      background-color: var(--primary-purble);
      color:#fff;
    }
  }
  @media screen and (max-width:650px){
    flex-direction: column;
    button{
      width: 70%;
    }
  }
`;

const StyledDisplayedSkills = styles.div`
  display:flex;
  gap:1rem;
  justify-content:center;
  margin-block:1rem;
  h3{
    font-weight:100;
  }
  @media screen and (max-width:650px){
    max-width:100%;
    flex-wrap:wrap;
  }
  `;

const Skills = () => {
  const [skills, setSkills] = useState("frontEnd");

  const changeDisplayedSkills = (value) => {
    setSkills(value);
  };

  return (
    <Section id="Skills">
      <Container textAlign="center">
        <h2>I am capable of working with </h2>
        <StyledDisplayedSkills>
          {SKILLS[skills].map((skill, index) => (
            <h3 key={index}>{skill.toUpperCase()}</h3>
          ))}
        </StyledDisplayedSkills>
        <StyledButtons>
          <button
            data-active={skills === "frontEnd"}
            onClick={() => {
              changeDisplayedSkills("frontEnd");
            }}
          >
            in Front-End development
          </button>
          <button
            data-active={skills === "backEnd"}
            onClick={() => {
              changeDisplayedSkills("backEnd");
            }}
          >
            in Back-End development
          </button>
          <button
            data-active={skills === "more"}
            onClick={() => {
              changeDisplayedSkills("more");
            }}
          >
            More…
          </button>
        </StyledButtons>
      </Container>
    </Section>
  );
};

export default Skills;
