import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
