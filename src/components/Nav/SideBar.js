import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import ic_user from "../../assets/icon/topnavbar/ic_user.png";
import ic_heart from "../../assets/icon/topnavbar/ic_heart.png";

const Sidebar = ({ isOpen, heartList, userInfo }) => {
  // const test = {
  //   heartId: 1,
  //   memberId: 1,
  //   storeId: 1,
  //   name: "이펍떡볶이",
  //   imageUrl: "https://efub/?img=14",
  // };

  const navigate = useNavigate();
  const _handleGotoStore = storeId => {
    navigate(`/detail/${storeId}`);
  };

  return (
    <Div isOpen={isOpen}>
      <ProfileBox>
        <img src={ic_user} />
        <p>{userInfo?.nickname}</p>
      </ProfileBox>

      <Hr />

      <HeartListText>찜한 목록</HeartListText>

      <HeartListContainer>
        {heartList?.map(h => (
          <HeartBox key={h.storeId} onClick={() => _handleGotoStore(h.storeId)}>
            <HeartImgBox img={h.imageUrl}>
              <img src={ic_heart} />
            </HeartImgBox>
            <p>{h.name}</p>
          </HeartBox>
        ))}
      </HeartListContainer>
    </Div>
  );
};

export default Sidebar;

const Div = styled.div`
  position: absolute;
  z-index: 100;
  width: 136px;
  height: 455px;
  background: #fff2de;
  border-radius: 20px 0px 0px 20px;

  transition: transform 0.4s ease-in-out;

  top: 0px;
  right: 0px;

  ${props =>
    props.isOpen
      ? css`
          transform: translatex(0);
        `
      : css`
          transform: translatex(136px);
        `}
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 0 8px 16px;
  img {
    width: 36px;
    height: 36px;
  }

  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
    margin-left: 16px;
  }
`;

const Hr = styled.hr`
  border: 3px solid #15d0f9;
`;

const HeartListText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #151515;

  margin: 8px 0 8px 16px;
`;

const HeartListContainer = styled.div`
  width: auto;
  height: 347px;
  overflow-y: scroll;
`;
const HeartBox = styled.div`
  margin: 0 0 8px 16px;

  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #151515;

    margin: 6px 0 0 0;
  }
`;
const HeartImgBox = styled.div`
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 20px;
  background-image: url(${props => props.img});
  background-size: cover;

  img {
    width: 20px;
    height: auto;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;
