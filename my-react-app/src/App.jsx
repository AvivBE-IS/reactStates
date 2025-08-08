import React, { useState } from "react";
import Hot from "../components/Hot.jsx";
import Cold from "../components/Cold.jsx";

const App = () => {
  const [currWether, changeWeather] = useState("Hot");
  const weather = () => {
    if (currWether === "Hot") changeWeather("Cold");
    if (currWether === "Cold") changeWeather("Hot");
  };

  return (
    <div>
      {currWether == "Hot" ? <Hot /> : <Cold />}
      <button onClick={weather}>button</button>
    </div>
  );
};

// const App = () => {
//   const [reservations, setReservations] = useState([
//     { day: "Monday", time: 2000, name: "Earl" },
//     { day: "Monday", time: 1845, name: "Ella" },
//     { day: "Tuesday", time: 1930, name: "Linda" },
//     { day: "Wednesday", time: 2015, name: "Anni" },
//   ]);

//   return (
//     <div>
//       <Calendar reservations={reservations} />
//       <Register reservations={reservations} />
//     </div>
//   );
// };

export default App;
