import React from "react";
import Image from "next/image";

export default function IsMe() {
  return (
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
  );
}
