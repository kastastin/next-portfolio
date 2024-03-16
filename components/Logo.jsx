import Link from "next/link";
import Image from "next/image";

export default function Logo({...props}) {
  return (
    <Link href="/" {...props}>
      <Image src="/logo.svg" width={54} height={54} alt="Logo" priority />
    </Link>
  );
}
