"use client";

import Link from "next/link";

import { socialIcons } from "@/constants";

const SocialIconsList = ({ containerStyles, iconStyles, onSocialClick }) => (
  <div className={containerStyles}>
    {socialIcons.map((icon, index) => (
      <Link
        key={index}
        href={icon.href}
        target="_blank"
        onClick={onSocialClick}
      >
        <div className={iconStyles}>{icon.name}</div>
      </Link>
    ))}
  </div>
);

export default SocialIconsList;
