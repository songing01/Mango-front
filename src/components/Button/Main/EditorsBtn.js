import styled from "styled-components";

const EditorsBtn = () => {
  return <Btn>내 근처 식당 확인</Btn>;
};

export default EditorsBtn;

const Btn = styled.div`
  width: 112px;
  height: 38px;

  margin: 20px auto 0 0;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  //padding: 12px 12px 12px 36px;

  box-sizing: border-box;

  background: #ff7f2e;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
`;
