import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3066525&lng=80.4365402&restaurantId=86549&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div>
      <h1>Restaurant</h1>
      <h2>Menu</h2>
    </div>
  );
};

export default RestaurantMenu;