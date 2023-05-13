import styled from "styled-components";
import BarUp from "../components/Button/BarUp";
import ReviewTemplate from "../components/CreateReview/ReviewTemplate";
const CreateReviewPage = () => {
  return (
    <div>
      <ReviewTemplate />
    </div>
  );
};
//BarUp 높이 만큼 padding
const Wrapper = styled.div`
  padding-bottom: 32px;
`;
export default CreateReviewPage;
