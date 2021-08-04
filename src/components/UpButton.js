import React, { useEffect, useState } from "react";
import { ChevronsUp } from "react-feather";

const UpButton = ({ scrollToTopOfPage }) => {
  const [upButton, setUpButton] = useState(false);

  const handleShowButtonOnScroll = () =>
    window.scrollY > 0 ? setUpButton(true) : setUpButton(false);

  useEffect(() => {
    window.addEventListener("scroll", handleShowButtonOnScroll);
    return () => window.removeEventListener("scroll", handleShowButtonOnScroll);
  }, []);

  return (
    <ChevronsUp
      onClick={scrollToTopOfPage}
      className="scroll-up"
      style={{
        cursor: "pointer",
        opacity: upButton ? "1" : "0",
        position: "fixed",
        left: "1rem",
        bottom: "5rem",
        color: "white",
        zIndex: "5",
      }}
    />
  );
};

export default UpButton;
