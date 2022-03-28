import React from "react";
import "../stylesheets/Person.css";

export const Person = ({ peoples = [] }) => {
  return (
    <div class="row">
      {!peoples
        ? "Loading..."
        : peoples.map((item, index) => (
            <div key={index} className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">{item.name}</h1>
                  <p>Fecha de Nacimiento: {item.birth_year}</p>
                  <p>Altura: {item.height} </p>
                  <p>Peso: {item.mass}</p>
                  <hr />
                  <a href="" className="btn btn-primary">
                    favoritos
                  </a>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Person;
