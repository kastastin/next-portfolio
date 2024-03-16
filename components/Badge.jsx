"use client";

import CountUp from "react-countup";

export default function Badge({ icon, endCountNum, endCountText, badgeText, containerStyles }) {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>

      <div className="flex items-center gap-x-2">
        <div className="text-4xl font-bold leading-none text-primary">
          <CountUp start={0} end={endCountNum} delay={1} duration={3} />
          {endCountText}
        </div>

        <div className="max-w-[70px] text-[15px] font-medium leading-none text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
}
