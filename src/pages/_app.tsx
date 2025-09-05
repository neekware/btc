import { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/theme-provider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Hide Next.js dev indicator
    const style = document.createElement("style");
    style.innerHTML = `
      #__next-build-indicator {
        display: none !important;
      }
      [data-nextjs-build-indicator] {
        display: none !important;
      }
      nextjs-portal {
        display: none !important;
      }
      #__next-devtools-indicator {
        display: none !important;
      }
      [data-nextjs-devtools-indicator] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <GoogleAnalytics />
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}
