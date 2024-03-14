import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "My Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const currentPath = usePathname();

  return (
    <nav className="hidden items-center gap-x-8 xl:flex">
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          className="relative transition-all hover:text-primary"
        >
          {link.href === currentPath && (
            <motion.span
              animate={{ y: 0 }}
              initial={{ y: "-100%" }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className="absolute bottom-0 h-1 w-full bg-primary"
            />
          )}

          {link.label}
        </Link>
      ))}
    </nav>
  );
}
