import "./App.css";
// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./assets/images/logo-teal.svg";
//import des components
import Meal from "./components/Meal";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState("");

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
      <header>
        <div className="logostyle">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <main>
        <div className="restaurant-infos">
          <div className="restaurant-text">
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <div className="restaurant-image">
            <img
              src={data.restaurant.picture}
              alt="header-image"
              height="147px"
              width="262px"
            />
          </div>
        </div>
        {/*  */}
        <Meal categories={data.categories} />
        {/*  */}
      </main>
    </>
  );
}

export default App;
