import type { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/random");
  const data = await res.json();

  return {
    props: {
      randomNumber: data.random,
    },
  };
};

const Home: NextPage<{ randomNumber: number }> = ({ randomNumber }) => {
  return (
    <div>
      <h1>{randomNumber}</h1>
    </div>
  );
};

export default Home;
