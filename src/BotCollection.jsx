import React, { useEffect, useState } from "react";
import BotRender from "./BotRender";

function BotCollection({ data, setData }) {
  useEffect(() => {
    fetch("http://localhost:3000/bots?limit=10")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ul className="botsUl">
        <BotRender data={data} />
      </ul>
    </div>
  );
}

export default BotCollection;
