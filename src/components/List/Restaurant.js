import styled from "styled-components";
import { ReactComponent as DibsT } from "../../assets/heartfill_vector.svg";
import { ReactComponent as DibsF } from "../../assets/heart_vector.svg";
import { ReactComponent as Star } from "../../assets/star_vector.svg";
const Restaurant = ({ restaurant }) => {
  const { image, title, location, recommendation, avgPrice, dibs, rating } =
    restaurant;
  const toggleDibs = () => {};
  return (
    <div>
      <RestaurantBlock>
        <Image src={image}></Image>
        <Info>
          <Title>{title}</Title>
          <Location>{location}</Location>
          <Recommendation>{recommendation}</Recommendation>
          <AvgPrice>{avgPrice}</AvgPrice>
        </Info>
        <Icons>
          {dibs ? (
            <DibsT onClick={toggleDibs} width={"20px"} height={"18px"} />
          ) : (
            <DibsF onClick={toggleDibs} width={"20px"} height={"18px"} />
          )}
          <Rating>
            <Star />
            {rating}
          </Rating>
        </Icons>
      </RestaurantBlock>
    </div>
  );
};

const RestaurantBlock = styled.div`
  /*width: 358px;*/
  height: 120px;

  /* lightgrey */
  background: #f4f4f4;

  border-radius: 32px;
  display: flex;
  margin-bottom: 16px;
`;
const Image = styled.img`
  width: 92px;
  height: 92px;

  /* midgrey */
  background: #a2a2a2;
  border-radius: 20px;

  margin-left: 14.08px;
  margin-top: 14px;
  margin-bottom: 14px;
`;
const Title = styled.div`
  /*width: 70.39px;*/
  height: 24px;

  /* bold20 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  /* lessblack */

  color: #151515;
`;
const Location = styled.div`
  /*width: 128.72px;*/
  height: 12px;

  /* bold12 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  /* midgrey */

  color: #a2a2a2;

  padding-top: 4px;
`;
const Info = styled.div`
  height: 14px;

  /* bold12 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  /* lessblack */

  color: #151515;
  display: flex;
  flex-direction: column;

  flex-grow: 1;

  margin-left: 18.61px;
  margin-top: 15px;
`;
const Recommendation = styled.div`
  padding-top: 8px;
`;
const AvgPrice = styled.div`
  padding-top: 8px;
`;

const Rating = styled.div`
  width: 20px;
  height: 34px;
  /* bold8 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  /* identical to box height */

  text-align: center;

  /* lessblack */

  color: #151515;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  margin-bottom: 12px;
  margin-right: 19px;
  justify-content: space-between;
`;

export default Restaurant;
