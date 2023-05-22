import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// assets
import hamburger from "../../assets/icon/topnavbar/ic_hamburger.png";
import leftarrow from "../../assets/icon/topnavbar/ic_left.png";
import user from "../../assets/icon/topnavbar/ic_user.png";
// component
import Sidebar from "./SideBar";
// api
import { GetMyHeartListAPI } from "../../api/heart";
import { GetUserInfo } from "../../api/user";

/** ⭐ 사용 예시
 * <TopNavbar noTitle />
 * <TopNavbar title="내 위치" subTitle="신촌" subTitleColor="#15D0F9" />
 */

/** ⭐ props 설명
 * 1. props에 noTitle 지정시 arrow와 타이틀 없는 버전
 *  2. title : 중앙에 들어가는 굵은 글씨 타이틀
 *  3. subTitle : title 밑에 들어가는 서브 텍스트
 *  4. subTitleColor : subTitle의 색상코드. 디폴트는 색상은 #151515
 *  5. updateTime : 찜 리스트 요청 시간. updateTime이 달라질 때 마다 찜 목록 업데이트
 */

const TopNavbar = ({ noTitle, title, subTitle, subTitleColor, updateTime }) => {
  const [sidebarOpen, setSideberOpen] = useState(false); // 사이드바 open 여부
  const [heartList, setHeartList] = useState([]); // 찜 목록
  const [userInfo, setUserInfo] = useState(null);

  const sidebarRef = useRef(null); // 사이드바 dom
  const navigate = useNavigate();

  /** 사이드바 닫기 함수*/
  const _handleCloseSidebar = e => {
    if (!sidebarRef.current?.contains(e.target)) {
      return setSideberOpen(false);
    }
  };

  /** 사이드바 열기 함수 */
  const _handleOpenSidebar = () => {
    setSideberOpen(true);
  };

  /** 유저 정보 불러오는 비동기 함수 */
  const _reqGetUserInfo = async () => {
    const res = await GetUserInfo();
    setUserInfo(res);
  };

  /** 내 찜 목록 불러오는 비동기 함수 */
  const _reqGetMyHeartsList = async () => {
    const res = await GetMyHeartListAPI();
    setHeartList(res);
  };

  /** 뒤로가기 버튼 함수 */
  const _handleClickGotoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // 뒷 배경 클릭 시 자동으로 사이드바 닫힘
    document.addEventListener("click", _handleCloseSidebar, true);
    // 유저 정보 불러오기
    _reqGetUserInfo();

    return () => {
      document.removeEventListener("click", _handleCloseSidebar, true); // clean up
    };
  }, []);

  useEffect(() => {
    // 찜 목록 불러오기
    _reqGetMyHeartsList();
  }, [updateTime]);

  /** 사이드바 열었을 때 배경 스크롤 방지 */
  useEffect(() => {
    if (sidebarOpen) {
      document.getElementById("root").style.overflow = "hidden";
    } else {
      document.getElementById("root").style.overflow = "unset";
    }
  }, [sidebarOpen]);

  return (
    <NavDiv noTitle={noTitle}>
      {!noTitle && (
        <>
          <img
            src={leftarrow}
            className="leftarrow"
            onClick={_handleClickGotoBack}
          />
          <Title subTitleColor={subTitleColor}>
            <p className="big-title">{title}</p>
            <p className="sub-title">{subTitle}</p>
          </Title>
        </>
      )}

      <IconsBox>
        <img src={hamburger} className="hamburger" />
        <img src={user} className="user" onClick={_handleOpenSidebar} />
      </IconsBox>

      <Sidebar isOpen={sidebarOpen} heartList={heartList} userInfo={userInfo} />
    </NavDiv>
  );
};

export default TopNavbar;

const NavDiv = styled.div`
  position: relative;

  height: 66px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
  box-sizing: border-box;

  .leftarrow {
    width: 12px;
    height: auto;
  }

  .hamburger {
    width: 24px;
    height: 24px;
  }

  .user {
    width: 36px;
    height: 36px;

    margin-left: 16px;
  }

  justify-content: ${props => props.noTitle && "end"};
`;

const IconsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  //justify-content: center;

  p {
    font-family: "Pretendard";
    font-style: normal;
    text-align: center;
    margin: 0;
  }

  .big-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #151515;

    margin-top: 15px;
    margin-bottom: 3px;
  }

  .sub-title {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${props => props.subTitleColor || "#151515"};
  }
`;
