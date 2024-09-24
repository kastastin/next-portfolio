import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc, imgStyles }) => (
  <div className={containerStyles}>
    <Image
      src={imgSrc}
      alt="Code writing process"
      fill
      priority
      className={imgStyles}
    />
  </div>
);

export default DevImg;
