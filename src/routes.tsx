import { lazy } from "react";

const Home = lazy(() => import("./components/Home"));
const Resume = lazy(() => import("./components/Resume"));
const Projects = lazy(() => import("./components/Projects"));
const SkillsContainer = lazy(() => import("./components/SkillsContainer"));
const Contacts = lazy(() => import("./components/Contacts"));

const routes = [
  {
    path: "/profile",
    element: <Home />,
  },
  {
    path: "/profile/resume",
    element: <Resume />,
  },
  {
    path: "/profile/projects",
    element: <Projects />,
  },
  {
    path: "/profile/skills",
    element: <SkillsContainer />,
  },
  {
    path: "/profile/contacts",
    element: <Contacts />,
  },
];

export default routes;
