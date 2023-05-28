import styled from "styled-components";
// asset
import mainlogo from "../assets/logo/mainlogo.png";
// component
import SearchBox from "../components/Search/SearchBox";
import TopNavbar from "../components/Nav/TopNavbar";
import NearbyBtn from "../components/Button/Main/NearbyBtn";
import MainButtonContainer from "../components/Button/Main/MainButtonContainer";
import MainSlideBtnContainer from "../components/Button/Main/MainSlideBtnContainer";
import EditorsBtn from "../components/Button/Main/EditorsBtn";
import BarUp from "../components/Button/BarUp";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  return (
    <Div>
      <TopNavbar noTitle />
      <Logo src={mainlogo} />

      <Container>
        <SearchBox />
        <NearbyBtn />
        <MainButtonContainer />
      </Container>

      <MainSlideBtnContainer />

      <Container>
        <EditorsBtn />
      </Container>

      <BarUp isMain />
      <Footer />
    </Div>
  );
};
export default MainPage;

const Div = styled.div`
  position: relative;

  width: 100%;
  height: auto;
  padding-bottom: 32px;
  background-color: #fdfff8;
`;

const Container = styled.div`
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
`;

const Logo = styled.img`
  width: 111px;
  height: auto;

  position: absolute;
  top: 15px;
  left: 16px;
`;
