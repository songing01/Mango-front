import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RestaurantInfo from "../components/Detail/RestaurantInfo";
import RestaurantMenu from "../components/Detail/RestaurantMenu";
import { useParams } from "react-router-dom";
import { GetStoreDetailAPI } from "../api/store";
import TopNavbar from "../components/Nav/TopNavbar";
import BarUp from "../components/Button/BarUp";

// detail 페이지

const DetailPage = () => {
  // 가게 상세 정보 데이터
  const [storeData, setStoreData] = useState([]);

  // list 페이지로부터 받은 가게 아이디
  const { storeId } = useParams();

  // 가게 정보 아이디로 서버에서 가게 정보 알아오기
  const getStoreDetailData = async storeId => {
    if (storeId) {
      const res = await GetStoreDetailAPI(storeId);
      setStoreData(res);
    }
  };

  useEffect(() => {
    getStoreDetailData(storeId);
  }, [storeId]);

  return (
    <Div>
      <TopNavbar title={storeData.name} subTitle={storeData.address} subTitleColor="#151515" />
      <RestaurantInfo
        name={storeData.name}
        storeId={storeId}
        address={storeData.address}
        starAverage={storeData.starAverage}
        operationHours={storeData.operationHours}
        phone={storeData.phone}
        isParking={storeData.isParking}
      />
      <RestaurantMenu averagePrice={storeData.averagePrice} storeId={storeId} />
      <BarUp isMain={false} />
    </Div>
  );
};

export default DetailPage;

const Div = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
`;
