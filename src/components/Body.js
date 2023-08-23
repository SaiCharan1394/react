import ResCard from "./Rescard";
import { useEffect, useState } from "react";

const Body = () => {
  const [reList, setreList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true"
    );
    const json = await data.json();
    setreList(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (reList.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRes = reList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            search
          </button>
        </div>
        <div className="top-res">
          <button
            onClick={() => {
              const filtered = reList.filter((i) => i.info.avgRating >= 4);
              setreList(filtered);
            }}
          >
            Top Res
          </button>
        </div>
      </div>
      <div className="card-container">
        {filteredRes.map((i) => (
          <ResCard key={i.info.id} resData={i} />
        ))}
      </div>
    </div>
  );
};

export default Body;
