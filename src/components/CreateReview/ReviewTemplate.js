import styled from "styled-components";
import { ReactComponent as FilledStar } from "../../assets/star_vector.svg";
import { ReactComponent as UnfilledStar } from "../../assets/ic_starscore.svg";
import Stars from "./Stars";
const ReviewTemplate = () => {
  return (
    <div>
      <Score>
        <StarText>별점</StarText>
        <Stars />
      </Score>
      <InputBox></InputBox>
    </div>
  );
};

const InputBox = styled.div`
  height: 240px;
  /* lightgrey */

  background: #f4f4f4;
  border-radius: 20px;
`;
const Score = styled.div``;

const StarText = styled.text`
  width: 28px;
  height: 19px;

  /* bold16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* lessblack */

  color: #151515;
`;
export default ReviewTemplate;
