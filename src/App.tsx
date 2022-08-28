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

const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  box-sixing: border-box;
  background: #1e212b;
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
    <div className={title} style={{ padding: "200px 0" }}>
      <AnimationOnScroll animateIn={animateIn} duration={duration}>
        <h1
          style={{
            fontSize: "2rem",
            width: 150,
            color: "#fff",
            margin: "0 auto",
            paddingLeft: 40,
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
  {
    title: "Projects",
    component: <Projects />,
    animation: "animate__bounceInLeft",
  },
  {
    title: "Skills",
    component: <Skills />,
    animation: "animate__fadeInTopLeft",
  },
  {
    title: "Resume",
    component: <Resume />,
    animation: "animate__rotateInUpRight",
  },
  {
    title: "Contacts",
    component: <Contacts />,
    animation: "animate__lightSpeedInLeft",
  },
];

function App(): ReactElement {
  return (
    <>
      <ContainerDiv>
        <NavBar />
        <UpButton />
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Routes>
            {routes.map(({ element, path }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes> */}
          <Home />
          {elements.map(({ title, component, animation }) => (
            <AnimationBox
              key={title}
              title={title}
              animateIn={animation}
              duration={1}
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
          }}
        >
          Created by Bavin Edwards &copy; 2022
        </footer>
      </ContainerDiv>
    </>
  );
}

export default App;
