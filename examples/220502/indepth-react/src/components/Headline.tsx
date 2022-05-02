import { PropsWithChildren } from "react";

type HeadlineProps = PropsWithChildren<{}>;

const Headline: React.FC<HeadlineProps> = ({ children }) => {
  return <h1 style={{ color: "red", fontFamily: "Arial" }}>{children}</h1>;
};

export default Headline;
