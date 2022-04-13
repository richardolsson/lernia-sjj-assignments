import Link from "next/link";

const Menu: React.FC = () => (
  <ul>
    <li>
      <Link href="/">Game</Link>
    </li>
    <li>
      <Link href="/highscore">Highscore</Link>
    </li>
    <li>
      <Link href="/info">Info</Link>
    </li>
  </ul>
);

export default Menu;
