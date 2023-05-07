import styled from "styled-components";
import Store from "./Store";

const StoreList = ({ stores, data, setData }) => {
  return (
    <ListBlock>
      {stores &&
        stores.map(store => {
          return (
            <Store
              key={store.Id}
              name={store.name}
              address={store.address}
              imageUrl={store.imageUrl}
              recommendation={store.recommendation}
              averagePrice={store.averagePrice}
              starAverage={store.starAverage}
              data={data}
              setData={setData}
            />
          );
        })}
    </ListBlock>
  );
};
export default StoreList;

const ListBlock = styled.div`
  margin: 16px;
`;
