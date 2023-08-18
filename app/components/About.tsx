import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex justify-between items-center w-full h-176">
      <div>
        <h1 className="text-8xl font-bold tracking-tight mb-16">
          Hi,
          <p className="my-8">
            I'm <span className="text-pr-dark">Frakano</span>
          </p>
          <p className="my-8">Web Developer</p>
        </h1>
        <button className="bg-pr-dark py-4 px-16 text-3xl text-white rounded-2xl">
          Contact
        </button>
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
