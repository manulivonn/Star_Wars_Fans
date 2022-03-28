import "./App.css";
import { useEffect, useState, lazy } from "react";
import Navbar from "./componentes/Navbar";
import { Person } from "./componentes/Person";

// fetch("https://swapi.dev/api/people/")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

function App() {
  const [peoples, setPeople] = useState([]);

  const initialUrl = "https://swapi.dev/api/people/";

  const StarWarsPerson = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    StarWarsPerson(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Start Wart Fans" />
      <div className="container mt-5">
        <Person peoples={peoples} />
      </div>
    </>
  );
}

export default App;
