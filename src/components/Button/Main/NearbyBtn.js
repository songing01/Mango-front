import styled from "styled-components";

const NearbyBtn = () => {
  return <Btn>내 근처 식당 확인</Btn>;
};

export default NearbyBtn;

const Btn = styled.div`
  width: 150px;
  height: 38px;

  margin: 20px 0 0 auto;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 12px 12px 36px;

  box-sizing: border-box;

  background: #15d0f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
`;
