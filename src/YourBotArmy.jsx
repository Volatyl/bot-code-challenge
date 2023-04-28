import React, { useContext, useEffect, useState } from "react";
import { ArmyContext } from "./Army";

function YourBotArmy({ data }) {
  const [armyData, setArmyData] = useContext(ArmyContext);
  const [armyBots, setArmyBots] = useState([]);
  const [remover, setRemover] = useState(false);

  console.log(armyData);

  useEffect(() => {
    const newData = data.filter((item) => armyData.includes(item.id));
    setArmyBots(newData);
  }, [armyData]);

  function handleClickBots(bot) {
    const newIds = armyData.filter((item) => item !== bot.id);
    setArmyData(newIds);
  }

  return (
    <div className="bot-army">
      <ul>
        {armyBots.map((bot) => {
          return (
            <li
              className="botsLi"
              key={bot.id}
              onClick={() => handleClickBots(bot)}
            >
              <div className="bots">
                <img src={bot.avatar_url} alt="bot" />
                <p id="name">{bot.name}</p>
                <p id="catch">{bot.catchphrase}</p>
                <p id="stats">
                  <i className="fa fa-heartbeat" aria-hidden="true"></i>{" "}
                  {bot.health} <i className="fa fa-bolt" aria-hidden="true"></i>{" "}
                  {bot.armor}{" "}
                  <i className="fa fa-shield" aria-hidden="true"></i>{" "}
                  {bot.damage}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default YourBotArmy;
