import styled from "styled-components";
import { mainFoodsData } from "../../../assets/data/mainFoodsData";

const MainButtonContainer = () => {
  return (
    <BtnContainer>
      {mainFoodsData.map(b => (
        <IconBtn>
          <div className="icon-box" key={b.id}>
            <img src={b.img} />
          </div>

          <p>{b.food}</p>
        </IconBtn>
      ))}
    </BtnContainer>
  );
};

export default MainButtonContainer;

const BtnContainer = styled.div`
  margin-top: 28px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  gap: 20px;

  width: 100%;
  height: auto;
  padding: 31px 15px 25px 15px;
  box-sizing: border-box;

  border: 4px solid #f4f4f4;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
`;

const IconBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-box {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #ff7f2e;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: auto;
    height: auto;
    max-width: 34px;
    max-height: 34px;
  }

  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: center;

    color: #000000;

    margin: 6px 0 0 0;

    word-break: keep-all;
  }
`;
