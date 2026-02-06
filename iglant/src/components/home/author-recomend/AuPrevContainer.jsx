import AuPrev from "./AuPrev";
import auths from "./auth";

export default function AuPrevContainer() {
  return (
    <div className="recommend-bots-container">
      {auths.map((auth) => (
        <AuPrev key={auth.name} auth={auth} />
      ))}
    </div>
  );
}
