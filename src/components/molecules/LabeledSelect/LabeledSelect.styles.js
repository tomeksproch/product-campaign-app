import styled from "styled-components";

export const SelectContainer = styled.div`
  background-color: #f5f5f5;
  position: relative;
  border-radius: 4px 4px 0 0;
  height: 56px;
  transition: background-color 500ms;
  width: 100%;

  max-width: 350px;
  :hover {
    background-color: #ececec;
  }

  :focus-within {
    background-color: #dcdcdc;
  }

  input:focus + label {
    color: black;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-100%) scale(0.75);
  left: 16px;
  color: rgba(0, 0, 0, 0.5);
  transform-origin: left top;
  user-select: none;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms;
`;
