import styled from "styled-components";

//assets
import logo from "../assets/logo/logo.png";
//component
import KakaoBtn from "../components/Button/KakaoBtn";

const LoginPage = () => {
  return (
    <Div>
      <Logo src={logo} />
      <KakaoBtn />
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
