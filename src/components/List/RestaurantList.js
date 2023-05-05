import Restaurant from "./Restaurant";

const RestaurantList = () => {
  const data = [
    {
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNLW-Hz9RV16lviOVvInbfOaK2j568i5MeLSAOS=s1360-w1360-h1020",
      title: "모미지 식당",
      location: "신촌",
      recommendation: "소고기 가지 덮밥",
      avgPrice: "10000원",
      dibs: true,
      rating: 4.5,
    },
    {
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPdd7dtJ_KrGlanM5drUOWG71RbJW1-WdTcH4tS=s1360-w1360-h1020",
      title: "사장님 돈까스",
      location: "신촌",
      recommendation: "치즈돈까스",
      avgPrice: "12000원",
      dibs: false,
      rating: 4.3,
    },
    {
      image: undefined,
      title: "사장님 돈까스",
      location: "신촌",
      recommendation: "치즈돈까스",
      avgPrice: "12000원",
      dibs: false,
      rating: 4.3,
    },
  ];

  return (
    <div>
      {data.map(restaurant => {
        return <Restaurant restaurant={restaurant} />;
      })}
    </div>
  );
};
export default RestaurantList;
