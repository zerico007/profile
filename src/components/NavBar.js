import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Check } from "react-feather";
import profilePic from "../assets/profilePic.jpg";

const NavDiv = styled.div`
  position: relative;
  left: 0;
  top: 0;
  opacity: ${(props) => (props.scrolled ? "0" : "1")};
  transition: all 0.4s ease-in-out;
  width: 100%;
  height: 94px;
  padding: 20px;
  z-index: 10;
  box-sizing: border-box;
  border-bottom: none;
  background: ${(props) => (props.mobileSite ? "rgba(0, 0, 0, 0.8)" : "none")};
`;

const ImgDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  border: 2px solid white;
  padding: 5px;
  background-image: url(${profilePic});
  background-size: cover;
  background-repeat: no-repeat;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const NavButtonsDiv = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: transparent;
  float: right;
  margin-top: 0.75rem;
  margin-right: 2rem;
`;

const NavButton = styled.div`
  width: ${(props) => (props.mobileSite ? "100%" : "120px")};
  height: auto;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  font-size: ${(props) => (props.mobileSite ? "24px" : "18px")};
  color: white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #ff6495;
    transform: scale(1.2);
  }
  margin-top: ${(props) => (props.mobileSite ? "45px" : "0")};
  margin-left: ${(props) => (props.mobileSite ? "auto" : "0")};
  text-align: center;
  line-height: 1.5rem;
`;

const BurgerButton = styled.button`
  cursor: pointer;
  font-size: 20px;
  margin-top: 0.5rem;
  height: 2rem;
  width: 3rem;
  background: none;
  color: white;
  border: none;
  outline: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const NavBar = ({ mobile, setRoute, route }) => {
  const [showNav, setShowNav] = useState(false);
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const mobileDivStyles = {
    position: "fixed",
    left: "0",
    paddingLeft: "40px",
    paddingTop: "10px",
    top: scrolled ? "0px" : "94px",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    zIndex: "100",
    width: "110vw",
    transform: "translateX(-5px)",
    background: "rgba(0,0,0,0.8)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "120vh",
    transition: "top 0.4s ease-in-out",
  };

  const isDisabled = !nav && showNav;

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
      return;
    }
    setRoute("home");
    setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setNav(!nav);
    if (mobile && showNav) {
      mobileNavRef.current.classList.remove("enter");
      mobileNavRef.current.classList.add("exit");
      setTimeout(() => {
        mobileNavRef.current.classList.remove("exit");
        setShowNav(!showNav);
      }, 400);
    }
    if (mobile && !showNav) {
      setShowNav(!showNav);
    }
  };

  const mobileNavRef = useRef();

  return (
    <>
      <NavDiv mobileSite={mobile} scrolled={scrolled}>
        <ImgDiv
          onClick={() => {
            setRoute("home");
            setShowNav(false);
            setNav(false);
          }}
        />
        {!mobile && (
          <NavButtonsDiv>
            <NavButton onClick={() => setRoute("skills")}>Skills</NavButton>
            <NavButton onClick={() => setRoute("projects")}>Projects</NavButton>
            <NavButton onClick={() => setRoute("resume")}>Resume</NavButton>
            <NavButton onClick={() => setRoute("contacts")}>
              Contact Me
            </NavButton>
          </NavButtonsDiv>
        )}
        {mobile && (
          <BurgerButton
            onClick={() => !isDisabled && handleMobileNavClick()}
            style={{ float: "right", marginRight: "0" }}
          >
            {nav ? (
              <i className="fas fa-times fa-2x"></i>
            ) : (
              <i className="fas fa-bars fa-2x"></i>
            )}
          </BurgerButton>
        )}
      </NavDiv>
      {showNav && (
        <div
          ref={mobileNavRef}
          style={mobileDivStyles}
          onClick={handleMobileNavClick}
          className={showNav ? "enter" : ""}
        >
          <NavButton
            mobileSite={true}
            style={{ animation: "enterLeft 1s" }}
            onClick={() => setRoute("skills")}
          >
            Skills
          </NavButton>
          <NavButton
            mobileSite={true}
            onClick={() => setRoute("projects")}
            style={{ animation: "enterLeft 1.25s" }}
          >
            Projects
          </NavButton>
          <NavButton
            mobileSite={true}
            onClick={() => setRoute("resume")}
            style={{ animation: "enterLeft 1.5s" }}
          >
            Resume
          </NavButton>
          <NavButton
            mobileSite={true}
            onClick={() => setRoute("contacts")}
            style={{ animation: "enterLeft 1.75s" }}
          >
            Contact Me
          </NavButton>
        </div>
      )}
    </>
  );
};

export default NavBar;
