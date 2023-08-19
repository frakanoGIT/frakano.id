import React from "react";
import Image from "next/image";

import SideCard from "./SideCard";

export default function SkillsMe() {
  return (
    <SideCard title="Skills">
      <ul className="flex flex-wrap justify-around content-center h-80">
        <li className="m-2">
          <Image
            src="/logo-html5.svg"
            alt="HTML5"
            width="80"
            height="80"
          />
        </li>
        <li className="m-2">
        <Image
            src="/logo-css3.svg"
            alt="CSS3"
            width="80"
            height="80"
          />
        </li>
        <li className="m-2">
        <Image
            src="/logo-nodejs.svg"
            alt="Javascript"
            width="80"
            height="80"
          />
        </li>
        <li className="m-2">
        <Image
            src="/logo-react.svg"
            alt="React"
            width="80"
            height="80"
          />
        </li>
      </ul>
    </SideCard>
  );
}
