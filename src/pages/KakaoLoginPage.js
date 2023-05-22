/* 카카오로그인 페이지 */
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { SPRING_URL } from "../api/url";

const KakaoLogin = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1]; // 인가코드
  const Spring = `${SPRING_URL}members/login/kakao?code=${KAKAO_CODE}`; // 토큰 요청

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  axios
    .post(Spring)
    .then(res => {
      console.log("요청 결과", res);

      const accessToken = res.data.accessToken;

      console.log(accessToken);
      localStorage.setItem("mangotoken", accessToken);

      navigate("/");
      window.location.reload();
    })
    .catch(err => {
      console.log("카카오 로그인 에러.", err);
    });

  return <Div></Div>;
};

export default KakaoLogin;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;
