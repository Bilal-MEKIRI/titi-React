import React from "react";
import { useState, useEffect } from "react";
import "./scrollToTopBtn.scss";

export default function ScrollToTop() {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopBtn && (
        <button id="scroll-to-top-btn" onClick={scrollUp}>
          ^
        </button>
      )}
    </>
  );
}
