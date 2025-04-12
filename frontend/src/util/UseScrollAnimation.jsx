import { useEffect, useState, useRef } from "react";

const useScrollAnimation = (threshold = 0.5, delay = 300) => { // ss
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
};

export default useScrollAnimation;
