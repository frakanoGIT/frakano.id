import React from "react";
import Image from "next/image";
import Link
 from "next/link";
export default function About() {
  return (
    <section className="flex justify-between items-center w-full h-176">
      <div className="ml-24 border-b">
        <h1 className="text-8xl font-bold tracking-tight mb-12">
          Hi, I&apos;m <span className="text-pr-dark">Franky</span>
        </h1>
        <nav className="flex flex-col justify-center text-4xl">
          <Link href="/skills" className="flex items-center h-28 p-8 border-4 border-transparent hover:border-4 hover:border-pr-light mb-2 hover:shadow hover:shadow-pr-light">Skills</Link>
          <Link href="/projects" className="flex items-center h-28 p-8 border-4 border-transparent hover:border-4 hover:border-pr-light mb-2 hover:shadow hover:shadow-pr-light">Projects</Link>
          {/* <Link href="/contact" className="flex items-center h-28 p-8 border-4 border-transparent hover:border-4 hover:border-pr-light mb-2 hover:shadow hover:shadow-pr-light">Contact</Link> */}
        </nav>
      </div>
      <aside className="self-end">
        <figure className="">
          <Image
            src="/logo-5.png"
            alt="This is me Frakano"
            width="384"
            height="384"
            className=""
          />
        </figure>
      </aside>
    </section>
  );
}
