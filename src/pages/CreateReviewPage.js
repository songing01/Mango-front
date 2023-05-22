import styled from "styled-components";
import BarUp from "../components/Button/BarUp";
import ReviewTemplate from "../components/CreateReview/ReviewTemplate";
import { useParams } from "react-router-dom";
import TopNavbar from "../components/Nav/TopNavbar";
const CreateReviewPage = () => {
  const { storeId, name } = useParams();

  return (
    <div>
      <TopNavbar title="리뷰 쓰기" subTitle={name} subTitleColor="#151515" />
      <ReviewTemplate storeId={storeId} />
    </div>
  );
};

const Wrapper = styled.div`
  padding-bottom: 32px;
`;
export default CreateReviewPage;
