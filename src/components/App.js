import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "@emotion/styled";
import NavBar from "./NavBar";
import Resume from "./Resume";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Home from "./Home";
import SkillsContainer from "./SkillsContainer";
import UpButton from "./UpButton";
import heroPic from "../assets/hero.jpg";
import smoothscroll from "smoothscroll-polyfill";

const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  box-sixing: border-box;
  background-image: url(${heroPic});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: overlay;
  padding-bottom: 3rem;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const HeaderDiv = styled.div`
  position: relative;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
  height: 4rem;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 0.5rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

function Header({ head }) {
  return <HeaderDiv>{head}</HeaderDiv>;
}

function App() {
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [orientation, setOrientation] = useState("landscape");
  const [route, setRoute] = useState("home");

  smoothscroll.polyfill();

  const scrollToElement = (element) => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleRouteScrolls = useCallback(() => {
    switch (route) {
      case "home":
        window.scrollY > 0 && scrollToTopOfPage();
        break;
      case "skills":
        scrollToElement(skills.current);
        break;
      case "projects":
        scrollToElement(projects.current);
        break;
      case "resume":
        scrollToElement(resume.current);
        break;
      case "contacts":
        scrollToElement(contacts.current);
        break;
      default:
        break;
    }
  }, [route]);

  const skills = useRef(null);
  const projects = useRef(null);
  const resume = useRef(null);
  const contacts = useRef(null);

  const checkIfMobileOrTablet = useCallback(() => {
    window.matchMedia("(max-width: 768px)").matches
      ? setMobile(true)
      : setMobile(false);
    window.matchMedia("(max-width: 866px)").matches
      ? setTablet(true)
      : setTablet(false);
  }, []);

  const isPortrait = () => window.matchMedia("(orientation: portrait)").matches;

  const scrollToTopOfPage = () => {
    setRoute("home");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("resize", checkIfMobileOrTablet);
    return () => window.removeEventListener("resize", checkIfMobileOrTablet);
  }, [checkIfMobileOrTablet]);

  useEffect(() => {
    checkIfMobileOrTablet();
  }, [checkIfMobileOrTablet]);

  useEffect(() => {
    scrollToTopOfPage();
    checkIfMobileOrTablet();
  }, [orientation, checkIfMobileOrTablet]);

  useEffect(() => {
    isPortrait() ? setOrientation("portrait") : setOrientation("landscape");
  }, []);

  useEffect(() => {
    handleRouteScrolls();
  }, [route, handleRouteScrolls]);

  return (
    <>
      <ContainerDiv>
        <Background />
        <NavBar
          mobile={mobile}
          setRoute={setRoute}
          route={route}
          tablet={tablet}
        />
        <UpButton scrollToTopOfPage={scrollToTopOfPage} />
        <Home mobile={mobile} orientation={orientation} setRoute={setRoute} />
        <Wrapper ref={skills}>
          <Header head={"Skills"} />
          <SkillsContainer mobile={mobile} />
        </Wrapper>
        <Wrapper ref={projects}>
          <Header head={"Projects"} />
          <Projects mobile={mobile} />
        </Wrapper>
        <Wrapper ref={resume}>
          <Header head={"Resume"} />
          <Resume mobile={mobile} />
        </Wrapper>
        <Wrapper ref={contacts}>
          <Header head={"Contacts"} />
          <Contacts mobile={mobile} />
        </Wrapper>
        <footer
          style={{
            position: "relative",
            width: "12.5rem",
            bottom: "1rem",
            margin: "3rem auto",
            color: "white",
            textAlign: "center",
          }}
        >
          Created by Bavin Edwards &copy; 2021
        </footer>
      </ContainerDiv>
    </>
  );
}

export default App;
