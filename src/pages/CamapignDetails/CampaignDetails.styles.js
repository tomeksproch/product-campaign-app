import styled from "styled-components";

export const DetailsWrapper = styled.div`
  width: clamp(350px, 50%, 500px);
  background-color: white;
  margin: 0 auto;
  padding: 1rem 1rem 3rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 0.5rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const StyledKeyword = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: fit-content;
  color: white;
  margin: 0.25rem 0.5rem;
`;

export const KeywordsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-transform: capitalize;
`;

export const Active = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ActiveDot = styled.div`
  background-color: ${({ theme, status }) =>
    status ? theme.colors.success : theme.colors.error};
  height: 10px;
  width: 10px;
  border-radius: 100%;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 350px;
  justify-content: space-around;
  padding-top: 1rem;
  margin: 0 auto;
`;
