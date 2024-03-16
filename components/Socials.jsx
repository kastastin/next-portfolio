"use client";

import Link from "next/link";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTelegramFill,
} from "react-icons/ri";

const icons = [
  {
    href: "https://github.com/kastastin",
    name: <RiGithubFill />,
  },
  {
    href: "https://www.linkedin.com/in/kastastin/",
    name: <RiLinkedinFill />,
  },
  {
    href: "https://www.instagram.com/kastast.in/",
    name: <RiInstagramFill />,
  },
  {
    href: "https://www.facebook.com/kostya.klymovych.9/",
    name: <RiFacebookFill />,
  },
  {
    href: "https://t.me/kastastin",
    name: <RiTelegramFill />,
  },
];

export default function Socials({
  containerStyles,
  iconStyles,
  onSocialClick,
}) {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => (
        <Link
          href={icon.href}
          key={index}
          onClick={onSocialClick}
          target="_blank"
        >
          <div className={iconStyles}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
}
