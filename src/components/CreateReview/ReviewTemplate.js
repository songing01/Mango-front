import styled from "styled-components";
import circleAdd from "../../assets/icon/createreviewicon/icon _circle add_.png";

import deletePhotoButton from "../../assets/icon/createreviewicon/ic_closeImage.png";
import Stars from "./Stars";
import { useState } from "react";
import { useRef } from "react";
import { PostReviewAPI } from "../../api/review";
import { useNavigate } from "react-router-dom";

const ReviewTemplate = ({ storeId, name }) => {
  const [star, setStar] = useState();
  const [inputs, setInputs] = useState({ title: "", detail: "" });

  const [imgShow, setImgShow] = useState(null);
  const imgRef = useRef();

  const { title, detail } = inputs;

  const [imgFile, setImgFile] = useState();
  const handleChange = e => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const saveImgFile = () => {
    let file = imgRef.current.files[0];
    setImgFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgShow(reader.result);
    };
  };
  const deletePhoto = () => {
    imgRef.current.value = "";
    setImgShow();
    setImgFile();
  };
  const navigate = useNavigate();
  const navigateToReview = () => {
    navigate(`/review/${storeId}/${name}`);
  };
  const postReview = async () => {
    if (star != 0 && title && detail) {
      let hasImage = false;
      if (imgFile) {
        hasImage = true;
      }
      await PostReviewAPI(storeId, star, title, detail, hasImage, imgFile);
      navigateToReview();
    } else if (star == 0) {
      alert("별을 하나 이상 눌러주세요.");
    } else if (title == "") {
      alert("리뷰 제목을 작성해 주세요.");
    } else if (detail == "") {
      alert("상세 리뷰를 작성해 주세요.");
    }
  };
  const style = {
    display: "flex",
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
          <label htmlFor="file" style={style}>
            <Img src={circleAdd} height={"16px"} width={"16px"} />

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
        {imgShow && (
          <PhotoContainer>
            <Photo src={imgShow} />
            <Img
              src={deletePhotoButton}
              width={"20px"}
              height={"20px"}
              onClick={deletePhoto}
              style={{ position: "absolute", top: "8px", left: "104px" }}
            />
          </PhotoContainer>
        )}
        <p className="imgContainer">
          <CompleteButton onClick={postReview}>작성완료</CompleteButton>
        </p>
      </Wrapper>
    </div>
  );
};
const Img = styled.img``;

const Wrapper = styled.div`
  margin: 40px 16px 16px;
  .imgContainer {
    margin-top: 48px;
    display: flex;
    justify-content: center;
  }
`;
const InputBox = styled.div`
  height: 240px;
  width: 100%;

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
  display: flex;
  margin-bottom: 24px;
`;
const PhotoContainer = styled.div`
  position: relative;
  margin: 16px;
`;
const StarText = styled.div`
  height: 19px;
  margin-bottom: 20px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #151515;
`;
const Title = styled.input`
  height: 19px;
  margin: 16px;
  border: none;
  background: #f4f4f4;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #151515;
  &:focus {
    outline: none;
  }
`;
const Detail = styled.textarea`
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
const PhotoText = styled.div`
  height: 16px;
  margin-left: 4px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #151515;
`;
const Photo = styled.img`
  background: #d7d7d7;
  border-radius: 20px;
  width: 132px;
  height: 132px;
`;
const CompleteButton = styled.button`
  width: 124px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* special */

  background: #15d0f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  border: none;

  /* bold12 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;

  color: #000000;
`;

export default ReviewTemplate;
