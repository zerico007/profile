import { ReactElement, Suspense, useEffect } from "react";
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
import { observe } from "./utils";

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
}: {
  title: string;
  children: ReactElement;
}) => {
  return (
    <div className={`${title} hidden`} style={{ padding: "50px 0" }}>
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
    </div>
  );
};

const elements = [
  {
    title: "Projects",
    component: <Projects />,
  },
  {
    title: "Skills",
    component: <Skills />,
  },
  {
    title: "Resume",
    component: <Resume />,
  },
  {
    title: "Contacts",
    component: <Contacts />,
  },
];

function App(): ReactElement {
  useEffect(() => {
    const hiddenSections = document.querySelectorAll(
      ".hidden"
    ) as NodeListOf<HTMLElement>;
    hiddenSections.forEach((section) => {
      observe(section);
    });
  }, []);
  return (
    <>
      <ContainerDiv>
        <NavBar />
        <UpButton />
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
          {elements.map(({ title, component }) => (
            <AnimationBox key={title} title={title}>
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
          Created by Bavin Edwards &copy; {new Date().getFullYear()}
        </footer>
      </ContainerDiv>
    </>
  );
}

export default App;
