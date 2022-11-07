const Meal = ({ categories }) => {
  return (
    <div className="menu-items">
      <div className="menu-block-left">
        <div className="title-category">
          <h2>
            {categories.map((elem, index) => {
              return (
                <div className="category">
                  <div className="menu-title">
                    <h2 key={index}>{elem.name}</h2>
                  </div>
                  {elem.meals.map((elem, index) => {
                    return (
                      <>
                        <div className="menu-description">
                          <p>{elem.description}</p>
                        </div>

                        <div className="menu-price">
                          <p>{elem.price}</p>
                        </div>
                        <div className="menu-block-right">
                          <img
                            width="130px"
                            height="130px"
                            src={elem.picture}
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              );
            })}
          </h2>
        </div>
      </div>
      {/* <div className="menu-block-right">
        <img
          border-radius="4px"
          width="130px"
          height="130px"
          src={categories[0].meals[0].picture}
        />
      </div> */}
    </div>
  );
};
export default Meal;
