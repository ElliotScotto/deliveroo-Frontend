const Menus = ({ categories }) => {
  return (
    <div className="content">
      <div className="menu-items">
        <div className="menu-block-left">
          <div className="b">
            <h2>
              {categories.map((elem, index) => {
                return (
                  <div className="c">
                    <div className="d">
                      <div className="e">
                        <div className="f">
                          <h2 key={index}>{elem.name}</h2>
                        </div>
                        {elem.meals.map((elem) => {
                          return (
                            <>
                              <div className="g">
                                <p>{elem.description}</p>
                              </div>

                              <div className="i">
                                <p>{elem.price}</p>
                              </div>

                              <div className="j">
                                <p>{elem.popular}</p>
                              </div>
                              <div className="k">
                                <img
                                  width="130px"
                                  height="130px"
                                  src={elem.picture}
                                  alt="meal"
                                />
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </h2>
          </div>
        </div>
      </div>
      <div className="shop">coucou test du panier</div>
    </div>
  );
};
export default Menus;
