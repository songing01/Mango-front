import client from "./client";

export const GetUserInfo = async () => {
  try {
    const res = await client.get("members");

    return res.data;
  } catch (err) {
    console.log("유저 정보 불러오기 에러 발생", err);
  }
};
