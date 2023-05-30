import { useEffect, useState } from "react";
import filledStar from "../../assets/icon/createreviewicon/filled_starscore.png";
import unfilledStar from "../../assets/icon/createreviewicon/unfilled_starscore.png";
const Stars = ({ setStar }) => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const array = [0, 1, 2, 3, 4];

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  useEffect(() => {
    setStar(clicked.filter(Boolean).length);
  }, [clicked]);

  return (
    <>
      {array.map(el =>
        clicked[el] ? (
          <div style={{ padding: "10px" }}>
            <img
              src={filledStar}
              width={"32px"}
              height={"32px"}
              key={el}
              onClick={() => handleStarClick(el)}
            />
          </div>
        ) : (
          <div style={{ padding: "10px" }}>
            <img
              src={unfilledStar}
              width={"32px"}
              height={"32px"}
              key={el}
              onClick={() => handleStarClick(el)}
            />
          </div>
        ),
      )}
    </>
  );
};
export default Stars;
