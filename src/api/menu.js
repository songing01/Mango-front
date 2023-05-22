import client from "./client";

export const GetStoreMenuAPI = async (storeId, category) => {
    try {
      const res = await client.get(`stores/${storeId}/menus/category/${category}`);
      return res.data;
    } catch (err) {
      console.log("에러 발생", err);
    }
};
  