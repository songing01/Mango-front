//lib
import styled from "styled-components";
// asset
import ic_search from "../../assets/icon/searchbox/ic_search.png";

const SearchBox = () => {
  return (
    <SearchDiv>
      <img src={ic_search} />
      <input type="text" placeholder="식당 이릉" />
    </SearchDiv>
  );
};

export default SearchBox;

const SearchDiv = styled.div`
  margin-top: 83px;

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
