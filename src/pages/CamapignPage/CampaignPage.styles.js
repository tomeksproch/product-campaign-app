import styled from "styled-components";

export const CampaignPageWrapper = styled.div``;
export const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 90%;
  top: 80%;

  button {
    font-weight: bold;
    border-radius: 100%;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;
export const AddText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;
