import getFakeData from "@/getFakeData";

export async function getServerSideProps() {
  const data = await getFakeData();
  console.log('getServerSideProps()');
  return {
    props: {
      data: data,
      supportNumber: isSupportOpen() ? '+46 704 007858' : null,
    }
  };
}

function isSupportOpen() {
  const now = new Date();
  return now.getHours() > 8 && now.getHours() < 12;
}

export default function OldInfoPage({ data, supportNumber }) {
  console.log('OldInfoPage()');
  return (
    <div>
      <h1>Old info</h1>
      <p>{data}</p>
      {supportNumber ? <p>{supportNumber}</p> : null}
    </div>
  );
}