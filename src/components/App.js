import React, { useEffect, useState, useCallback } from "react";
import styled from "@emotion/styled";
import NavBar from "./NavBar";
import Resume from "./Resume";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Home from "./Home";
import UpButton from "./UpButton";
import { usePersistedState } from "../utils";
import smoothscroll from "smoothscroll-polyfill";

function App() {
  const [mobile, setMobile] = useState(false);
  const [orientation, setOrientation] = useState("landscape");
  const [route, setRoute] = usePersistedState("route", "home");

  smoothscroll.polyfill();

  const checkIfMobile = useCallback(() => {
    window.matchMedia("(max-width: 768px)").matches
      ? setMobile(true)
      : setMobile(false);
  }, []);

  const isPortrait = () => window.matchMedia("(orientation: portrait)").matches;

  const scrollToTopOfPage = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  useEffect(() => {
    return () => console.log("unloading");
  });

  useEffect(() => {
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [checkIfMobile]);

  useEffect(() => {
    checkIfMobile();
  }, [checkIfMobile]);

  useEffect(() => {
    scrollToTopOfPage();
    checkIfMobile();
  }, [route, orientation, checkIfMobile]);

  // useEffect(() => {
  //   scrollToTopOfPage();
  //   checkIfMobile();
  // }, [checkIfMobile]);

  useEffect(() => {
    isPortrait() ? setOrientation("portrait") : setOrientation("landscape");
  }, []);

  const ContainerDiv = styled.div`
    position: absolute;
    top: 100px;
    width: 100vw;
    height: auto;
  `;

  return (
    <>
      <NavBar mobile={mobile} setRoute={setRoute} route={route} />
      <UpButton scrollToTopOfPage={scrollToTopOfPage} />
      <ContainerDiv>
        {route === "home" && (
          <Home mobile={mobile} orientation={orientation} setRoute={setRoute} />
        )}
        {route === "resume" && <Resume mobile={mobile} />}
        {route === "projects" && <Projects mobile={mobile} />}
        {route === "contacts" && <Contacts mobile={mobile} />}
      </ContainerDiv>
    </>
  );
}

export default App;
