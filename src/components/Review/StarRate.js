import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { ReactComponent as FilledStar } from "../../assets/star_vector.svg";
import { GetStoreDetailAPI } from "../../api/store";

const StarRate = ({storeId}) => {

  // 가게 상세 정보 데이터
  const [storeDetail, setstoreDetail] = useState({});
  
  // api로부터 받아온 starCount 별점 배열
  const [starCount, setStarCount] = useState([]);

  // starCount 배열 요소 sum 값 - progress bar 길이 계산 용도
  const [totalElementSum, setTotalElementSum] = useState(0);

  // 가게 정보 아이디로 서버에서 가게 정보 알아오기
  const getStorestoreDetailData = async (storeId) => {
    if (storeId) {
        const res = await GetStoreDetailAPI(storeId);
        console.log(res);
        setstoreDetail(res);
    }
  };

  ;

  useEffect(() => {
      getStorestoreDetailData(storeId);
    }, [storeId]);

  useEffect(() => {
    if (storeDetail.starCount) {
      const countArray = storeDetail.starCount.split('|').map(Number);
      setStarCount(countArray.reverse());
      const sum = countArray.reduce((acc, curr) => acc + curr, 0);
      setTotalElementSum(sum);
    }
  }, [storeDetail]);

  return (
    <>
      <StarRateInfo>
        {/* 평균 별점 */}
        <StarAverage>
          <FilledStar width={"36px"} height={"36px"}/>
          <AverageText>{storeDetail.starAverage}</AverageText>
        </StarAverage>

        {/* 퍼센트 부분 */}
        <div className="score" style={{display: "flex", flexDirection: "column", gap: "8px"}}>
          {starCount.map((element, index) => {
            return(
              <div style={{display: "flex", alignItems: "center"}} key={index}>
                <ProgressText color="#151515">{5 - index}점</ProgressText>
                <ProgressBar>
                  <ProgressPercentage width={(152 * element/totalElementSum)+"px"} />
                </ProgressBar>
                <ProgressText color="#A2A2A2">{element}개</ProgressText>
              </div>
              );
          })}
        </div>
      </StarRateInfo>
    </>
  );
};

export default StarRate;

// 별점 부분
const StarRateInfo = styled.div`
  width: 100%;
  height: 120px;
  background: #F4F4F4;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StarAverage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
`;

const AverageText = styled.span`
  // 평균 별점, 드롭다운 부분 텍스트 
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  margin-top: 5px;
`;

const ProgressBar = styled.div`
  width: 152px;
  height: 6px;
  background: #151515;
  border-radius: 4px;
  margin: 0 10px;
`;

const ProgressPercentage = styled.div`
  width: ${(props) => props.width};
  height: 6px;
  background: #FF7F2E;
  border-radius: 4px;
`;

const ProgressText = styled.span`
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: ${(props) => props.color};
`;