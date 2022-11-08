import "./App.css";
// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";

//import des components
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Meal from "./components/Meal";
import Basket from "./components/Basket";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  const [shop, setShop] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-deliveroo--t8zv844knhm7.code.run/"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <Header />
      <main>
        <Restaurant data={data} />
        <div className="bigcontent">
          <div className="content">
            <Meal data={data} />
          </div>
          <div className="content-bis">
            <Basket
              data={data}
              counter={counter}
              setCounter={setCounter}
              shop={shop}
              setShop={setShop}
              categories={data.categories}
              meals={data.categories.meals}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
}

export default App;
