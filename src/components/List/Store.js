import styled from "styled-components";
import { ReactComponent as DibsT } from "../../assets/icon/listicon/heartfill_vector.svg";
import { ReactComponent as DibsF } from "../../assets/icon/listicon/heart_vector.svg";
import { ReactComponent as Star } from "../../assets/icon/listicon/star_vector.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
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
    setDibs(!dibs);
  };

  const useDidMountEffect = func => {
    const didMount = useRef(false);
    useEffect(() => {
      if (didMount.current) func();
      else didMount.current = true;
    }, [dibs]);
  };

  useDidMountEffect(() => {
    updateDibs();
  }, [dibs]);

  const updateDibs = async () => {
    if (dibs) {
      const res = await PostMyHeartListAPI(Id);
      await getDibsData();
      setTime(new Date());
    } else {
      await DeleteMyHeartListAPI(Id);
      const res = await getDibsData();
      setTime(new Date());
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
            <DibsT onClick={toggleDibs} width={"20px"} height={"18px"} />
          ) : (
            <DibsF onClick={toggleDibs} width={"20px"} height={"18px"} />
          )}
          <Rating>
            <Star />
            {starAverage}
          </Rating>
        </Icons>
      </StoreBlock>
    </div>
  );
};

const StoreBlock = styled.div`
  height: 120px;

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

  background: #a2a2a2;
  border-radius: 20px;

  margin-left: 14.08px;
  margin-top: 14px;
  margin-bottom: 14px;
`;
const Title = styled.div`
  height: 24px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #151515;
`;
const Location = styled.div`
  height: 12px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  color: #a2a2a2;

  padding-top: 4px;
`;
const Info = styled.div`
  height: 14px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  color: #151515;
  display: flex;
  flex-direction: column;

  flex-grow: 1;

  margin-left: 18.61px;
  margin-top: 15px;
`;
const Recommendation = styled.div`
  padding-top: 8px;
`;
const AvgPrice = styled.div`
  padding-top: 8px;
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
