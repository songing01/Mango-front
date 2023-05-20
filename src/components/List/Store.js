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
}) => {
  const [dibs, setDibs] = useState();
  useEffect(() => {
    console.log("아아", dibsData);
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

  const useDidMountEffect = (func, deps) => {
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
    } else {
      await DeleteMyHeartListAPI(Id);
      const res = await getDibsData();
      console.log("랄라", res);
    }
  };
  const navigate = useNavigate();
  const navigateToDetail = () => {
    navigate("/detail", { state: { ...store } });
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
  /*width: 358px;*/
  height: 120px;

  /* lightgrey */
  background: #f4f4f4;

  border-radius: 32px;
  display: flex;
  margin-bottom: 16px;

  &:active {
    background: #fff2de;
  }

  //hover일때는 컬러 적용아닌거 맞는지... 디자인에 여쭤보기...
  /*
  &:hover {
    background: #fff2de;
  }*/
`;
const Image = styled.img`
  width: 92px;
  height: 92px;

  /* midgrey */
  background: #a2a2a2;
  border-radius: 20px;

  margin-left: 14.08px;
  margin-top: 14px;
  margin-bottom: 14px;
`;
const Title = styled.div`
  /*width: 70.39px;*/
  height: 24px;

  /* bold20 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  /* lessblack */

  color: #151515;
`;
const Location = styled.div`
  /*width: 128.72px;*/
  height: 12px;

  /* bold12 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  /* midgrey */

  color: #a2a2a2;

  padding-top: 4px;
`;
const Info = styled.div`
  height: 14px;

  /* bold12 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  /* lessblack */

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
  /* bold8 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  /* identical to box height */

  text-align: center;

  /* lessblack */

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
