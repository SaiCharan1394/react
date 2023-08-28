import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    setResInfo(json);
  };
  if (resInfo === null) return <h1>Loading...</h1>;
  console.log(resInfo);
  const { name, cuisines } = resInfo?.data?.cards[0]?.card?.card.info;
  const { itemCards } =
    resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
