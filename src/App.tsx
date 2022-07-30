import { ReactElement, Suspense } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "@emotion/styled";
// import { Routes, Route } from "react-router-dom";
// import routes from "./routes";
import {
  NavBar,
  UpButton,
  Home,
  Skills,
  Projects,
  Resume,
  Contacts,
} from "./components";
import heroPic from "./assets/hero.jpg";

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

const AnimationBox = ({
  title,
  children,
  ...rest
}: {
  title: string;
  children: ReactElement;
  animateIn: string;
  duration: number;
}) => {
  const { animateIn, duration } = rest;
  return (
    <AnimationOnScroll
      style={{ marginTop: 200 }}
      animateIn={animateIn}
      duration={duration}
    >
      <h1
        style={{
          fontSize: "2rem",
          width: 150,
          color: "#fff",
          margin: "0 auto",
        }}
      >
        {title}
      </h1>
      {children}
    </AnimationOnScroll>
  );
};

const elements = [
  { title: "Projects", component: <Projects /> },
  { title: "Skills", component: <Skills /> },
  { title: "Resume", component: <Resume /> },
  { title: "Contacts", component: <Contacts /> },
];

function App(): ReactElement {
  return (
    <>
      <ContainerDiv>
        <Background />
        <NavBar />
        <UpButton />
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Routes>
            {routes.map(({ element, path }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes> */}
          <Home />
          {elements.map(({ title, component }) => (
            <AnimationBox
              key={title}
              title={title}
              animateIn="animate__bounceInLeft"
              duration={1}
            >
              {component}
            </AnimationBox>
          ))}
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
