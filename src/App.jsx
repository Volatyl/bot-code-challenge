import React, { useState } from "react";
import "./App.css";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <p>VITE</p>
      <YourBotArmy />
      <BotCollection data={data} setData={setData} />
    </>
  );
}

export default App;
