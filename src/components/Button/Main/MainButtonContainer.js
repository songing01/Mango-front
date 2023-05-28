import styled from "styled-components";
import { mainFoodsData } from "../../../assets/data/mainFoodsData";

const MainButtonContainer = () => {
  return (
    <BtnContainer>
      {mainFoodsData.map(b => (
        <IconBtn>
          <div className="icon-box" key={b.id}>
            <img src={b.img} className={b.class} />
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

  background-color: #fdfff8;
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

  .japan {
    width: 40px;
    height: 22px;
  }

  .mexican {
    width: auto;
    height: 24px;
  }

  .rice {
    max-width: 34px;
    max-height: 34px;
  }

  .pasta {
    max-width: 34px;
    max-height: 34px;
  }
  .chinafood {
    max-width: 34px;
    max-height: 34px;
  }
  .kimbap {
    max-width: 34px;
    max-height: 34px;
  }
  .hamburger {
    max-width: 31px;
    max-height: 31px;
  }
  .cake {
    max-width: 34px;
    max-height: 34px;
    margin-bottom: 7px;
  }
  .coffee {
    max-width: 34px;
    max-height: 34px;
  }
  .soju {
    max-width: 34px;
    max-height: 34px;
  }
  .vegetable {
    max-width: 32px;
    max-height: 32px;
  }

  .noodle {
    max-width: 34px;
    max-height: 34px;
  }
`;
