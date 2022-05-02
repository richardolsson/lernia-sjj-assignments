import { NextPage } from "next";
import Headline from "../components/Headline";
import MainLayout from "../layouts/MainLayout";

const LoginPage: NextPage = () => {
  return (
    <MainLayout>
      <Headline>Log in</Headline>
    </MainLayout>
  );
};

export default LoginPage;
