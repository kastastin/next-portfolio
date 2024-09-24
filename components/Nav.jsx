import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { navLinks } from "@/constants";

const Nav = ({ linkStyles, containerStyles, underlineStyles, onClick }) => {
  const currentPath = usePathname();

  return (
    <nav className={containerStyles}>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${linkStyles} ${link.href === currentPath && "text-primary"}`}
          onClick={onClick}
        >
          {link.href === currentPath && (
            <motion.span
              animate={{ y: 0 }}
              layoutId="underline"
              initial={{ y: "-100%" }}
              transition={{ type: "tween" }}
              className={underlineStyles}
            />
          )}

          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
