import styled from "styled-components";
import Store from "./Store";

const StoreList = ({
  stores,
  data,
  setData,
  dibsData,
  setDibsData,
  setTime,
}) => {
  return (
    <ListBlock>
      {stores &&
        stores.map(store => {
          return (
            <Store
              key={store.storeId}
              Id={store.storeId}
              name={store.name}
              address={store.address}
              imageUrl={store.imageUrl}
              recommendation={store.recommendation}
              averagePrice={store.averagePrice}
              starAverage={store.starAverage}
              store={store}
              setData={setData}
              dibsData={dibsData}
              setDibsData={setDibsData}
              setTime={setTime}
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
