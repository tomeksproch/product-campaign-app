import styled from "styled-components";

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  height: auto;
  width: 350px;
  border-radius: 24px;
  padding: 2rem;
`;

export const BottomItemContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;

export const Name = styled.h2``;

export const City = styled.div`
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const CityIcon = styled.img``;

export const Active = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  padding-bottom: 1rem;
`;
export const ActiveDot = styled.div`
  background-color: ${({ theme, status }) =>
    status ? theme.colors.success : theme.colors.error};
  height: 10px;
  width: 10px;
  border-radius: 100%;
`;
