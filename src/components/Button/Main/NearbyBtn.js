import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// asset
import ic_pointer from "../../../assets/icon/nearbyBtn/ic_pointer.png";

const NearbyBtn = () => {
  const navigate = useNavigate();

  const _handleGotoListpage = () => {
    navigate("/list");
  };

  return (
    <Btn onClick={_handleGotoListpage}>
      <img src={ic_pointer} />
      <p>내 근처 식당 확인하기</p>
    </Btn>
  );
};

export default NearbyBtn;

const Btn = styled.div`
  width: 150px;
  height: 38px;

  margin: 20px 0 0 auto;
  padding: 0;

  display: flex;
  justify-content: start;
  align-items: center;

  box-sizing: border-box;
  background: #15d0f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 32px;

  img {
    width: 16px;
    height: auto;
    margin-left: 13px;
    margin-right: 7px;
  }

  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;

    text-align: center;
    color: #151515;
  }
`;
