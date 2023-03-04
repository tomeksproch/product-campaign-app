import styled from "styled-components";

export const StyledToaster = styled.div`
  background-color: ${({ theme }) => theme.colors.error};
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 100;
  padding: 0.3rem;
  border-radius: 0.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
