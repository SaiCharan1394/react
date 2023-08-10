import ResCard from "./Rescard";

import resList from "../utils/mockdata";


const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="card-container">
          {resList.map((i) => (
            <ResCard resData={i} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;