import client from "./client";

export const GetMyHeartListAPI = async () => {
  try {
    const res = await client.get("hearts");

    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

// ... 찜과 관련한 api는 이 아래에 구현하면 됩니다.
export const PostMyHeartListAPI = async storeId => {
  try {
    await client.post(`hearts/${storeId}`);
  } catch (err) {
    console.log("에러 발생", err);
  }
};

export const DeleteMyHeartListAPI = async storeId => {
  try {
    await client.delete(`hearts/${storeId}`);
  } catch (err) {
    console.log("에러 발생", err);
  }
};
