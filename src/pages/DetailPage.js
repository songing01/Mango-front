import React, { useState ,useEffect } from 'react';
import styled from "styled-components";
import Star from '../../src/assets/icon/detailbuttonbox/ic_star.png';
import WatchReview from '../../src/assets/icon/detailbuttonbox/ic_message.png';
import WriteReview from '../../src/assets/icon/detailbuttonbox/ic_write.png';
import Heart from '../../src/assets/icon/detailbuttonbox/ic_heart.png';

// detail 페이지
// list 페이지로부터 가게 정보 props로 전달받아야 함 (식당 위치, 운영 시간, 연락처, 주차가능여부, 메뉴)

const { kakao } = window;

const DetailPage = () => {

    useEffect(()=>{
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOptions = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
        // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOptions);
    }, []);

    return (
        <Div>
            <Map id="map"></Map>

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

const Map = styled.div`
    width: 90%;
    aspect-ratio: 1/1;
    margin-top: 10px;
`;