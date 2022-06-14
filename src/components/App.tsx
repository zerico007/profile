import { ReactElement, Suspense } from "react";
import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";
import routes from "../routes";
import NavBar from "./NavBar";
import UpButton from "./UpButton";
import heroPic from "../assets/hero.jpg";

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

function App(): ReactElement {
  return (
    <>
      <ContainerDiv>
        <Background />
        <NavBar />
        <UpButton />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ element, path }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
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
          Created by Bavin Edwards &copy; 2022
        </footer>
      </ContainerDiv>
    </>
  );
}

export default App;
