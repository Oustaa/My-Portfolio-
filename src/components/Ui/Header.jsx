import React from "react";

import { BiMenu } from "react-icons/bi";
import Container from "../../Styles/Container";
import styles from "styled-components";

const StyledHeader = styles.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-block:1rem;

  nav {
    display:flex;
  }

  nav ul {
    display:flex;
    column-gap: 1rem;
    margin:0;
  }

  .hambergerIcon{
    display: none;
    button{
      display:flex;
      background-color:transparent;
      border: none;
    }
  }

  @media screen and (max-width: 450px) {
    nav{
      display:none;
    }
    .hambergerIcon{
      display: block;
    }
  }
`;

const Header = ({ opneSideNav }) => {
  return (
    <header>
      <Container>
        <StyledHeader>
          <div id="logo">Ousta</div>
          <div className="hambergerIcon">
            <button
              onClick={() => {
                opneSideNav(true);
              }}
            >
              <BiMenu />
            </button>
          </div>
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
