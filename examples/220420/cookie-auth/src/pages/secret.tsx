import Cookies from "cookies";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = new Cookies(context.req, context.res);
  const sessionStr = cookies.get("session");

  if (sessionStr) {
    const session = JSON.parse(sessionStr);
    if (session.loggedIn) {
      return {
        props: {
          username: session.username,
        },
      };
    }
  }

  return {
    notFound: true,
  };
};

type SecretPageProps = {
  username: string;
};

const SecretPage: NextPage<SecretPageProps> = ({ username }) => {
  return (
    <div>
      <h1>Secret!</h1>
      <h2>Hello, {username}</h2>
      <p>This is secret content</p>
    </div>
  );
};

export default SecretPage;
