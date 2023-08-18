import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamer Coder Loser",
  description:
    "Welcome to Gamer Coder Loser! Explore the world of gaming, coding, and more. Join us for insightful articles, tutorials, and discussions for gamers, coders, and all those who embrace the fun of being a true enthusiast. Level up your skills with us!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open.className}>
        <div className="bg-white max-w-pr my-32 mx-auto rounded-2xl shadow-2xl">
          <Header />
          <Main>
            {children}
          </Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
