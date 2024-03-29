import "../styles/globals.css";

import type { AppProps } from "next/app";
import { StyledEngineProvider } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
