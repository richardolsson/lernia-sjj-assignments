export function getServerSideProps() {
  console.log('getServerSideProps()');
  return {
    props: {
      supportNumber: isSupportOpen() ? '+46 704 007858' : null,
    }
  };
}

function isSupportOpen() {
  const now = new Date();
  return now.getHours() > 8 && now.getHours() < 12;
}

export default function OldInfoPage({ supportNumber }) {
  console.log('OldInfoPage()');
  return (
    <div>
      <h1>Old info</h1>
      {supportNumber ? <p>{supportNumber}</p> : null}
    </div>
  );
}