import styled from "styled-components";
import { ReactComponent as CircleAdd } from "../../assets/icon/createreviewicon/icon _circle_add_.svg";
import { ReactComponent as ReviewFinish } from "../../assets/icon/createreviewicon/review_finish.svg";
import { ReactComponent as DeletePhotoButton } from "../../assets/icon/createreviewicon/ic_closeImage.svg";
import Stars from "./Stars";
import { useState } from "react";
import { useRef } from "react";
import { PostReviewAPI } from "../../api/review";
import { useNavigate } from "react-router-dom";

const ReviewTemplate = ({ storeId }) => {
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
    navigate(`/review/${storeId}`);
  };
  const postReview = async () => {
    console.log("ImgFile:", imgFile);
    let hasImage = false;
    if (imgFile) {
      hasImage = true;
    }
    console.log(hasImage);
    console.log(imgFile);
    await PostReviewAPI(storeId, star, title, detail, hasImage, imgFile);
    navigateToReview();
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
        {imgShow && (
          <PhotoContainer>
            <Photo src={imgShow} />
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
  margin: 40px 16px 16px;
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
  margin-bottom: 24px;
`;
const PhotoContainer = styled.div`
  position: relative;
  margin: 16px;
`;
const StarText = styled.text`
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
const PhotoText = styled.text`
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

export default ReviewTemplate;
