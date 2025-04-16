import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </ThemeProvider>
  );
}
