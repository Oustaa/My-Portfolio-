import styles from "styled-components";

const Section = styles.section `
  padding-block:50px;
  ${({ extraStyles }) => extraStyles}
  h2{
    font-size:2rem;
    font-weight:500;
  }
`;

export default Section;