import styled from "styled-components";
import ic_money from "../../../assets/icon/mainslidebtn/ic_money.png";
import ic_right_white from "../../../assets/icon/mainslidebtn/ic_right_white.png";

import { mainFoodsData } from "../../../assets/data/mainSlideData";

const MainSlideBtn = () => {
  return (
    <BtnContainer>
      <FirstIconBtn>
        <p className="top-text">
          <img src={ic_money} className="money-img" />
          eat 딜
        </p>

        <p className="bottom-text">
          전체 보기 <img src={ic_right_white} className="arrow-img" />
        </p>
      </FirstIconBtn>

      {mainFoodsData.map(b => (
        <IconBtn img={b.img}>
          <p className="top-text">{b.food}</p>
          <p className="bottom-text">
            더보기 <img src={ic_right_white} className="arrow-img" />
          </p>
        </IconBtn>
      ))}
    </BtnContainer>
  );
};

export default MainSlideBtn;

const BtnContainer = styled.div`
  margin-top: 32px;
  margin-left: 10px;
  display: flex;

  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const IconBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 78px;
  height: 68px;

  background-image: url(${props => props.img});
  background-size: cover;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin: 0 8px 0 0;
  padding: 10px 8px 8px 8px;
  box-sizing: border-box;

  p {
    margin: 0;
  }

  .top-text {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #151515;

    word-break: keep-all;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  }

  .bottom-text {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #fdfff8;
  }

  .arrow-img {
    width: 4px;
    height: auto;
    margin-left: 4px;
  }
`;

const FirstIconBtn = styled.div`
  min-width: 78px;
  height: 68px;

  background: #ff7f2e;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin: 0 8px 0 0;
  padding: 0 0 0 8px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .top-text {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #151515;
  }

  .bottom-text {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #fdfff8;
  }

  .money-img {
    width: 12px;
    height: auto;
    margin-right: 4px;
  }
  .arrow-img {
    width: 4px;
    height: auto;
    margin-left: 4px;
  }
`;
