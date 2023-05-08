import styled from "styled-components";
import Store from "./Store";

const StoreList = ({ stores, data, setData, dibsData, setDibsData }) => {
  return (
    <ListBlock>
      {stores &&
        stores.map(store => {
          return (
            <Store
              key={store.Id}
              Id={store.Id}
              name={store.name}
              address={store.address}
              imageUrl={store.imageUrl}
              recommendation={store.recommendation}
              averagePrice={store.averagePrice}
              starAverage={store.starAverage}
              data={data}
              setData={setData}
              dibsData={dibsData}
              setDibsData={setDibsData}
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
