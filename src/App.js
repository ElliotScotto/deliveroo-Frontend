import "./App.css";
// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3100/");
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
    <div>
      <span>{data.title}</span>
      <br />
      <ul>
        {data.movies.map((movie, index) => {
          return <li key={index}>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
