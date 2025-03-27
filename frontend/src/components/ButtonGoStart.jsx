import React, { useEffect, useState } from "react";
import "../styles/ButtonGoStart.css";

const ButtonGoStart = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleGoStart = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isVisible) {
    console.log("isVisible", isVisible);
  } else {
    console.log("isVisible", isVisible);
  }

  return (
    <button onClick={handleGoStart} className={`btn-go ${isVisible ? "visible" : ""}`}>
    </button>
  );
};
export default ButtonGoStart;
