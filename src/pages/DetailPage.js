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
            <IconButtons>
                <Icon>
                    <IconImage src={Star} alt="별점"/>
                    <IconDesc>0.0</IconDesc>
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
                    <span>00:00 ~ 00:00</span>
                </Info>
                <Info>
                    <span>연락처</span>
                    <span>00-0000-0000</span>
                </Info>
                <Info>
                    <span>주차가능여부</span>
                    <span>가능</span>
                </Info>
            </InfoList>

            <MenuTitle>
                <Menu>메뉴</Menu>
                <PersonPrice>인당 약 &#8361;00,000</PersonPrice>
            </MenuTitle>

            <MenuTypeToggle>
                <span>식사류</span>
                <span>세트메뉴</span>
                <span>사이드</span>
                <span>음료</span>
            </MenuTypeToggle>
            
            {/* 식당 메뉴 부분 -> 추후 컴포넌트로 분리 예정 */}
            <FoodItem>
                <FoodImage></FoodImage>
                <FoodText>음식이름</FoodText>
                <FoodText style={{color:"#A2A2A2"}}>&#8361; 00,000</FoodText>
            </FoodItem>

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

const MenuTitle = styled.div`
    width: 90%;
    margin-top: 48px;
    padding-bottom: 8px;
    border-bottom: 3px solid #15D0F9;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const Menu = styled.span`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
`;

const PersonPrice = styled.span`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
`;

const MenuTypeToggle = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    margin-top: 8px;
    
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #A2A2A2;
}
`;

const FoodItem = styled.div`
    margin-top: 20px;
`;

const FoodImage = styled.div`
    width: 112px;
    height: 112px;
    background: #A2A2A2;
    border-radius: 20px;
`;

const FoodText = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    margin-top: 5px;
`;