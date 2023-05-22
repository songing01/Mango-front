import styled from "styled-components";
import BarUp from "../components/Button/BarUp";
import ReviewTemplate from "../components/CreateReview/ReviewTemplate";
import { useParams } from "react-router-dom";
import TopNavbar from "../components/Nav/TopNavbar";
const CreateReviewPage = () => {
  //const { storeId, name } = useParams();
  const storeId = 1;
  const name = "식당명";
  console.log(storeId);
  return (
    <div>
      <TopNavbar title="리뷰 쓰기" subTitle={name} subTitleColor="#151515" />
      <ReviewTemplate storeId={storeId} />
    </div>
  );
};
//BarUp 높이 만큼 padding
const Wrapper = styled.div`
  padding-bottom: 32px;
`;
export default CreateReviewPage;
