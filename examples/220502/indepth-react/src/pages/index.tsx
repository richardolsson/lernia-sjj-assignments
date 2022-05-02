import type { NextPage } from "next";
import Headline from "../components/Headline";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout bgColor="green">
      <Headline>Welcome</Headline>
    </MainLayout>
  );
};

export default Home;
