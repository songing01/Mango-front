import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/search_vector.svg";
import inputClearButton from "../../assets/ic_inputClear.svg";

const SearchBox = ({ keyword, setKeyword }) => {
  const handleChange = e => {
    setKeyword(e.target.value);
  };
  return (
    <SearchBlock>
      <SearchIcon width={"24.14px"} height={"24px"} />
      <Input
        onChange={handleChange}
        value={keyword}
        placeholder="식당 이름"
        type="search"
      />
    </SearchBlock>
  );
};

export default SearchBox;

const SearchBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;

  height: 40px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 24px;

  /* lightgrey */

  background: #f4f4f4;
  /* shadow */

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
`;
const Input = styled.input`
  height: 16px; //디자인 상 14px 인데, 그러면 clearButton이 조금 잘려서 16px로 일단 설정. 디자인팀에 수정요청 예정

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  /* midgrey */
  color: #a2a2a2;
  background-color: #f4f4f4;
  border: 0;
  outline: none;

  margin-left: 7.86px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 1;

  &::placeholder {
    color: #a2a2a2;
  }
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: url(${inputClearButton}) center center no-repeat;
    cursor: pointer;
  }
`;
