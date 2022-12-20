import React from "react";

import Container from "../Styles/Container";
import styles from "styled-components";

const StyledHeader = styles.div`
  display:flex;
  justify-content:space-between;
  align-items:center;

  nav ul {
   display:flex;
   gap: 1rem;
  }

  
  @media screen and (max-width: 450px) {

  }
`;

const Header = () => {
  return (
    <header>
      <Container>
        <StyledHeader>
          <div id="logo">Ousta</div>
          <nav>
            <ul>
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#Experience">Experience</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </nav>
        </StyledHeader>
      </Container>
    </header>
  );
};

export default Header;
