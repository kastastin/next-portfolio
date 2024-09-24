import Image from "next/image";

import { aboutData as data } from "@/constants";

const ToolsList = () => (
  <ul className="flex justify-center gap-x-8 xl:justify-start">
    {data.tools.map((tool) => (
      <li key={tool.alt}>
        <Image
          src={tool.imgSrc}
          alt={tool.alt}
          width={48}
          height={48}
          priority
        />
      </li>
    ))}
  </ul>
);

export default ToolsList;
