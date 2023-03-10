import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: ${(props) => props.bgColor || "#000000"};
  color: ${(props) => props.textColor || "#fff"};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 16px;
  cursor: pointer;
  margin: 0 0.25rem;
`;
