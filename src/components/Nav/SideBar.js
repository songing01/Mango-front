import styled, { css } from "styled-components";

const Sidebar = ({ isOpen }) => {
  return <Div isOpen={isOpen}>sdfsd엥df</Div>;
};

export default Sidebar;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Div = styled.div`
  position: absolute;

  z-index: 100;
  width: 136px;
  height: 436px;
  background: #fff2de;
  border-radius: 20px 0px 0px 20px;

  transition: transform 0.4s ease-in-out;

  top: 0px;
  right: 0px;

  ${props =>
    props.isOpen
      ? css`
          transform: translatex(0);
        `
      : css`
          transform: translatex(136px);
        `}
`;
