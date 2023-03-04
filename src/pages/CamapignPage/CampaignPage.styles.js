import styled from "styled-components";

export const CampaignPageWrapper = styled.div``;
export const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 10px;
  bottom: 20px;

  button {
    font-weight: bold;
    border-radius: 100%;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;
export const AddText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;
