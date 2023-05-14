import styled from "styled-components";

const ReviewPage = () => {
  return (
    <Div>
      <StarRateInfo>
        <ProgressBar value="50" min="0" max="100"/>
      </StarRateInfo>
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
  justify-content: center;
  margin: 0 5%;
`;

const StarRateInfo = styled.div`
    width: 360px;
    height: 120px;
    background: #F4F4F4;
    border-radius: 32px;
`;

const ProgressBar = styled.progress`

`;