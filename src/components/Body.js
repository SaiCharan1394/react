import ResCard from "./Rescard";

import resList from "../utils/mockdata";

import { useState } from "";

const Body = () => {
  const [reList, setreList] = useState(resList);
  console.log(reList);
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
