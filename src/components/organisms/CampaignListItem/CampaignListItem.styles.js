import styled from "styled-components";

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  height: auto;
  width: 350px;
  border-radius: 24px;
  padding: 2rem;
`;

export const City = styled.div``;
export const CityIcon = styled.img``;

export const Active = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
`;
export const ActiveDot = styled.div`
  background-color: ${({ theme, active }) =>
    !active ? theme.colors.success : theme.colors.error};
  height: 10px;
  width: 10px;
  border-radius: 100%;
`;
