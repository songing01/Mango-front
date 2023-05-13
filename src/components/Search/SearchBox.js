//lib
import styled from "styled-components";

const SearchBox = () => {
  return <SearchDiv>검색창</SearchDiv>;
};

export default SearchBox;

const SearchDiv = styled.div`
  width: 100%;
  height: 40px;

  background: #f4f4f4;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
`;
