import client from "./client";

export const GetLocalStoreListAPI = async () => {
  try {
    const res = await client.get("stores/location/신촌");

    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
export const GetSearchedStoreListAPI = async keyword => {
  try {
    const res = await client.get(`stores/search?name=${keyword}`);

    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
export const GetStoreDetailAPI = async storeId => {
  try {
    const res = await client.get(`stores/details/${storeId}`);

    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};
