import styled from "styled-components";
// asset
import logo from "../assets/logo/logo.png";
// component
import SearchBox from "../components/Search/SearchBox";
import TopNavbar from "../components/Nav/TopNavbar";
import NearbyBtn from "../components/Button/Main/NearbyBtn";
import MainButtonContainer from "../components/Button/Main/MainButtonContainer";
import MainSlideBtnContainer from "../components/Button/Main/MainSlideBtnContainer";
import EditorsBtn from "../components/Button/Main/EditorsBtn";
const MainPage = () => {
  return (
    <Div>
      <TopNavbar />

      <Logo src={logo} />

      <Container>
        <SearchBox />
        <NearbyBtn />
        <MainButtonContainer />
        <MainSlideBtnContainer />
        <EditorsBtn />
      </Container>
    </Div>
  );
};
//BarUp 높이 만큼 padding
const Wrapper = styled.div`
  padding-bottom: 32px;
`;
export default MainPage;

const Div = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  width: 111px;
  height: auto;

  position: absolute;
  top: 9px;
  left: 16px;
`;

const Container = styled.div`
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
`;
