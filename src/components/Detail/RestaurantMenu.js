import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GetStoreMenuAPI } from "../../api/menu";

const RestaurantMenu = ({ averagePrice, storeId }) => {
  // 현재 카테고리가 무엇인지에 대한 데이터
  const [category, setCategory] = useState("식사류");

  // storeId, category를 바탕으로 서버에서 메뉴 데이터 가져오기
  const getMenuCategory = async (storeId, category) => {
    const menuData = await GetStoreMenuAPI(storeId, category);
    setCategoryMenu(menuData);
  };

  // storeId와 category가 바뀔 때마다 데이터 가져오기
  useEffect(() => {
    getMenuCategory(storeId, category);
  }, [storeId, category]);

  // 요청한 카테고리에 대한 메뉴 데이터
  const [categoryMenu, setCategoryMenu] = useState([]);

  // 가격에 콤마 붙이는 함수
  const addPriceComma = price => {
    const formattedPrice = price
      ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "";
    return formattedPrice;
  };

  return (
    <>
      <MenuTitle>
        <Menu>메뉴</Menu>
        <PersonPrice>인당 약 &#8361;{addPriceComma(averagePrice)}</PersonPrice>
      </MenuTitle>

      <MenuTypeToggle>
        <MenuType
          active={category === "식사류"}
          onClick={() => setCategory("식사류")}
        >
          식사류
        </MenuType>
        <MenuType
          active={category === "세트메뉴"}
          onClick={() => setCategory("세트메뉴")}
        >
          세트메뉴
        </MenuType>
        <MenuType
          active={category === "사이드"}
          onClick={() => setCategory("사이드")}
        >
          사이드
        </MenuType>
        <MenuType
          active={category === "음료"}
          onClick={() => setCategory("음료")}
        >
          음료
        </MenuType>
      </MenuTypeToggle>

      {/* 식당 메뉴 부분 -> 식사류 default, 음료 클릭 시 음료에 해당하는 배열 반복하기.. */}
      <FoodList>
        {categoryMenu.menus &&
          categoryMenu.menus.map((menuitem, index) => {
            return (
              <FoodItem key={index}>
                <FoodImage src={menuitem.imageUrl} alt={menuitem.name} />
                <FoodText>{menuitem.name}</FoodText>
                <FoodText style={{ color: "#A2A2A2" }}>
                  &#8361; {addPriceComma(menuitem.price)}
                </FoodText>
              </FoodItem>
            );
          })}
      </FoodList>
    </>
  );
};

export default RestaurantMenu;

const MenuTitle = styled.div`
  width: 90%;
  margin-top: 48px;
  padding-bottom: 8px;
  border-bottom: 3px solid #15d0f9;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Menu = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const PersonPrice = styled.span`
  font-family: "Pretendard";
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
`;

const MenuType = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #a2a2a2;
  color: ${props => (props.active ? "black" : "#A2A2A2")};
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const FoodList = styled.div`
  /* display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: space-between;
    margin-bottom: 100px; */

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(calc(90% / 3), 1fr)
  ); /* 아이템을 자동으로 반복하여 정렬하고, 최소 너비를 설정 */
  grid-gap: 0; /* 아이템 간의 간격을 없앰 */
  width: 90%;
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 설정 */
  margin-bottom: 100px;
`;

const FoodItem = styled.div`
  margin-top: 20px;
  width: 30%;
`;

const FoodImage = styled.img`
  width: 112px;
  height: 112px;
  background: ${props => (props.src ? "white" : "#A2A2A2")};
  border-radius: 20px;
`;

const FoodText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  margin-top: 5px;

  /* 추가한 부분 */
  white-space: nowrap;
  width: 112px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
