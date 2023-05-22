import styled from "styled-components";
import StoreList from "../components/List/StoreList";
import SearchBox from "../components/List/SearchBox";
import BarUp from "../components/Button/BarUp";
import { useState, useEffect } from "react";
import axios from "axios";
import { GetMyHeartListAPI } from "../api/heart";
import { GetSearchedStoreListAPI, GetLocalStoreListAPI } from "../api/store";
import TopNavbar from "../components/Nav/TopNavbar";
const ListPage = () => {
  //보여줄 가게 데이터
  const [data, setData] = useState([]);
  //멤버별 찜한 가게 데이터
  const [dibsData, setDibsData] = useState([]);
  //검색어
  const [keyword, setKeyword] = useState("");

  const [time, setTime] = useState();

  const getData = async () => {
    const res = await GetLocalStoreListAPI();
    console.log(res);
    setData(res);
  };
  const getDibsData = async () => {
    const res = await GetMyHeartListAPI();
    setDibsData(res);
  };

  useEffect(() => {
    if (localStorage.getItem("mango-search")) {
      setKeyword(localStorage.getItem("mango-search"));
      getSearchedData(localStorage.getItem("mango-search"));
      getDibsData();
      localStorage.setItem("mango-search", "");
    } else {
      getData();
      getDibsData();
    }
  }, []);

  const submitKeyword = async (keyword, e) => {
    e.preventDefault();
    if (keyword) {
      const res = await GetSearchedStoreListAPI(keyword);
      setData(res);
    }
  };

  const getSearchedData = async keyword => {
    if (keyword) {
      const res = await GetSearchedStoreListAPI(keyword);
      setData(res);
    }
  };

  return (
    <div>
      <TopNavbar
        title="내 위치"
        subTitle="신촌"
        subTitleColor="#15D0F9"
        updateTime={time}
      />
      <Wrapper>
        <SearchForm
          onSubmit={e => {
            submitKeyword(keyword, e);
          }}
        >
          <SearchBox keyword={keyword} setKeyword={setKeyword} />
        </SearchForm>
        {data && (
          <StoreList
            stores={data}
            data={data} //수정해야할듯
            setData={setData}
            dibsData={dibsData}
            setDibsData={setDibsData}
            setTime={setTime}
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
