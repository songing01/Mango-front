import styled from "styled-components";
import { useParams } from "react-router-dom";
import StarRate from "../components/Review/StarRate";
import ReviewResult from "../components/Review/ReviewResult";

const ReviewPage = () => {
  // detail 페이지로부터 받은 가게 아이디
  const { storeId } = useParams();

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

  font-family: "Pretendard";
  overflow-y: scroll;
`;
