import styled from "styled-components";
import { darken, lighten } from "polished";
const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  font-size: 1rem;

  background-color: #228be6;
  &:hover {
    background-color: ${lighten(0.1, "#228be6")};
  }
  &:active {
    background-color: ${darken(0.1, "#228be6")};
  }

  & + & {
    margin-left: 1rem;
  }
`;

function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
