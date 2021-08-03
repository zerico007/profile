import React, { useEffect } from "react";
import styled from "@emotion/styled";
import NavBar from "./NavBar";
import Resume from "./Resume";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Home from "./Home";
import { usePersistedState } from "../utils";

function App() {
  const [mobile, setMobile] = usePersistedState("mobile", false);
  const [orientation, setOrientation] = usePersistedState(
    "orientation",
    "landscape"
  );
  const [route, setRoute] = usePersistedState("route", "home");

  const checkIfMobile = () =>
    window.matchMedia("(max-width: 768px)").matches
      ? setMobile(true)
      : setMobile(false);

  const isPortrait = () => window.matchMedia("(orientation: portrait)").matches;

  useEffect(() => {
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  });

  useEffect(() => {
    checkIfMobile();
  }, [setMobile]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    checkIfMobile();
  }, [route, orientation]);

  useEffect(() => {
    isPortrait() ? setOrientation("portrait") : setOrientation("landscape");
  });

  const ContainerDiv = styled.div`
    position: absolute;
    top: 100px;
    width: 100vw;
    height: 100vh;
  `;

  return (
    <>
      <NavBar mobile={mobile} setRoute={setRoute} route={route} />
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
