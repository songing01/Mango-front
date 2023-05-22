import React, { useState ,useEffect } from 'react';
import styled from "styled-components";
import Star from '../../assets/icon/detailbuttonbox/ic_star.png';
import WatchReview from '../../assets/icon/detailbuttonbox/ic_message.png';
import WriteReview from '../../assets/icon/detailbuttonbox/ic_write.png';
import Heart from '../../assets/icon/detailbuttonbox/ic_heart.png';

const { kakao } = window;

const RestaurantInfo = (
    {name, address, starAverage, operationHours, phone, isParking}
) => {

    function searchLocationByAddress(map, address, name) {
        // 마커 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35); 
                
                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                    image : markerImage // 마커 이미지 
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;font-family:"Pretendard">'+name+'</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    }

    useEffect(()=>{
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOptions = {
            center: new kakao.maps.LatLng(37.555134, 126.936893), // 지도의 중심좌표
            level: 5, // 지도의 확대 레벨
            isPanto: true,
        };

        // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOptions);

        // 현재 위치 마커가 표시될 위치입니다 - 신촌역 좌표로 설정함
        var markerPosition  = new kakao.maps.LatLng(37.555134, 126.936893); 

        // 현재 위치 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        searchLocationByAddress(map, address, name);
        
    }, [address, name]);


    return (
        <>
            <Map id="map"></Map>
            <IconButtons>
                <Icon>
                    <IconImage src={Star} alt="별점"/>
                    <IconDesc>{starAverage}</IconDesc>
                </Icon>
                <Icon>
                    <IconImage src={WatchReview} alt="리뷰 보기"/>
                    <IconDesc>리뷰 보기</IconDesc>
                </Icon> 
                <Icon>
                    <IconImage src={WriteReview} alt="리뷰 쓰기"/> 
                    <IconDesc>리뷰 쓰기</IconDesc>
                </Icon>
                <img src={Heart} style={{marginLeft: "auto", cursor: "pointer"}} alt="찜 버튼" />
            </IconButtons>

            <InfoList>
                <Info>
                    <span>운영 시간</span>
                    <span>{operationHours}</span>
                </Info>
                <Info>
                    <span>연락처</span>
                    <span>{phone}</span>
                </Info>
                <Info>
                    <span>주차가능여부</span>
                    <span>{isParking == 1 ? "가능" : "불가능"}</span>
                </Info>
            </InfoList>
        </>
  );
};

export default RestaurantInfo;

const Map = styled.div`
    width: 90%;
    aspect-ratio: 1/1;
    margin-top: 10px;
`;

const IconButtons = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 18px;
`;

const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 16px;
    cursor: pointer;
`;

const IconImage = styled.img`
    margin-bottom: 4px;
`;

const IconDesc = styled.span`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 10px;
`;

const InfoList = styled.div`
    width: 90%;
    height: 100px;
    margin-top: 14px;

    /* lightgrey */

    border: 4px solid #F4F4F4;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 12px;
    margin: 8px 12px;
`;