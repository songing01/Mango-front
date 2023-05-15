import styled from "styled-components";
import ic_question from "../../assets/icon/footer/ic_question.png";

const Footer = () => {
  return (
    <FooterDiv>
      <p className="mango">망고플레이트</p>
      <p className="efub">EFUB_ Toy Project</p>
      <p className="inquiry">
        <img src={ic_question} />
        문의하기
      </p>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  margin-top: 30px;
  padding: 18px;
  background: #606060;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    font-family: "Pretendard";
    font-style: normal;

    color: #fdfff8;
  }

  .mango {
    font-weight: 700;
    font-size: 12px;
  }

  .efub {
    font-weight: 700;
    font-size: 8px;
  }

  .inquiry {
    font-weight: 500;
    font-size: 8px;
  }

  img {
    width: 8px;
    height: 8px;
    margin-right: 10px;
  }
`;
