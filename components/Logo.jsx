import Link from "next/link";
import Image from "next/image";

const Logo = ({ ...props }) => (
  <Link href="/" {...props}>
    <Image src="/logo.svg" alt="Logo" width={54} height={54} priority />
  </Link>
);

export default Logo;
