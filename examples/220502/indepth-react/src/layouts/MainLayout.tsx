import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type MainLayoutProps = PropsWithChildren<{
  bgColor?: string;
}>;

const MainLayout: React.FC<MainLayoutProps> = ({ bgColor, children }) => {
  return (
    <div>
      <Header />
      <main style={{ backgroundColor: bgColor }}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
