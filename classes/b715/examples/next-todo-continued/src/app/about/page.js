import getFakeData from "@/getFakeData";

export default async function InfoPage() {
  console.log('InfoPage()');
  const data = await getFakeData();
  return (
    <div>
      <h1>INFO</h1>
      <p>{data}</p>
      {isSupportOpen()? <p>Call +46 701 234567</p> : null}
    </div>
  );
}

function isSupportOpen() {
  const now = new Date();
  return now.getHours() > 8 && now.getHours() < 12;
}