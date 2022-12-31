import React from "react";

import Container from "../Styles/Container";
import Section from "../Styles/Section";

import styles from "styled-components";

import DevImg from "../asits/icons8-development-64.png";
import DesImg from "../asits/icons8-web-design-96.png";

const extraStyles = `
  background-color: var(--background-light);
`;

const StyledServices = styles.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap:2rem; 

  .header{
    font-weight: 400;
    height:2rem;
    display:flex;
    align-items: flex-end;
    position: relative;
    margin-bottom: 1rem; 
    img{
      width:30px;
      margin-right:.5rem;
    }
  }

  .descreption{
    h2 {
      border-left:5px solid var(--primary-purble);
      padding-left:.5rem;
    }
  }

  @media screen and (max-width:700px){
    grid-template-columns: repeat(4, 1fr);
    .descreption{
      grid-column: 1/ -1 ;
    }
    .UiUx, .dev{
      grid-column: span 2;
    }
    @media screen and (max-width:500px){
      .UiUx, .dev{
        grid-column: span 4;
      }
    }
  }

`;

const Services = () => {
  return (
    <Section extraStyles={extraStyles} id='Services'>
      <Container>
        <StyledServices>
          <div className='descreption'>
            <div className='header'>
              <h2>My Services</h2>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur ducimus corrupti unde maxime explicabo sequi saepe
              doloribus non et labore excepturi dignissimos, expedita quibusdam
              nihil?
            </p>
          </div>
          <div className='UiUx'>
            <div className='header'>
              <img src={DesImg} alt='An design icon' />
              <h3>Ui/Ux Design</h3>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur ducimus corrupti unde maxime explicabo sequi saepe
              doloribus non et labore
            </p>
            {/* <a href="/">Hire me</a> */}
          </div>
          <div className='dev'>
            <div className='header'>
              <img src={DevImg} alt='An design icon' />
              <h3>Full Stack Development</h3>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur ducimus corrupti unde maxime explicabo sequi saepe
              doloribus non et labore excepturi dignissimos, expedita quibusdam
              nihil?
            </p>
            {/* <a href="/">Hire me</a> */}
          </div>
        </StyledServices>
      </Container>
    </Section>
  );
};

export default Services;
