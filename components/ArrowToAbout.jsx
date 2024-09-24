"use client";

import { RiArrowDownSLine } from "react-icons/ri";

const ArrowToAbout = () => {
  const handleClick = (e) => {
    e.preventDefault();

    const targetElement = document.querySelector("#about");
    const offset = 50; // 50px from top About section
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <div
      className="absolute bottom-4 left-1/2 hidden animate-bounce cursor-pointer xl:flex"
      onClick={handleClick}
    >
      <RiArrowDownSLine className="-translate-x-1/2 text-3xl text-primary" />
    </div>
  );
};

export default ArrowToAbout;
