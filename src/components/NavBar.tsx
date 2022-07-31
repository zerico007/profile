import { useRef, useState, useEffect, ReactElement } from "react";
import { useNavigate, useLocation } from "react-router";
import styled from "@emotion/styled";
import { Check } from "react-feather";
import profilePic from "../assets/profilePic.jpg";
import { useAppContext } from "../context/appContext";

interface NavDivProps extends MobileProp {
  scrolled: boolean;
}

interface NavDivButtonProps extends MobileProp {
  selected?: boolean;
}

const NavDiv = styled.div<NavDivProps>`
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

const NavButton = styled.div<NavDivButtonProps>`
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

const MobileNavDiv = styled.div<NavDivProps>`
  position: fixed;
  left: 0;
  padding-left: 40px;
  padding-top: 10px;
  top: ${(props) => (props.scrolled ? "0px" : "94px")};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  z-index: 100;
  width: 110vw;
  transform: translateX(-5px);
  background: rgba(0, 0, 0, 0.8);
  background-size: cover;
  background-repeat: no-repeat;
  height: 120vh;
  transition: top 0.4s ease-in-out;
`;

const navElements = [
  { path: "/profile/projects", name: "Projects" },
  { path: "/profile/skills", name: "Skills" },
  { path: "/profile/resume", name: "Resume" },
  { path: "/profile/contacts", name: "Contacts" },
];

const NavBar = (): ReactElement => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [nav, setNav] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { mobile, scrollToElement } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const isDisabled = !nav && showNav;

  const handleScroll = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileNavRef = useRef<HTMLDivElement>(null);

  const handleMobileNavClick = () => {
    setNav(!nav);
    if (mobile && showNav) {
      if (null !== mobileNavRef.current) {
        mobileNavRef.current.classList.remove("enter");
        mobileNavRef.current.classList.add("exit");
        setTimeout(() => {
          mobileNavRef.current && mobileNavRef.current.classList.remove("exit");
          setShowNav(!showNav);
        }, 400);
      }
    }
    if (mobile && !showNav) {
      setShowNav(!showNav);
    }
  };

  return (
    <>
      <NavDiv mobileSite={mobile} scrolled={scrolled}>
        <ImgDiv
          onClick={() => {
            navigate("/profile");
            setShowNav(false);
            setNav(false);
          }}
        />
        {!mobile && (
          <NavButtonsDiv>
            {navElements.map(({ path, name }) => (
              <NavButton
                key={name}
                selected={currentPath === path}
                onClick={() => {
                  navigate(path);
                  scrollToElement(name);
                }}
              >
                {currentPath === path && <Check size={16} />}
                {name}
              </NavButton>
            ))}
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
        <MobileNavDiv
          ref={mobileNavRef}
          scrolled={scrolled}
          onClick={handleMobileNavClick}
          className={showNav ? "enter" : ""}
        >
          {navElements.map(({ path, name }) => (
            <NavButton
              key={name}
              mobileSite={true}
              selected={currentPath === path}
              style={{ animation: "enterLeft 1s" }}
              onClick={() => {
                navigate(path);
                scrollToElement(name);
              }}
            >
              {currentPath === path && <Check size={16} />}
              {name}
            </NavButton>
          ))}
        </MobileNavDiv>
      )}
    </>
  );
};

export default NavBar;
