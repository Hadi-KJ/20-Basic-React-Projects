import React, { useState } from "react";
import List from "./List";

function MyCoponent4() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handlAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...cars, newCar]);

    //reset the inputs
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handlRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }
  function handlYearChange(event) {
    setCarYear(event.target.value);
  }
  function handlMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handlModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handlRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <input type="number" value={carYear} onChange={handlYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handlMakeChange}
        placeholder="Enter Car Make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handlModelChange}
        placeholder="Enter Car Model"
      />
      <br />
      <button onClick={handlAddCar}>Add Car</button>
    </div>
  );
}

export default MyCoponent4;
