import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//assets
import logo from "../assets/logo/logo.png";
//component
import KakaoBtn from "../components/Button/KakaoBtn";

const LoginPage = () => {
  const CLIENT_MAIN_URL = process.env.REACT_APP_REACT_URL;

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

  const REDIRECT_URI = encodeURI(`${CLIENT_MAIN_URL}/KakaoLogin`);

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  console.log("메인uri", CLIENT_MAIN_URL);
  console.log("키", REST_API_KEY);
  console.log("리다이렉트 uri", REDIRECT_URI);
  console.log("현재 위치", window.location);
  console.log("KAKAO_AUTH_URL", KAKAO_AUTH_URL);

  const _handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Div>
      <Logo src={logo} />
      <KakaoBtn onClick={_handleKakaoLogin} />
    </Div>
  );
};

export default LoginPage;

const Div = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 111px;
  height: auto;

  transform: translate(0, -80px);
`;
