'use client';

import { CssVarsProvider } from "@mui/joy";
import { FC, ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <CssVarsProvider>
      { children }
    </CssVarsProvider>
  );
};

export default Providers;