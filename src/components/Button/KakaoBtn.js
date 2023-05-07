//lib
import styled from "styled-components";
// asset
import kakao from "../../assets/icon/kakao.png";

const KakaoBtn = () => {
  const _handleKakaoLogin = () => {
    console.log("카카오로그인 요청");
  };
  return (
    <Btn onClick={_handleKakaoLogin}>
      <img src={kakao} /> <p>카카오 로그인</p>
    </Btn>
  );
};

export default KakaoBtn;

const Btn = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 85%;
  margin: 0 auto;

  background: #fee500;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 7px;

  img {
    position: absolute;
    left: 15px;

    width: 18px;
    height: 17px;
  }

  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #000000;
  }
`;
