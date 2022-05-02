import AuthWidget from "./AuthWidget";

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: "gray" }}>
      <h1>Site Name</h1>
      <AuthWidget />
    </header>
  );
};

export default Header;
