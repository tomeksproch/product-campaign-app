import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  caret-color: var(--accent-color);
  border: 1px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.42);
  color: rgba(0, 0, 0, 0.87);
  transition: border 500ms;
  padding: 20px 16px 6px;
  font-size: 1rem;

  :focus {
    outline: none;
    border-bottom-width: 2px;
    border-bottom-color: var(--accent-color);
  }
`;
