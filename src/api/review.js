import client from "./client";

export const PostReviewAPI = async (
  storeId,
  star,
  title,
  content,
  hasImage,
  imgFile,
) => {
  let data = {
    storeId: storeId,
    star: star,
    title: title,
    content: content,
    hasImage: hasImage,
  };

  try {
    const formData = new FormData();

    formData.append("image", imgFile);
    formData.append(
      "dto",
      new Blob([JSON.stringify(data)], { type: "application/json" }),
    );

    const res = await client.post("reviews", formData);

    console.log(res);
  } catch (err) {
    console.log("에러 발생", err);
  }
};
