import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3066525&lng=80.4365402&restaurantId=108424&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json);
  };
  if (resInfo === null) return <h1>Loading...</h1>;
  console.log(resInfo);
  const { name,cuisines } =
    resInfo?.data?.cards[0]?.card
      ?.card.info;
  const {items}=resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  ?.card.itemCards[0]?.card?.info;
  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')}</h3>
      <li>
        <ol>{items}</ol>
      </li>
    </div>
  );
};

export default RestaurantMenu;
