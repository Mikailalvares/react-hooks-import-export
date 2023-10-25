import React from "react";
import { howManyParks } from "./parks/howManyParks";

function ColoradoStateParks() {
  const parkCount = howManyParks(); // Call the function and store the result

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <p>Number of parks: {parkCount}</p>
    </div>
  );
}

export default ColoradoStateParks;
