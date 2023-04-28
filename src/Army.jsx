import React, { createContext, useState } from "react";

const ArmyContext = createContext();

function ArmyProvider({ children }) {
  const [armyData, setArmyData] = useState(["cow"]);

  const value = [armyData, setArmyData];

  return <ArmyContext.Provider value={value}>{children}</ArmyContext.Provider>;
}

export { ArmyContext, ArmyProvider };
