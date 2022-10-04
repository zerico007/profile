import { ReactElement, Suspense } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "@emotion/styled";

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
  background: #0e182a;
`;

const AnimationBox = ({
  title,
  children,
  background,
  ...rest
}: {
  title: string;
  children: ReactElement;
  background?: string;
  animateIn: string;
  duration: number;
}) => {
  const { animateIn, duration } = rest;
  return (
    <div className={title} style={{ padding: "50px 0", background }}>
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
    background: "#5B676D",
  },
  {
    title: "Skills",
    component: <Skills />,
    animation: "animate__fadeInTopLeft",
    background: "#848689",
  },
  {
    title: "Resume",
    component: <Resume />,
    animation: "animate__rotateInUpRight",
    background: "#2A3439",
  },
  {
    title: "Contacts",
    component: <Contacts />,
    animation: "animate__lightSpeedInLeft",
    background: "#1e212b",
  },
];

function App(): ReactElement {
  return (
    <>
      <ContainerDiv>
        <NavBar />
        <UpButton />
        <Suspense fallback={<div>Loading...</div>}>
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
