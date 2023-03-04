import styled from "styled-components";

export const Wrapper = styled.div`
  width: clamp(350px, 33%, 400px);
  background-color: white;
  margin: 0 auto;
  padding: 1rem 1rem 3rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 0.5rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h2 {
    padding-bottom: 1rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 350px;
  justify-content: space-around;
  padding-top: 1rem;
  margin: 0 auto;
`;
