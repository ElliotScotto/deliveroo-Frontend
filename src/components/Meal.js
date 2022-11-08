const Meal = ({ data, index }) => {
  return (
    <>
      {data.categories.map((elem) => {
        return (
          <>
            <div className="a">
              <div className="b">
                <h2 key={index}>{elem.name}</h2>
              </div>
              {elem.meals.map((elem, index) => {
                return (
                  <div className="c">
                    <div className="e">
                      <div className="f">{elem.title}</div>
                      <div className="g">{elem.description}</div>
                      <div className="h">
                        <div className="i">{elem.price}</div>
                        <div className="j">{elem.popular}</div>
                      </div>
                    </div>
                    <div className="k">IMAGE</div>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
};
export default Meal;
