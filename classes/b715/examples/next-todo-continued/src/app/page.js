import App from "@/components/App";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about">More info</Link>
      <App />
    </div>
  );
}
