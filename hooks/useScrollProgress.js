import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    function updateScrollCompletion() {
      const currentScroll = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentScroll / scrollHeight).toFixed(2) * 100);
      }
    }

    window.addEventListener("scroll", updateScrollCompletion);

    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
}
