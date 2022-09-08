import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ChevronsUp } from "react-feather";
import { useAppContext } from "../context/appContext";

const UpButton = (): ReactElement => {
  const [upButton, setUpButton] = useState(false);

  const { scrollToTopOfPage } = useAppContext();
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    navigate("/profile");
    scrollToTopOfPage();
  };

  const handleShowButtonOnScroll = () =>
    window.scrollY > 0 ? setUpButton(true) : setUpButton(false);

  useEffect(() => {
    window.addEventListener("scroll", handleShowButtonOnScroll);
    return () => window.removeEventListener("scroll", handleShowButtonOnScroll);
  }, []);

  return (
    <ChevronsUp
      onClick={handleScrollToTop}
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
