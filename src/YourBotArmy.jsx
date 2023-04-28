import React, { useContext } from "react";
import { ArmyContext } from "./Army";

function YourBotArmy() {
  const [armyData, setArmyData] = useContext(ArmyContext);

  return (
    <div className="bot-army">
      <p>YourBotArmy</p>
    </div>
  );
}

export default YourBotArmy;
