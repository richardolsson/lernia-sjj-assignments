import { useContext } from "react";
import { AuthContext } from "../authContext";

const AuthWidget: React.FC = () => {
  const user = useContext(AuthContext);

  return (
    <div>
      {user.authenticated && <span>{user.name}</span>}
      {!user.authenticated && <a href="/login">Log in</a>}
    </div>
  );
};

export default AuthWidget;
