import Counter from "./Counter";

const Basket = ({ data, counter, setCounter }) => {
  return (
    <>
      <div className="basket-style">
        <div
          type="submit"
          onClick={() => setCounter(0)}
          className="valid-basket"
        >
          Validez mon panier
        </div>
        <Counter counter={counter} setCounter={setCounter} />
        {data.categories.map((elem, index) => {
          return (
            <div>
              {/* {categories.meals.map((meal) => {
                return <div key={meal.id}>{elem.title}</div>;
              })} */}
            </div>
          );
          //
        })}
      </div>
    </>
  );
};

export default Basket;
