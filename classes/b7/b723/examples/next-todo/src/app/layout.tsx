import Link from 'next/link';
import './index.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <input/>
          <menu>
            <li>
              <Link href="/">Todo</Link>
            </li>
            <li>
              <Link href="/info">Info</Link>
            </li>
          </menu>
        </nav>
        {children}
      </body>
    </html>
  );
}
