import styled from "styled-components";
import rice from "../../../assets/icon/mainbuttonbox/rice.png";

const MainSlideBtn = () => {
  const btn = [1, 1, 11, 1, 1, 1, 11, 1, 1, 11, 1, 1];
  return (
    <BtnContainer>
      {btn.map(b => (
        <IconBtn />
      ))}
    </BtnContainer>
  );
};

export default MainSlideBtn;

const BtnContainer = styled.div`
  margin-top: 32px;
  display: flex;

  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const IconBtn = styled.div`
  min-width: 78px;
  height: 68px;

  background: #ff7f2e;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin: 0 8px 0 0;
`;
