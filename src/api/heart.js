import client from "./client";

export const GetHeartList = async () => {
  try {
    const res = await client.get("member/info");
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
