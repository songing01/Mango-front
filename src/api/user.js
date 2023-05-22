import client from "./client";

const CLIENT_MAIN_URL = process.env.REACT_APP_REACT_URL;

export const GetUserInfo = async () => {
  try {
    const res = await client.get("members");

    return res.data;
  } catch (err) {
    let errCode = err.response.data.code;
    if (errCode == "EXPIRED_TOKEN") {
      alert("토큰 만료! 다시 로그인해주세요");
      window.location.href = `${CLIENT_MAIN_URL}/login`;
    } else if (errCode == "INVALID_TOKEN") {
      alert("토큰 손상! 다시 로그인해주세요");
    }
    console.log("유저 정보 불러오기 에러 발생", err);
  }
};
