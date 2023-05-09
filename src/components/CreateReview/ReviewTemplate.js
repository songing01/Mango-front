import styled from "styled-components";
import { ReactComponent as FilledStar } from "../../assets/star_vector.svg";
import { ReactComponent as UnfilledStar } from "../../assets/ic_starscore.svg";
import Stars from "./Stars";
import { useState } from "react";

const ReviewTemplate = () => {
  const [star, setStar] = useState();
  const [inputs, setInputs] = useState({ title: "", detail: "" });

  const { title, detail } = inputs;
  const handleChange = e => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  console.log(inputs);

  return (
    <div>
      <Score>
        <StarText>별점</StarText>
        <Stars setStar={setStar} />
      </Score>
      <InputBox>
        <Title
          name="title"
          onChange={handleChange}
          value={title}
          placeholder="리뷰 제목을 작성해주세요"
        />
        <Detail
          name="detail"
          onChange={handleChange}
          value={detail}
          placeholder="상세 리뷰를 작성해주세요"
        />
      </InputBox>
      <PhotoBox>
        <PhotoText />
      </PhotoBox>
    </div>
  );
};

const InputBox = styled.div`
  height: 240px;
  width: 100%;
  /* lightgrey */

  background: #f4f4f4;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
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
const Title = styled.input`
  height: 19px;
  margin: 16px;
  border: none;
  background: #f4f4f4;

  /* bold16 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* lessblack */

  color: #151515;
  &:focus {
    outline: none;
  }
`;
const Detail = styled.textarea`
  /* reg12 */
  margin: 0px 16px 16px 16px;
  height: 100%;
  border: none;
  resize: none;
  background: #f4f4f4;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  /* lessblack */

  color: #151515;
  &:focus {
    outline: none;
  }
`;
const PhotoBox = styled.div``;
const PhotoText = styled.text`
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
