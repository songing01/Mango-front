//lib
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// asset
import ic_search from "../../assets/icon/searchbox/ic_search.png";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  /** 검색 시 list 페이지로 이동 */
  const _handleSubmitSearch = e => {
    e.preventDefault();
    localStorage.setItem("mango-search", search); // 검색어 로컬스토리지에 저장
    navigate("/list");
  };

  return (
    <SearchForm onSubmit={e => _handleSubmitSearch(e)}>
      <img src={ic_search} />
      <input
        type="text"
        placeholder="식당 이름"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </SearchForm>
  );
};

export default SearchBox;

const SearchForm = styled.form`
  margin-top: 60px;

  display: flex;
  justify-content: start;
  align-items: center;

  width: 100%;
  height: 40px;

  background: #f4f4f4;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 23px;

  img {
    width: 24px;
    height: 24px;
    margin-left: 15px;
    margin-right: 7px;
  }

  input {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #a2a2a2;

    background-color: transparent;
    border: none;

    width: 80%;

    &:focus {
      outline: none;
    }
  }
`;
