import styled from "styled-components";
import dibsT from "../../assets/icon/listicon/ic_filledHeart.png";
import dibsF from "../../assets/icon/listicon/ic_unfilledHeart.png";
import star from "../../assets/icon/listicon/ic_starscore.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostMyHeartListAPI, DeleteMyHeartListAPI } from "../../api/heart";
import { GetMyHeartListAPI } from "../../api/heart";
const Store = ({
  Id,
  name,
  address,
  imageUrl,
  recommendation,
  averagePrice,
  starAverage,
  store,
  dibsData,
  setDibsData,
  setTime,
}) => {
  const [dibs, setDibs] = useState();

  useEffect(() => {
    dibsData &&
      dibsData.map(data => (data.name === store.name ? setDibs(true) : data));
  }, [dibsData]);

  const getDibsData = async () => {
    const res = await GetMyHeartListAPI();
    setDibsData(res);
  };

  const toggleDibs = async () => {
    updateDibs();
  };

  const updateDibs = async () => {
    if (!dibs) {
      await PostMyHeartListAPI(Id);
      await getDibsData();
      setTime(new Date());
      setDibs(!dibs);
    } else {
      await DeleteMyHeartListAPI(Id);
      await getDibsData();
      setTime(new Date());
      setDibs(!dibs);
    }
  };
  const navigate = useNavigate();
  const navigateToDetail = () => {
    navigate(`/detail/${Id}`);
  };

  return (
    <div>
      <StoreBlock>
        <Image src={imageUrl}></Image>
        <Info onClick={navigateToDetail}>
          <Title>{name}</Title>
          <Location>{address}</Location>
          <Recommendation>{recommendation}</Recommendation>
          <AvgPrice>{averagePrice}</AvgPrice>
        </Info>

        <Icons>
          {dibs ? (
            <Img
              src={dibsT}
              onClick={toggleDibs}
              width={"20px"}
              height={"18px"}
            />
          ) : (
            <Img
              src={dibsF}
              onClick={toggleDibs}
              width={"20px"}
              height={"18px"}
            />
          )}
          <Rating>
            <Img src={star} width={"20px"} height={"20px"} />
            {starAverage}
          </Rating>
        </Icons>
      </StoreBlock>
    </div>
  );
};
const Img = styled.img``;
const StoreBlock = styled.div`
  height: 120px;
  min-width: 328px;

  background: #f4f4f4;

  border-radius: 32px;
  display: flex;
  margin-bottom: 16px;

  &:active {
    background: #fff2de;
  }
`;
const Image = styled.img`
  width: 92px;
  height: 92px;
  min-width: 92px;

  background: #a2a2a2;
  border-radius: 20px;

  margin-left: 14.08px;
  margin-top: 14px;
  margin-bottom: 14px;
`;
const Title = styled.div`
  height: 24px;

  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  font-size: 20px;
  line-height: 24px;

  color: #151515;
`;
const Location = styled.div`
  height: 12px;

  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  color: #a2a2a2;

  padding-top: 4px;
`;
const Info = styled.div`
  width: 184px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  color: #151515;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  margin-left: 18.92px;
  margin-top: 15px;
`;
const Recommendation = styled.div`
  padding-top: 8px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const AvgPrice = styled.div`
  padding-top: 8px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Rating = styled.div`
  width: 20px;
  height: 34px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;

  text-align: center;

  color: #151515;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  margin-bottom: 12px;
  margin-right: 19px;

  justify-content: space-between;
`;

export default Store;
