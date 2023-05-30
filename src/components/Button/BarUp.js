import styled, { css } from "styled-components";
import up from "../../assets/icon/barupbtn/ic_up.png";
import mainUp from "../../assets/icon/barupbtn/ic_up_main.png";

const BarUp = ({ isMain }) => {
  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ScrollUpButton isMain={isMain || false} onClick={moveToTop}>
      {isMain ? (
        <Img src={mainUp} width={"20px"} height={"12px"} />
      ) : (
        <Img src={up} width={"20px"} height={"12px"} />
      )}
    </ScrollUpButton>
  );
};

export default BarUp;

const ScrollUpButton = styled.button`
  position: fixed;
  bottom: 0;
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
const Img = styled.img``;
