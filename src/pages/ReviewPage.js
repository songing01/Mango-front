import styled from "styled-components";
import StarRate from "../components/Review/StarRate";
import user from "../assets/icon/topnavbar/ic_user.png";
import { ReactComponent as FilledStar } from "../assets/star_vector.svg";
import ReviewResult from "../components/Review/ReviewResult";

const ReviewPage = () => {
  
  return (
    <Div>
      {/* 별점 부분 */}
      <StarRate />
      {/* 리뷰 부분 */}
      <ReviewResult />
    </Div>
  );
};

export default ReviewPage;

const Div = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  margin: 0 5%;

  font-family: 'Pretendard';
  overflow-y: scroll;
`;