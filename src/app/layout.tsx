import ThemeRegistry from "@/theme/ThemeRegistry";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/header";
import HeaderMobile from "@/components/layout/header-mobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>
          <Header />
          <HeaderMobile />

          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}