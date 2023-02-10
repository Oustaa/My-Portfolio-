import React from "react";
import styled from "styled-components";
import Container from "../../Styles/Container";
const StyledFooter = styled.footer`
  padding: 1.5rem;
  background-color: var(--primary-purble);
  margin-top: 2rem;
`;

const extraStyles = `
  display: flex;
  justify-content: space-between;
  align-items:center;
  color:#FFF;
  p{
   margin:0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container extraStyles={extraStyles}>
        <a href="/">Oussama.tailba</a>
        <p>CopyRight © 2022</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
