import styles from "styled-components";

export default styles.button`
  background-color:${({ canSave }) =>
    canSave ? "var(--primary-purble)" : "var(--background-light)"};
  color:${({ canSave }) => (canSave ? "#fff" : "inherit")};
  cursor:${({ canSave }) => (canSave ? "pointer" : "auto")};
  border:none;
  padding: .5rem 1rem ;
  border-radius: .25rem;
  margin-top:1rem;
  
  display:flex;
  align-items:center;

  svg{
    margin:0;
  }
`;
