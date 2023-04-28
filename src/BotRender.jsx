import React, { useContext } from "react";
import { ArmyContext } from "./Army";

function BotRender({ data }) {
  const [armyData, setArmyData] = useContext(ArmyContext);

  function handleClick(bot) {
    if (armyData.includes(bot.id)) {
      null;
    } else {
      setArmyData([...armyData, bot.id]);
    }
  }

  return (
    <div>
      {data.map((bot) => {
        return (
          <li className="botsLi" key={bot.id} onClick={() => handleClick(bot)}>
            <div className="bots">
              <img src={bot.avatar_url} alt="bot" />
              <p id="name">{bot.name}</p>
              <p id="catch">{bot.catchphrase}</p>
              <p id="stats">
                <i className="fa fa-heartbeat" aria-hidden="true"></i>{" "}
                {bot.health} <i className="fa fa-bolt" aria-hidden="true"></i>{" "}
                {bot.armor} <i className="fa fa-shield" aria-hidden="true"></i>{" "}
                {bot.damage}
              </p>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default BotRender;
