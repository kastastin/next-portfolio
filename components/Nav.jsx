import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { navLinks } from "@/constants";
import { useLanguage } from "@/lang/LanguageContext";

const Nav = ({ linkStyles, containerStyles, underlineStyles, onClick }) => {
  const pathname = usePathname();

  const { language } = useLanguage();

  return (
    <nav className={containerStyles}>
      {navLinks.map((link) => (
        <Link
          key={link.label.en}
          href={link.href}
          className={`${linkStyles} ${link.href === pathname && "text-primary"}`}
          onClick={onClick}
        >
          {link.href === pathname && (
            <motion.span
              animate={{ y: 0 }}
              layoutId="underline"
              initial={{ y: "-100%" }}
              transition={{ type: "tween" }}
              className={underlineStyles}
            />
          )}

          {link.label[language]}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
