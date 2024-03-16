import Image from "next/image";

export default function DevImg({ imgSrc }) {
  return (
    <div className="relative h-[462px] w-[510px] bg-hero_shape bg-no-repeat">
      <Image
        src={imgSrc}
        fill
        priority
        alt="Code writing process"
        className="translate-x-[-25px]"
      />
    </div>
  );
}
