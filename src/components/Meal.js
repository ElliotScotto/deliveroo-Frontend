const Meal = ({ data, meals }) => {
  return (
    <div className="menu-items">
      <div className="menu-block-left">
        <div className="title-category">
          <h2>
            {data.categories.meals.map((elem, index) => {
              return <h2 key={index}>{elem}</h2>;
            })}
          </h2>
        </div>
        <div className="menu-title">{data.categories[0].meals[0].title}</div>
        <div className="menu-description">
          {data.categories[0].meals[0].description}
        </div>
        <div className="menu-price">{data.categories[0].meals[0].price}</div>
      </div>
      <div className="menu-block-right">
        <img
          border-radius="4px"
          width="130px"
          height="130px"
          src={data.categories[0].meals[0].picture}
        />
      </div>
    </div>
  );
};
export default Meal;
