import React, { useEffect, useState, useCallback } from "react";
import styled from "@emotion/styled";
import NavBar from "./NavBar";
import Resume from "./Resume";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Home from "./Home";
import SkillsContainer from "./SkillsContainer";
import UpButton from "./UpButton";
import { usePersistedState } from "../utils";
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
  background: rgba(0, 0, 0, 0.6);
`;

function App() {
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [orientation, setOrientation] = useState("landscape");
  const [route, setRoute] = usePersistedState("route", "home");

  smoothscroll.polyfill();

  const checkIfMobileOrTablet = useCallback(() => {
    window.matchMedia("(max-width: 768px)").matches
      ? setMobile(true)
      : setMobile(false);
    window.matchMedia("(max-width: 866px)").matches
      ? setTablet(true)
      : setTablet(false);
  }, []);

  const isPortrait = () => window.matchMedia("(orientation: portrait)").matches;

  const scrollToTopOfPage = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

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
  }, [route, orientation, checkIfMobileOrTablet]);

  useEffect(() => {
    isPortrait() ? setOrientation("portrait") : setOrientation("landscape");
  }, []);

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
        {route === "home" && (
          <Home mobile={mobile} orientation={orientation} setRoute={setRoute} />
        )}
        {route === "resume" && <Resume mobile={mobile} />}
        {route === "projects" && <Projects mobile={mobile} />}
        {route === "contacts" && <Contacts mobile={mobile} />}
        {route === "skills" && <SkillsContainer mobile={mobile} />}
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
