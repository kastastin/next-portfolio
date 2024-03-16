import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "My Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Nav({
  containerStyles,
  linkStyles,
  underlineStyles,
  onLink,
}) {
  const currentPath = usePathname();

  return (
    <nav className={containerStyles}>
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          onClick={onLink}
          className={`${linkStyles} ${link.href === currentPath && "text-primary"}`}
        >
          {link.href === currentPath && (
            <motion.span
              animate={{ y: 0 }}
              initial={{ y: "-100%" }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={underlineStyles}
            />
          )}

          {link.label}
        </Link>
      ))}
    </nav>
  );
}
