"use client";

import { socialIcons } from "@/constants";

const SocialIconsList = ({ containerStyles, iconStyles, onClick }) => (
  <ul className={containerStyles}>
    {socialIcons.map((icon) => (
      <li key={icon.href}>
        <a
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          <div className={iconStyles}>{icon.name}</div>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialIconsList;
