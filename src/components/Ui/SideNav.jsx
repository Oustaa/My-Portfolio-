import React from "react";

import styled from "styled-components";

const StyledSideNav = styled.div`
  width: 70%;
  position: fixed;
  z-index: 20;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  padding-block: 8rem;
  ${({ open }) =>
    open ? "transform: translateX(0%);" : "transform: translateX(100%);"}
  transition: transform 450ms ease-in-out;

  nav {
    height: 100%;
  }
  nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  @media screen and (min-width: 451px) {
    display: none;
  }
`;

const SideNav = ({ open, closeSideNav }) => {
  return (
    <StyledSideNav open={open}>
      <nav>
        <ul>
          <li>
            <a onClick={closeSideNav} href='#Portfolio'>
              Portfolio
            </a>
          </li>
          <li>
            <a onClick={closeSideNav} href='#Skills'>
              Skills
            </a>
          </li>
          <li>
            <a onClick={closeSideNav} href='#Experience'>
              Experience
            </a>
          </li>
          <li>
            <a onClick={closeSideNav} href='#Services'>
              Services
            </a>
          </li>
          <li>
            <a onClick={closeSideNav} href='#Contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </StyledSideNav>
  );
};

export default SideNav;
