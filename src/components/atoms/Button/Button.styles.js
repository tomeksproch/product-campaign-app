import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: ${(props) => props.bgColor || "#000000"};
  color: ${(props) => props.textColor || "#fff"};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;
