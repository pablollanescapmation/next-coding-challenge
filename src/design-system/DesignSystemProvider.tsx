import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalDesignStyles } from "./primitives";
import { theme } from "./theme";

type Props = {
  children: ReactNode;
};

export default function DesignSystemProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalDesignStyles />
      {children}
    </ThemeProvider>
  );
}
