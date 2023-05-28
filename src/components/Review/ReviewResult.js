import React, { useState, useEffect } from "react";
import styled from "styled-components";
import user from "../../assets/icon/topnavbar/ic_user.png";
import { ReactComponent as FilledStar } from "../../assets/star_vector.svg";
import { GetReviewAPI } from "../../api/review";
import { GetUserInfo } from "../../api/user";
import { DeleteMyReviewAPI } from "../../api/review";

const ReviewResult = ({ storeId }) => {
  const [selectedOption, setSelectedOption] = useState("LATEST");
  const [reviewData, setReviewData] = useState([]);
  const [userId, setUserId] = useState(0);

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  // storeId, selectedOption를 바탕으로 서버에서 메뉴 데이터 가져오기
  const getReview = async (storeId, selectedOption) => {
    const res = await GetReviewAPI(storeId, selectedOption);
    setReviewData(res);
  };

  const getUserId = async () => {
    const res = await GetUserInfo();
    setUserId(res.memberId);
  };

  // storeId와 selectedOption가 바뀔 때마다 데이터 가져오기
  useEffect(() => {
    getReview(storeId, selectedOption);
  }, [storeId, selectedOption]);

  useEffect(() => {
    getUserId();
  }, []);

  // 삭제 후 리뷰 데이터 get용으로 만든 함수
  const updateReviewData = async () => {
    await getReview(storeId, selectedOption);
  };

  // 리뷰 데이터 삭제 함수
  const DeleteReview = async (reviewId, storeId, selectedOption) => {
    await DeleteMyReviewAPI(reviewId);
    await updateReviewData();
  };

  // 삭제 후 리뷰 데이터 실시간 반영
  useEffect(() => {
    updateReviewData();
  }, [storeId, selectedOption]);

  return (
    <>
      <ReviewTitle>
        <ReviewMainText>전체 리뷰 {reviewData.length}개</ReviewMainText>
        <AlignDropDown value={selectedOption} onChange={handleOptionChange}>
          <option value="LATEST">최신순</option>
          <option value="HIGHSCORE">평점높은순</option>
        </AlignDropDown>
      </ReviewTitle>

      {/* 반복할 리뷰 아이템 - barup component 사이 간격 추가*/}

      {reviewData.map((review, index) => {
        return (
          <ReviewItem key={index}>
            <ReviewContent>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <img
                  src={user}
                  style={{ width: "36px", marginRight: "16px" }}
                  alt="유저 이미지"
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <ReviewMainText>{review.title}</ReviewMainText>
                  <ReviewSubText>{review.content}</ReviewSubText>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {review.memberId === userId ? (
                  <DeleteBtn
                    onClick={() => {
                      DeleteReview(review.reviewId, storeId, selectedOption);
                    }}
                  >
                    삭제
                  </DeleteBtn>
                ) : null}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <FilledStar />
                  <ReviewStarRateText>{review.star}</ReviewStarRateText>
                </div>
              </div>
            </ReviewContent>
            {/* 이미지 필요하면 넣기, 없으면 생략 */}
            {review.hasImage === true && review.imageUrl != null ? (
              <ReviewImage src={review.imageUrl} alt={review.title} />
            ) : null}
          </ReviewItem>
        );
      })}
      <div style={{marginBottom: "100px"}}></div>
    </>
  );
};

export default ReviewResult;

// 리뷰 부분

const ReviewTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 12px;
`;

const ReviewMainText = styled.span`
  // 전체 리뷰 개수, 리뷰 제목 부분
  font-weight: 700;
  font-size: 19px;
  line-height: 19px;
`;

const AlignDropDown = styled.select`
  width: 80px;
  height: 30px;
  background: #15d0f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 24px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

const ReviewItem = styled.div`
  width: 100%;
  background: #f4f4f4;
  border-radius: 32px;
  margin-top: 12px;

  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: center;
`;

const ReviewContent = styled.div`
  display: flex;
  width: 90%;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 16px;
`;

const ReviewSubText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #a2a2a2;
  width: 90%;
  word-break: keep-all;
`;

const ReviewStarRateText = styled.span`
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  margin-top: 4px;
`;

const ReviewImage = styled.img`
  width: 90%;
  aspect-ratio: 1/1;
  /* background: #a2a2a2; */
  border: 2px solid #a2a2a2;
  border-radius: 20px;
  margin-bottom: 16px;
`;

const DeleteBtn = styled.button`
  width: 40px;
  height: 24px;
  background: #15d0f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  margin-right: 12px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 10px;
`;
