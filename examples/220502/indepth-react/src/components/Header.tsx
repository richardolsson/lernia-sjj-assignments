import Link from "next/link";
import AuthWidget from "./AuthWidget";

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: "gray" }}>
      <h1>Site Name</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
      <AuthWidget />
    </header>
  );
};

export default Header;
