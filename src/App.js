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
        <div className="bigcontent">
          <div className="content">
            {data.categories.map((elem, index) => {
              return (
                <>
                  <div className>
                    <div className="a">
                      <div className="b">
                        <h2 key={index}>{elem.name}</h2>
                      </div>
                      {elem.meals.map((elem) => {
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
                  </div>
                </>
              );
            })}
          </div>
          <div className="content-bis">PANIER</div>
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
        {/* <Menus categories={data.categories} /> */}
      </main>
    </>
  );
}

export default App;
