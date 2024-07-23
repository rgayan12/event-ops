import { Flowbite, ThemeModeScript } from "flowbite-react";
import { Inter as FontSans } from "next/font/google";
import { Suspense, type FC, type PropsWithChildren } from "react";
import "./globals.css";
import { flowbiteTheme } from "./theme";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <ThemeModeScript />
      </head> */}
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
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
