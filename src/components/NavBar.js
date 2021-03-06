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
  height: ${(props) => (props.mobileSite ? "2rem" : "60px")};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 6px;
  font-size: ${(props) => (props.mobileSite ? "24px" : "18px")};
  color: ${(props) => (props.selected ? "#FF6495" : "white")};
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

const NavBar = ({ mobile, setRoute, route, tablet }) => {
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
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
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
            <NavButton
              selected={route === "skills"}
              onClick={() => setRoute("skills")}
            >
              {route === "skills" && <Check size={16} />}
              Skills
            </NavButton>
            <NavButton
              selected={route === "projects"}
              onClick={() => setRoute("projects")}
            >
              {route === "projects" && <Check size={16} />}
              Projects
            </NavButton>
            <NavButton
              selected={route === "resume"}
              onClick={() => setRoute("resume")}
            >
              {route === "resume" && <Check size={16} />} Resume
            </NavButton>
            <NavButton
              selected={route === "contacts"}
              onClick={() => setRoute("contacts")}
            >
              {route === "contacts" && <Check size={16} />} Contact Me
            </NavButton>
          </NavButtonsDiv>
        )}
        {mobile && (
          <NavButton
            onClick={() => !isDisabled && handleMobileNavClick()}
            style={{ float: "right", marginRight: "0" }}
          >
            {nav ? (
              <i className="fas fa-times fa-2x"></i>
            ) : (
              <i className="fas fa-bars fa-2x"></i>
            )}
          </NavButton>
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
            selected={route === "skills"}
            onClick={() => setRoute("skills")}
          >
            {route === "skills" && <Check size={16} />}
            Skills
          </NavButton>
          <NavButton
            mobileSite={true}
            selected={route === "projects"}
            onClick={() => setRoute("projects")}
            style={{ animation: "enterLeft 1.25s" }}
          >
            {route === "projects" && <Check size={16} />}
            Projects
          </NavButton>
          <NavButton
            mobileSite={true}
            selected={route === "resume"}
            onClick={() => setRoute("resume")}
            style={{ animation: "enterLeft 1.5s" }}
          >
            {route === "resume" && <Check size={16} />} Resume
          </NavButton>
          <NavButton
            mobileSite={true}
            selected={route === "contacts"}
            onClick={() => setRoute("contacts")}
            style={{ animation: "enterLeft 1.75s" }}
          >
            {route === "contacts" && <Check size={16} />} Contact Me
          </NavButton>
        </div>
      )}
    </>
  );
};

export default NavBar;
