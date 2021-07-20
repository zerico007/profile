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
  const [route, setRoute] = usePersistedState("route", "home");

  const checkIfMobile = () =>
    window.innerWidth < 768 ? setMobile(true) : setMobile(false);

  useEffect(() => {
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  });

  useEffect(() => {
    window.innerWidth < 900 ? setMobile(true) : setMobile(false);
  }, [setMobile]);

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
        {route === "home" && <Home mobile={mobile} setRoute={setRoute} />}
        {route === "resume" && <Resume mobile={mobile} />}
        {route === "projects" && <Projects mobile={mobile} />}
        {route === "contacts" && <Contacts mobile={mobile} />}
      </ContainerDiv>
    </>
  );
}

export default App;
