import styles from "styled-components";

const Container = styles.div `
  width: calc(100% - 2rem);
  max-width:1200px;
  margin-inline:auto;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")}
`;

export default Container;