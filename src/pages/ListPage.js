import styled from "styled-components";
import StoreList from "../components/List/StoreList";
import SearchBox from "../components/List/SearchBox";
import BarUp from "../components/Bottom/BarUp";
import { useState, useEffect } from "react";

const ListPage = () => {
  //보여줄 가게 데이터
  const [data, setData] = useState([]);
  //멤버별 찜한 가게 데이터
  const [dibsData, setDibsData] = useState([]);
  //검색어
  const [keyword, setKeyword] = useState("");
  /* useEffect(() => {
    fetch("http://localhost:8080/stores?location=%EC%8B%A0%EC%B4%8C")
      .then(res => res.json())
      .then(data => setData(data));
  }, []); */

  //지역별 가게 리스트 조회
  useEffect(() => {
    setData([
      {
        location: "신촌",
        stores: [
          {
            Id: 7,
            name: "유야케도쿄",
            address: "신촌",
            imageUrl: "https://efub/?img=11",
            recommendation: "치즈돈가스",
            averagePrice: 10000,
            starAverage: 5,
          },
          {
            Id: 8,
            name: "한끼마끼",
            address: "신촌",
            imageUrl: "https://efub/?img=1",
            recommendation: "우동",
            averagePrice: 4000,
            starAverage: 5,
          },
        ],
      },
    ]);
    setDibsData([
      {
        storeId: 1,
        name: "이펍떡볶이",
        address: "신촌",
        phone: "0211111111",
        isParking: 1,
        operationHours: "8:00-20:00",
        imageUrl: "https://efub/?img=14",
        recommendation: "오리지널 떡볶이",
        averagePrice: 6000,
        star_average: 5,
        starCount: "20, 0, 0, 0, 0",
      },
      {
        storeId: 2,
        name: "이펍호떡",
        address: "신촌",
        phone: "0211111111",
        isParking: 0,
        operationHours: "8:00-18:00",
        imageUrl: "https://efub/?img=10",
        recommendation: "씨앗호떡",
        averagePrice: 6000,
        star_average: 5,
        starCount: "20, 0, 0, 0, 0",
      },
      {
        storeId: 3,
        name: "이펍빙수",
        address: "강남",
        phone: "0211111111",
        isParking: 0,
        operationHours: "11:00-22:00",
        imageUrl: "https://efub/?img=12",
        recommendation: "팥빙수",
        averagePrice: 9000,
        star_average: 5,
        starCount: "20, 0, 0, 0, 0",
      },
      {
        storeId: 4,
        name: "까이식당",
        address: "신촌",
        phone: "0211111111",
        isParking: 0,
        operationHours: "11:00-22:00",
        imageUrl: "https://efub/?img=12",
        recommendation: "팥빙수",
        averagePrice: 9000,
        star_average: 5,
        starCount: "20, 0, 0, 0, 0",
      },
    ]);
  }, []);

  const getSearchedData = (keyword, e) => {
    e.preventDefault();
    if (keyword) {
      console.log(keyword);
      //키워드 넣어서 데이터 요첨 & get한 데이터 setData로 저장
      //가게 이름 검색
      setData([
        {
          stores: [
            {
              Id: 3,
              name: "까이식당",
              address: "신촌",
              phone: "0211111111",
              isParking: 1,
              operationHours: "8:00-20:00",
              imageUrl: "https://efub/?img=14",
              recommendation: "오리지널 떡볶이",
              averagePrice: 6000,
              starAverage: 5,
            },
          ],
        },
      ]);
    }
  };

  //Search관련 함수랑 Form 다 컴포넌트로 분리하려했는데.. contextAPI, 리덕스 안쓰려면 이 방법밖에 떠오르지 않아요....
  return (
    <div>
      <Wrapper>
        <SearchForm
          onSubmit={e => {
            getSearchedData(keyword, e);
          }}
        >
          <SearchBox keyword={keyword} setKeyword={setKeyword} />
        </SearchForm>
        {data[0] && data[0].stores && (
          <StoreList
            stores={data[0].stores}
            data={data}
            setData={setData}
            dibsData={dibsData}
            setDibsData={setDibsData}
          />
        )}{" "}
      </Wrapper>
      <BarUp isMain={false} />
    </div>
  );
};

const SearchForm = styled.form``;
const Wrapper = styled.div`
  padding-bottom: 32px;
`;
export default ListPage;
