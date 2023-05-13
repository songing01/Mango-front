import styled from "styled-components";
import { ReactComponent as CircleAdd } from "../../assets/icon _circle_add_.svg";
import { ReactComponent as ReviewFinish } from "../../assets/review_finish.svg";
import { ReactComponent as DeletePhotoButton } from "../../assets/ic_closeImage.svg";
import Stars from "./Stars";
import { useState } from "react";
import { useRef } from "react";

const ReviewTemplate = () => {
  const [star, setStar] = useState();
  const [inputs, setInputs] = useState({ title: "", detail: "" });

  const [imgFile, setImgFile] = useState();
  const imgRef = useRef();

  const { title, detail } = inputs;
  const handleChange = e => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };
  const deletePhoto = () => {
    imgRef.current.value = "";
    setImgFile();
  };
  const postReview = () => {
    /*post*/
  };
  return (
    <div>
      <Wrapper>
        <Score>
          <StarText>별점</StarText>
          <StarBox>
            <Stars setStar={setStar} />
          </StarBox>
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
        <AddPhotoButton>
          <label for="file">
            <CircleAdd height={"16px"} width={"16px"} />
            <PhotoText>사진 첨부하기</PhotoText>
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            /* 파일 필드 숨기기 */
            style={{ display: "none" }}
            onChange={saveImgFile}
            ref={imgRef}
          />
        </AddPhotoButton>
        {imgFile && (
          <PhotoContainer>
            <Photo src={imgFile} />
            <DeletePhotoButton
              onClick={deletePhoto}
              style={{ position: "absolute", top: "8px", left: "104px" }}
            />
          </PhotoContainer>
        )}
        <ReviewFinish width={"100%"} onClick={postReview} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 16px;
`;
const InputBox = styled.div`
  height: 240px;
  width: 100%;
  /* lightgrey */

  background: #f4f4f4;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StarBox = styled.div`
  margin-bottom: 24px;
`;
const PhotoContainer = styled.div`
  position: relative;
  margin: 16px;
`;
const StarText = styled.text`
  height: 19px;
  margin-bottom: 20px;

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
const AddPhotoButton = styled.div`
  margin-top: 16px;
  height: 19px;
  display: flex;
  align-items: center;
`;
const PhotoText = styled.text`
  height: 16px;

  /* bold16 */
  margin-left: 4px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* lessblack */

  color: #151515;
`;
const Photo = styled.img`
  background: #d7d7d7;
  border-radius: 20px;
  width: 132px;
  height: 132px;
`;

export default ReviewTemplate;
