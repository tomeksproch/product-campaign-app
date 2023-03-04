import styled from "styled-components";

export const StyledKeywordsSuggest = styled.div`
  position: absolute;
  z-index: 1;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  max-width: 300px;
  max-height: 300px;
  overflow-y: scroll;
  text-align: left;
  text-transform: capitalize;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 350px;
`;

export const StyledKeywordElement = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledKeywordList = styled.div`
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  max-height: 200px;
  overflow-y: scroll;
`;
export const StyledKeywordListItem = styled.div`
  display: flex;
  align-content: center;
  color: white;
  border-radius: 0.5rem;
  margin: 0.25rem 0.5rem;
`;

export const StyledKeyword = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 0.5rem;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
`;

export const StyledDeleteKeyword = styled.div`
  background-color: ${({ theme }) => theme.colors.error};
  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
