import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className="flex justify-end h-32 border-t border-t-black">
        <nav className="flex items-center mr-24">
          <a href="https://linkedin.com" className="mx-4 last:mr-0 group">
            <figure className="flex items-center">
              <Image
                src="/logo-linkedin.svg"
                alt="Linkedin site"
                width="32"
                height="32"
                className="mr-1"
              />
              <figcaption className="text-3xl text-gray-500 group-hover:text-black group-hover:border-b-2 group-hover:border-b-black">
                Linkedin
              </figcaption>
            </figure>
          </a>
          <a href="https://github.com" className="mx-4 last:mr-0 group">
            <figure className="flex items-center">
              <Image
                src="/logo-github.svg"
                alt="Linkedin site"
                width="32"
                height="32"
                className="mr-1"
              />
              <figcaption className="text-3xl text-gray-500 group-hover:text-black group-hover:border-b-2 group-hover:border-b-black">
                Github
              </figcaption>
            </figure>
          </a>
        </nav>
      </div>
    </footer>
  );
}
