import useRestaurentMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);
  if (resInfo === null) return <h1>Loading...</h1>;
  console.log(resInfo);
  const { name, cuisines } = resInfo?.data?.cards[0]?.card?.card.info;
  const { itemCards } =
    
  return (
    <div className="resmenu">
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
