import React, { useState } from 'react';
import styled from "styled-components";

const RestaurantMenu = () => {
  return (
    <>
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
    </>
  );
};

export default RestaurantMenu;

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