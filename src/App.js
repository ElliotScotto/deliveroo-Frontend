import "./App.css";
// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";

//import des components
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Menus from "./components/Menus";
import Meal from "./components/Meal";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
        <div className="cyan">
          <div className="a">
            <div className="b">
              <h2>TITRE CATEGORIE</h2>
            </div>
            <div className="c">
              <Meal />
              <Meal />
            </div>
          </div>
          <div className="shop">PANIER</div>
        </div>

        <Menus categories={data.categories} />
      </main>
    </>
  );
}

export default App;
