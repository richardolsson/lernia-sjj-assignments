import { NextPage } from "next";
import { useContext } from "react";
import { AuthContext } from "../authContext";
import Headline from "../components/Headline";
import MainLayout from "../layouts/MainLayout";

const ProfilePage: NextPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <MainLayout>
      <Headline>Hello, {user.name}</Headline>
    </MainLayout>
  );
};

export default ProfilePage;
