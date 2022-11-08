const Restaurant = ({ data }) => {
  return (
    <div className="restaurant-infos">
      <div className="restaurant-text">
        <h1>{data.restaurant.name}</h1>
        <p>{data.restaurant.description}</p>
      </div>
      <div className="restaurant-image">
        <img
          src={data.restaurant.picture}
          alt="restaurant"
          height="147px"
          width="262px"
        />
      </div>
    </div>
  );
};
export default Restaurant;
