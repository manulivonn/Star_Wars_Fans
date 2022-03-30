import React, { useEffect, useState } from "react";
import Person from "../componentes/Person";

// fetch("https://swapi.dev/api/people/")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

export default function Personajes() {
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
    <div className="container mt-5">
      <Person peoples={peoples} />
    </div>
  );
}
