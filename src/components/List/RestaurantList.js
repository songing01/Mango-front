import styled from "styled-components";
import Restaurant from "./Restaurant";

const RestaurantList = ({ data }) => {
  return (
    <ListBlock>
      {data.map(restaurant => {
        return <Restaurant restaurant={restaurant} />;
      })}
    </ListBlock>
  );
};
export default RestaurantList;

const ListBlock = styled.div`
  margin: 16px;
`;
