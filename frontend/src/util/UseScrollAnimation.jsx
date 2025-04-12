import React from "react";
import { useEffect, useState, useRef } from "react";

export default function useScrollAnimation(threshold = 0.05, delay = 300) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  let timeoutId = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timeoutId.current);
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          timeoutId.current = setTimeout(() => setVisible(false), delay);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      clearTimeout(timeoutId.current);
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, delay]);

  return { ref, visible };
}
