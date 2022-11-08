const Counter = ({ data, counter, setCounter }) => {
  return (
    <>
      <div className="count-meal">
        <div className="minus" onClick={() => setCounter(counter - 1)}>
          -
        </div>
        <div className="resultbasket">{counter}</div>
        <div className="plus" onClick={() => setCounter(counter + 1)}>
          +
        </div>
      </div>
    </>
  );
};

export default Counter;
