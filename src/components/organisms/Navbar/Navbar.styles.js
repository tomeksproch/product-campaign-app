import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Logo = styled.img`
  height: 6rem;
  cursor: pointer;
`;

export const Budget = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;
