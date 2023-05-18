import styled from "styled-components";
import user from "../../assets/icon/topnavbar/ic_user.png";
import { ReactComponent as FilledStar } from "../../assets/star_vector.svg";

const ReviewResult = () => {
  
  return (
    <>
      <ReviewTitle>
        <ReviewMainText>
          전체 리뷰 000개
        </ReviewMainText>
        <AlignDropDown>
          <option>최신순</option>
          <option>평점높은순</option>
        </AlignDropDown>
      </ReviewTitle>

      {/* 반복할 리뷰 아이템 */}
      <ReviewItem>
        <ReviewContent>
          <div style={{display:"flex", alignItems: "flex-start"}}>
            <img src={user} style={{width: "36px", marginRight:"16px"}} alt="유저 이미지" />
            <div style={{display:"flex", flexDirection: "column"}}>
              <ReviewMainText>"맛있어요!"</ReviewMainText>
              <ReviewSubText>
                상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용
              </ReviewSubText>
            </div>
          </div>
          <div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
            <FilledStar />
            <ReviewStarRateText>0.0</ReviewStarRateText>
          </div>
        </ReviewContent>
        {/* 이미지 필요하면 넣기, 없으면 생략 */}
        <ReviewImage></ReviewImage>
      </ReviewItem>
      
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
  background: #15D0F9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 24px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

const ReviewItem = styled.div`
  width: 100%;
  background: #F4F4F4;
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

  color: #A2A2A2;
  width: 90%;
  word-break: keep-all;
`;

const ReviewStarRateText = styled.span`
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  margin-top: 4px;
`;

const ReviewImage = styled.div`
  width: 90%;
  aspect-ratio: 1/1;
  background: #A2A2A2;
  border-radius: 20px;
  margin-bottom: 16px;
`;