import styled from "styled-components";

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  height: auto;
  width: clamp(350px, 33%, 400px);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const BottomItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  align-items: flex-start;
  gap: 1rem;
`;

export const CloseIconStyles = styled.div``;

export const Name = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  padding-bottom: 1rem;
`;

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
