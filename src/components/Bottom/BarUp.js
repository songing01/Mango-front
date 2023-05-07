import styled, { css } from "styled-components";
import { ReactComponent as Up } from "../../assets/up_vector.svg";

const BarUp = ({ isMain }) => {
  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ScrollUpButton isMain={isMain || false} onClick={moveToTop}>
      <Up />
    </ScrollUpButton>
  );
};

export default BarUp;

const ScrollUpButton = styled.button`
  width: 100%;
  height: 32px;
  background: #606060;
  border: 0;
  ${props =>
    props.isMain &&
    css`
      background: #f4f4f4;
    `}
`;
