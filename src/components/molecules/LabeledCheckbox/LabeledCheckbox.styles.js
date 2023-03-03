import styled from "styled-components";

export const StyledLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 100px;
  height: 50px;
  background: ${(props) => (props.status ? "#bada55" : "#FF8383")};
  display: block;
  border-radius: 100px;
  position: relative;

  :after {
    content: "";
    position: absolute;
    top: 2.5px;
    left: 2.5px;
    width: 45px;
    height: 45px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;

    ${(props) =>
      props.status &&
      `
        left: calc(100% - 5px);
        transform: translateX(-100%);
        `}
  }

  :active:after {
    width: 65px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CheckboxStatus = styled.p`
  width: 80px;
`;
