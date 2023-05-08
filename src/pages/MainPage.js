import styled from "styled-components";
import BarUp from "../components/Bottom/BarUp";
const MainPage = () => {
  return (
    <div>
      <Wrapper>
        <div>페이지 내용</div>
      </Wrapper>
      <BarUp isMain={true} />
    </div>
  );
};
//BarUp 높이 만큼 padding
const Wrapper = styled.div`
  padding-bottom: 32px;
`;
export default MainPage;
