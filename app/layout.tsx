import { cn } from "@/lib/utils";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import { Inter as FontSans } from "next/font/google";
import { Suspense, type FC, type PropsWithChildren } from "react";
import "./globals.css";
import { flowbiteTheme } from "./theme";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
        suppressHydrationWarning={true}
      >
        <Suspense>
          <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
