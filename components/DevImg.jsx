import Image from "next/image";

export default function DevImg({ containerStyles, imgSrc, imgStyles }) {
  return (
    <div className={containerStyles}>
      <Image
        src={imgSrc}
        fill
        priority
        alt="Code writing process"
        className={imgStyles}
      />
    </div>
  );
}
