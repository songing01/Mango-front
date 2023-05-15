import styled from "styled-components";
import ic_right_black from "../../../assets/icon/maineditorbtn/ic_right_black.png";

const EditorsBtn = () => {
  return (
    <Btn>
      에디터's 리뷰 <img src={ic_right_black} />
    </Btn>
  );
};

export default EditorsBtn;

const Btn = styled.div`
  width: 112px;
  height: 38px;
  margin: 20px auto 0 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 16px 11px 16px;

  box-sizing: border-box;
  background: #ff7f2e;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 32px;

  /* bold12 */
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #000000;

  img {
    width: 6px;
    height: auto;
    margin-left: 10px;
  }
`;
