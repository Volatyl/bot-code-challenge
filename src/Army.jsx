import React, { createContext, useState } from "react";

const ArmyContext = createContext();

function ArmyProvider({ children }) {
  const [armyData, setArmyData] = useState([]);

  const value = [armyData, setArmyData];

  return <ArmyContext.Provider value={value}>{children}</ArmyContext.Provider>;
}

export { ArmyContext, ArmyProvider };
