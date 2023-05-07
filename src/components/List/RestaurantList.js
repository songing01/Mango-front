import styled from "styled-components";
import Restaurant from "./Restaurant";

const RestaurantList = ({ data, setData }) => {
  return (
    <ListBlock>
      {data &&
        data.map(restaurant => {
          return (
            <Restaurant
              key={restaurant.id}
              restaurant={restaurant}
              data={data}
              setData={setData}
            />
          );
        })}
    </ListBlock>
  );
};
export default RestaurantList;

const ListBlock = styled.div`
  margin: 16px;
`;
