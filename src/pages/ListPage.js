import styled from "styled-components";
import StoreList from "../components/List/StoreList";
import SearchBox from "../components/List/SearchBox";
import { useState, useEffect } from "react";

const ListPage = () => {
  const [data, setData] = useState([]);
  //검색어
  const [keyword, setKeyword] = useState("");
  /* useEffect(() => {
    fetch("http://localhost:8080/stores?location=%EC%8B%A0%EC%B4%8C")
      .then(res => res.json())
      .then(data => setData(data));
  }, []); */

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
  }, []);
  //지역별 가게 리스트 조회

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
      <SearchForm
        onSubmit={e => {
          getSearchedData(keyword, e);
        }}
      >
        <SearchBox keyword={keyword} setKeyword={setKeyword} />
      </SearchForm>
      {data[0] && data[0].stores && (
        <StoreList stores={data[0].stores} data={data} setData={setData} />
      )}
    </div>
  );
};

const SearchForm = styled.form``;
export default ListPage;
