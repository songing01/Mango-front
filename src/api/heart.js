import client from "./client";

export const GetMyHeartListAPI = async () => {
  try {
    const res = await client.get("hearts");

    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
