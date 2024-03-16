"use client";

import Link from "next/link";
import {
  RiGithubFill,
  RiYoutubeFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  {
    href: "/",
    name: <RiGithubFill />,
  },
  {
    href: "/",
    name: <RiYoutubeFill />,
  },
  {
    href: "/",
    name: <RiLinkedinFill />,
  },
  {
    href: "/",
    name: <RiFacebookFill />,
  },
  {
    href: "/",
    name: <RiInstagramFill />,
  },
];

export default function Socials() {
  return (
    <div className="mx-auto flex gap-x-6 xl:mx-0">
      {icons.map((icon, index) => (
        <Link href={icon.href} key={index}>
          <div className="text-[22px] text-foreground transition-all hover:text-primary">
            {icon.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
