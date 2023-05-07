import styled from "styled-components";
import { ReactComponent as Up } from "../../assets/up_vector.svg";

const BarUp = () => {
  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ScrollUpButton onClick={moveToTop}>
      <Up />
    </ScrollUpButton>
  );
};

export default BarUp;

const ScrollUpButton = styled.button`
  width: 100%;
  height: 32px;
  background: #606060;
`;
