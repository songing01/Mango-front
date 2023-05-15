import styled from "styled-components";
import { ReactComponent as FilledStar } from "../../assets/star_vector.svg";

const StarRate = () => {
  const starRate = [
    {id : 5, star : 50},
    {id : 4, star : 20},
    {id : 3, star : 15},
    {id : 2, star : 5},
    {id : 1, star : 10},
  ];
  return (
    <>
      <StarRateInfo>
        {/* 평균 별점 */}
        <StarAverage>
          <FilledStar width={"36px"} height={"36px"}/>
          <AverageText>0.0</AverageText>
        </StarAverage>

        {/* 퍼센트 부분 */}
        <div className="score" style={{display: "flex", flexDirection: "column", gap: "8px"}}>
          {starRate.map((element, index) => {
            return(
              <div style={{display: "flex", alignItems: "center"}}>
                <ProgressText color="#151515">{element.id}점</ProgressText>
                <ProgressBar>
                  <ProgressPercentage width={(152 * element.star/100)+"px"} />
                </ProgressBar>
                <ProgressText color="#A2A2A2">{element.star}%</ProgressText>
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