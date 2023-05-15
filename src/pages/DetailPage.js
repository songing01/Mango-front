import React, { useState } from 'react';
import styled from "styled-components";
import RestaurantInfo from '../components/Detail/RestaurantInfo';
import RestaurantMenu from '../components/Detail/RestaurantMenu';

// detail 페이지
// list 페이지로부터 가게 정보 props로 전달받아야 함 (식당 위치, 운영 시간, 연락처, 주차가능여부, 메뉴)

const DetailPage = () => {
    return (
        <Div>
            <RestaurantInfo />
            <RestaurantMenu />
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
