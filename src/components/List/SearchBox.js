import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/search_vector.svg";

const SearchBox = ({ keyword, setKeyword }) => {
  const handleChange = e => {
    setKeyword(e.target.value);
  };
  return (
    <SearchBlock>
      <Input onChange={handleChange} value={keyword} placeholder="식당 이름" />
      <SearchIcon width={"24.14px"} height={"24px"} />
    </SearchBlock>
  );
};

export default SearchBox;

const SearchBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 19px;

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
  height: 14px;

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

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 1;

  &::placeholder {
    color: #a2a2a2;
  }
`;
