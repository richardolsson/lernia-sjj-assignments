import Cookies from "cookies";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = new Cookies(context.req, context.res);
  const loggedIn = cookies.get("loggedin");

  if (loggedIn == "yes") {
    return {
      props: {},
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const SecretPage: NextPage = () => {
  return (
    <div>
      <h1>Secret!</h1>
      <p>This is secret content</p>
    </div>
  );
};

export default SecretPage;
