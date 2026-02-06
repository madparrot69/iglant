export default function BotPrev({ bot }) {
  return (
    <div className="bot-prev">
      <img src={bot.image} alt={bot.name} />
      <h3 className="bot-name">{bot.name}</h3>
      <p className="bot-description">{bot.description}</p>
    </div>
  );
}
