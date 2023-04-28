import React, { useState } from "react";
import "./App.css";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <h1>Bot Battlr</h1>
      <YourBotArmy data={data}/>
      <BotCollection data={data} setData={setData} />
    </>
  );
}

export default App;
