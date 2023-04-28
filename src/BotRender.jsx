import React from "react";

function BotRender({ data }) {
  return (
    <div>
      {data.map((bot) => {
        return (
          <li className="botsLi">
            <div key={bot.id} className="bots">
              <img src={bot.avatar_url} alt="bot" />
              <p id="name">{bot.name}</p>
              <p id="catch">{bot.catchphrase}</p>
              <p id="stats">
                <i class="fa fa-heartbeat" aria-hidden="true"></i> {bot.health}{" "}
                <i class="fa fa-bolt" aria-hidden="true"></i> {bot.armor}{" "}
                <i class="fa fa-shield" aria-hidden="true"></i> {bot.damage}
              </p>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default BotRender;
