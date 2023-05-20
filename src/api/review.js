import client from "./client";

export const PostReviewAPI = async ({
  storeId,
  star,
  title,
  detail,
  hasImage,
  imgFile,
}) => {
  try {
    const res = await client.post("reviews", {
      data: {
        storeId: { storeId }, //store ID 넘겨받기
        star: { star },
        title: { title },
        content: { detail },
        hasImage: { hasImage },
        imageUrl: { imgFile },
      },
    });
  } catch (err) {
    console.log("에러 발생", err);
  }
};
