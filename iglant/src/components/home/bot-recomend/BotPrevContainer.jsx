import BotPrev from "./BotPrev";

import bots from "./bots";

export default function BotPrevContainer() {
  return (
    <div className="recommend-bots-container">
      {bots.map((bot) => (
        <BotPrev key={bot.name} bot={bot} />
      ))}
    </div>
  );
}
