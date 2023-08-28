import ResCard from "./Rescard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [reList, setreList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9351929&lng=77.62448069999999&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json);
    setreList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
        {filteredRes.map((i) => (<Link key={i.info.id} to={"/restaurant/"+i.info.id}>
          <ResCard  resData={i} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
