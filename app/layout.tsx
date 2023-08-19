import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Section from "./components/Section";

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
            <Section>
              <div className="border-b">
                <h1 className="text-8xl font-bold tracking mb-6">
                  Hi, I&apos;m <Link href="/" className="text-pr-dark">Frakano</Link>
                </h1>
                <nav className="flex flex-col justify-center text-4xl font-light">
                  <Link
                    href="/about"
                    className="flex items-center h-28 p-8 border-4 border-transparent hover:border-4 hover:border-pr-light mb-2 hover:shadow hover:shadow-pr-light"
                  >
                    About
                  </Link>
                  <Link
                    href="/skills"
                    className="flex items-center h-28 p-8 border-4 border-transparent hover:border-4 hover:border-pr-light mb-2 hover:shadow hover:shadow-pr-light"
                  >
                    Skills
                  </Link>
                  <Link
                    href="/projects"
                    className="flex items-center h-28 p-8 border-4 border-transparent hover:border-4 hover:border-pr-light mb-2 hover:shadow hover:shadow-pr-light"
                  >
                    Projects
                  </Link>
                  {/* <Link href="/contact" className="flex items-center h-28 p-8 border-4 border-transparent hover:border-4 hover:border-pr-light mb-2 hover:shadow hover:shadow-pr-light">Contact</Link> */}
                </nav>
              </div>
              {children}
            </Section>
          </Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
