import styled from "styled-components";
import RestaurantList from "../components/List/RestaurantList";
import SearchBox from "../components/List/SearchBox";
import { useState } from "react";

const ListPage = () => {
  //검색어
  const [keyword, setKeyword] = useState("");
  //처음엔 전체 데이터 보여주기
  const [data, setData] = useState([
    {
      id: 1,
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNLW-Hz9RV16lviOVvInbfOaK2j568i5MeLSAOS=s1360-w1360-h1020",
      title: "모미지 식당",
      location: "신촌",
      recommendation: "소고기 가지 덮밥",
      avgPrice: "10000원",
      dibs: true,
      rating: 4.5,
    },
    {
      id: 2,
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPdd7dtJ_KrGlanM5drUOWG71RbJW1-WdTcH4tS=s1360-w1360-h1020",
      title: "사장님 돈까스",
      location: "신촌",
      recommendation: "치즈돈까스",
      avgPrice: "12000원",
      dibs: false,
      rating: 4.3,
    },
    {
      id: 3,
      image: undefined,
      title: "사장님 돈까스",
      location: "신촌",
      recommendation: "치즈돈까스",
      avgPrice: "12000원",
      dibs: false,
      rating: 4.3,
    },
  ]);

  const getSearchedData = (keyword, e) => {
    e.preventDefault();
    if (keyword) {
      console.log(keyword);
      //키워드 넣어서 데이터 요첨 & get한 데이터 setData로 저장
      //임시데이터 - 검색된 데이터
      setData([
        {
          id: 4,
          image:
            "https://lh3.googleusercontent.com/p/AF1QipNLW-Hz9RV16lviOVvInbfOaK2j568i5MeLSAOS=s1360-w1360-h1020",
          title: "검색된 식당",
          location: "신촌",
          recommendation: "소고기 가지 덮밥",
          avgPrice: "10000원",
          dibs: true,
          rating: 4.5,
        },
        {
          id: 5,
          image:
            "https://lh3.googleusercontent.com/p/AF1QipPdd7dtJ_KrGlanM5drUOWG71RbJW1-WdTcH4tS=s1360-w1360-h1020",
          title: "검색된 식당2",
          location: "신촌",
          recommendation: "치즈돈까스",
          avgPrice: "12000원",
          dibs: false,
          rating: 4.3,
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
      <RestaurantList data={data} setData={setData} />
    </div>
  );
};

export default ListPage;

const SearchForm = styled.form``;
