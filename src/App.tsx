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
  background-blend-mode: overlay;s
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const AnimationBox = ({
  title,
  backgroundColor,
  children,
  ...rest
}: {
  title: string;
  backgroundColor: string;
  children: ReactElement;
  animateIn: string;
  duration: number;
}) => {
  const { animateIn, duration } = rest;
  return (
    <div className={title} style={{ backgroundColor, padding: "200px 0" }}>
      <AnimationOnScroll animateIn={animateIn} duration={duration}>
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
    </div>
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
          {elements.map(({ title, component }, index) => (
            <AnimationBox
              key={title}
              backgroundColor={
                !index || index % 2 === 0
                  ? "rgba(255, 255, 255, 0.7)"
                  : "rgba(0, 0, 0, 0.7)"
              }
              title={title}
              animateIn="animate__bounceInLeft"
              duration={2}
            >
              {component}
            </AnimationBox>
          ))}
        </Suspense>
        <footer
          style={{
            position: "relative",
            width: "100%",
            height: "100px",
            bottom: 0,
            color: "white",
            textAlign: "center",
            background: "rgba(0, 0, 0, 0.7)",
          }}
        >
          Created by Bavin Edwards &copy; 2022
        </footer>
      </ContainerDiv>
    </>
  );
}

export default App;
