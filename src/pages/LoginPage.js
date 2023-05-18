import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//assets
import logo from "../assets/logo/logo.png";
//component
import KakaoBtn from "../components/Button/KakaoBtn";

const LoginPage = () => {
  const navigate = useNavigate();

  const CLIENT_MAIN_URL = "http://localhost:3000";

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

  const REDIRECT_URI = `${CLIENT_MAIN_URL}/KakaoLogin`;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const _handleKakaoLogin = () => {
    console.log("카카오로그인 버튼 클릭");
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
  height: 100%;

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
