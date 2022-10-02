import { ReactElement, useMemo, useState } from "react";
import styled from "@emotion/styled";
import commentsPic from "../assets/commentsPic.jpg";
import foodiePic from "../assets/foodiePic.jpg";
import appleShopPic from "../assets/apple-shop.jpg";
import auctionsPic from "../assets/auctions.jpg";
import gradebookPic from "../assets/gradebook.jpg";
import sunnySidePic from "../assets/sunnyside.jpg";
import { useAppContext } from "../context/appContext";

interface LaunchCoverProps {
  launch: boolean;
}

const ProjectDiv = styled.div<MobileProp>`
  position: relative;
  display: grid;
  grid-template-areas:
    "image"
    "desc";
  grid-template-rows: 2fr 1fr;
  width: 33%;
  main-width: 300px;
  height: 500px;
  border: none;
  padding: 0.7rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  animation: fadeIn 0.6s;
  margin: 2rem;

  @media (max-width: 769px) {
    width: 90%;
    height: 700px;
  }
`;

const LaunchCover = styled.div<LaunchCoverProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.launch ? "flex" : "none")};
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 6px;
`;

const Description = styled.p`
  align-self: center;
  text-align: center;
  font-weight: bold;
  line-height: 1.5rem;
  grid-area: desc;
`;

const ContainerDiv = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const LaunchButton = styled.button<MobileProp>`
  position: relative;
  border: 2px solid white;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: none;
  height: 2rem;
  width: 10rem;
  font-weight: bold;
  transition: all ease-in-out 0.3s;
  &:hover {
    transform: scale(1.3);
    background: white;
    color: ${(props) => (props.mobileSite ? "white" : "black")};
  }
`;

interface ProjectInfo {
  setter: (value: boolean) => void;
  getter: boolean;
  image: string;
  url: string;
  description: string;
  alt: string;
}

const imageStyle = {
  width: "100%",
  cursor: "pointer",
  gridArea: "image",
  borderRadius: "0.5rem",
};

const Projects = (): ReactElement => {
  const [comments, setComments] = useState(false);
  const [foodie, setFoodie] = useState(false);
  const [shop, setShop] = useState(false);
  const [auction, setAuction] = useState(false);
  const [gradebook, setGradebook] = useState(false);
  const [sunnySide, setSunnySide] = useState(false);

  const { mobile } = useAppContext();

  const projects = useMemo(
    (): ProjectInfo[] => [
      {
        setter: setComments,
        getter: comments,
        image: commentsPic,
        alt: "comments app",
        url: "https://zerico007.github.io/comments-section",
        description: `A React app written in TypeScript that allows a user to make new comments, reply to a comment,
       edit a comment, and delete a comment. The app utilizes the redux toolkit to manage state.`,
      },
      {
        setter: setFoodie,
        getter: foodie,
        image: foodiePic,
        alt: "foodie app",
        url: "https://zerico007.github.io/food-app/",
        description: `A React app written in TypeScript that allows users to interact 
      with the spoonacular recipe search API`,
      },
      {
        setter: setShop,
        getter: shop,
        image: appleShopPic,
        alt: "apple shop pic",
        url: "https://zerico007.github.io/apple_shop/",
        description: `Web app for shopping apple products. Frontend built with React.
      Backend built with Node (includes REST APIs, jwt authentication,
      refresh tokens) and MongoDB`,
      },
      {
        setter: setSunnySide,
        getter: sunnySide,
        image: sunnySidePic,
        alt: "sunnyside pic",
        url: "https://zerico007.github.io/sunnyside/",
        description: `Static Landing page built with HTML, CSS and a tiny bit of JavaScript`,
      },
      {
        setter: setAuction,
        getter: auction,
        image: auctionsPic,
        url: "http://zerico007.pythonanywhere.com/",
        description: `Web app similar to ebay for posting items for sale and bidding. Built
      with Python using Django. SQL DB used.`,
        alt: "auctions pic",
      },
      {
        setter: setGradebook,
        getter: gradebook,
        image: gradebookPic,
        url: "http://kabash.pythonanywhere.com/",
        description: `Web app for managing grades. Built with Python using Flask and SQL.`,
        alt: "gradebook pic",
      },
    ],
    [comments, foodie, shop, auction, gradebook, sunnySide]
  );

  return (
    <ContainerDiv>
      {projects.map((project) => {
        const { setter, getter, image, url, description, alt } = project;
        return (
          <ProjectDiv
            onMouseEnter={() => !mobile && setter(true)}
            onMouseLeave={() => setter(false)}
            mobileSite={mobile}
            key={url}
          >
            <img src={image} alt={alt} style={imageStyle} loading="lazy" />

            <Description>{description}</Description>
            <LaunchCover launch={getter}>
              <a href={url} target="_blank" rel="noreferrer">
                <LaunchButton>Visit</LaunchButton>
              </a>
            </LaunchCover>
            {mobile && (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                style={{ zIndex: "5" }}
              >
                <LaunchButton
                  mobileSite={mobile}
                  style={{ background: "black", margin: "0 auto" }}
                >
                  Visit
                </LaunchButton>
              </a>
            )}
          </ProjectDiv>
        );
      })}
    </ContainerDiv>
  );
};

export default Projects;
