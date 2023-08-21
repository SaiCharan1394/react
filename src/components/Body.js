import ResCard from "./Rescard";

import { useEffect, useState } from "react";

const Body = () => {
  const [reList, setreList] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true"
    );
    const json = await data.json();
    setreList(
      json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (reList.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const filtered = reList.filter((i) => i.info.avgRating >= 4);
            setreList(filtered);
          }}
        >
          Top Res
        </button>
      </div>
      <div className="card-container">
        {reList.map((i) => (
          <ResCard key={i.info.id} resData={i} />
        ))}
      </div>
    </div>
  );
};

export default Body;
