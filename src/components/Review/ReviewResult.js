import React, { useState, useEffect } from "react";
import styled from "styled-components";
import user from "../../assets/icon/topnavbar/ic_user.png";
import filledStar from "../../assets/icon/listicon/ic_starscore.png";
import downIcon from "../../assets/icon/reviewbuttonbox/ic_down.png"
import { GetReviewAPI } from "../../api/review";
import { GetUserInfo } from "../../api/user";
import { DeleteMyReviewAPI } from "../../api/review";

const ReviewResult = ({ storeId }) => {
  // 드롭다운 커스텀
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("LATEST");

  // 리뷰 데이터
  const [reviewData, setReviewData] = useState([]);

  // 유저 아이디
  const [userId, setUserId] = useState(0);

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  // 클릭 시 dropdown list가 보이도록
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // dropdown toggle 반대값 return
  const oppositeOption = () => {
    if (selectedOption === "LATEST") {
      setSelectedOption("HIGHSCORE");
    } else if (selectedOption === "HIGHSCORE") {
      setSelectedOption("LATEST");
    }
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

  // 삭제 버튼 위해서 유저 아이디 가져오기
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
    setIsOpen(false);
  }, [storeId, selectedOption]);

  return (
    <>
      <ReviewTitle>
        <ReviewMainText
          style={{ height: "30px", display: "flex", alignItems: "center" }}
        >
          전체 리뷰 {reviewData.length}개
        </ReviewMainText>

        <div>
          <SortDropDown
            className="selected-option"
            onClick={toggleDropdown}
            color={isOpen === true ? "#F4F4F4" : "#15D0F9"}
          >
            {selectedOption === "LATEST" ? "최신순" : "평점순"}
            <DownIcon src={downIcon} alt="아래 화살표 아이콘"/>
          </SortDropDown>
          {isOpen === true ? (
            selectedOption === "LATEST" ? (
              <SortDropDown
                className="dropdown-list"
                onClick={oppositeOption}
                color={"#F4F4F4"}
              >
                평점순
              </SortDropDown>
            ) : (
              <SortDropDown
                className="dropdown-list"
                onClick={oppositeOption}
                color={"#F4F4F4"}
              >
                최신순
              </SortDropDown>
            )
          ) : null}
        </div>
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
                  <Img src={filledStar} width={"20px"} height={"20px"} />
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
      <div style={{ marginBottom: "100px" }}></div>
    </>
  );
};

export default ReviewResult;

// 리뷰 부분
const Img = styled.img``;
const ReviewTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  align-items: flex-start;
  margin-top: 24px;
  margin-bottom: 12px;
`;

const ReviewMainText = styled.span`
  // 전체 리뷰 개수, 리뷰 제목 부분
  font-weight: 700;
  font-size: 19px;
  /* line-height: 19px; */
`;

const SortDropDown = styled.div`
  width: 80px;
  height: 30px;
  // 메인 dropdown의 경우 토글이 열린 상태일 때 lightgrey / 아닐 경우 blue, option의 경우 기본적으로 lightgrey
  background-color: ${props => props.color};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  margin-bottom: 5px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DownIcon = styled.img`
  width: 12px;
  margin-left: 5px;
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

  border-width: 0px;
`;
