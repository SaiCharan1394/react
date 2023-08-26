import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    const [resInfo,setResInfo]=useState([])
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
  const card=resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  console.log(card);
  const {name,price}=card?.itemCards[0]?.card?.info
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
    </div>
  );
};

export default RestaurantMenu;