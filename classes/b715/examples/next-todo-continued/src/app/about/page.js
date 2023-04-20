export default function InfoPage() {
  return (
    <div>
      <h1>INFO</h1>
      {isSupportOpen()? <p>Call +46 701 234567</p> : null}
    </div>
  );
}

function isSupportOpen() {
  const now = new Date();
  return now.getHours() > 8 && now.getHours() < 12;
}