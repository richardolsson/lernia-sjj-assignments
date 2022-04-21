import Cookies from "cookies";
import Iron from "@hapi/iron";
import { GetServerSideProps, NextPage } from "next";
import { ENC_KEY } from "./api/login";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = new Cookies(context.req, context.res);
  const sessionStr = cookies.get("session");

  if (sessionStr) {
    try {
      const session = await Iron.unseal(sessionStr, ENC_KEY, Iron.defaults);
      if (session.loggedIn) {
        return {
          props: {
            username: session.username,
          },
        };
      }
    } catch (err) {
      // Incorrect encrypted string. Proceed to notFound
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
