const ResCard = (resData) => {
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      resData?.resData.info;
    return (
      <div className="rescard">
        <div>
          <img
            className="card-image"
            src={
               +
              cloudinaryImageId
            }
            alt="Image of card"
          />
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <p>{cuisines.join(", ")}</p>
          <p>{avgRating}</p>
          <p>{costForTwo}</p>
          <p>{resData.resData.info.sla.deliveryTime} Min</p>
        </div>
      </div>
    );
  };


  export default ResCard;