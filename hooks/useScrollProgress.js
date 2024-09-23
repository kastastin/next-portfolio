import { throttle } from "lodash";
import { useEffect, useState } from "react";

export const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentScroll / scrollHeight).toFixed(2) * 100);
      }
    };

    const throttledScroll = throttle(updateScrollCompletion, 300);

    window.addEventListener("scroll", throttledScroll);

    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return completion;
};
