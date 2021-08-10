import React, { useState } from "react";
import styled from "@emotion/styled";
import appleShopPic from "../assets/apple-shop.jpg";
import auctionsPic from "../assets/auctions.jpg";
import gradebookPic from "../assets/gradebook.jpg";
import sunnySidePic from "../assets/sunnyside.jpg";

const ProjectDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "image"
    "desc";
  grid-template-rows: 1fr 1fr;
  margin: 50px auto 0 auto;
  width: 70vw;
  max-width: 830px;
  height: ${(props) => (props.mobileSite ? "auto" : "600px")};
  border: none;
  padding: 0.7rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  animation: fadeIn 0.6s;
`;

const LaunchCover = styled.div`
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LaunchButton = styled.button`
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

const Projects = ({ mobile }) => {
  const [shop, setShop] = useState(false);
  const [auction, setAuction] = useState(false);
  const [gradebook, setGradebook] = useState(false);
  const [sunnySide, setSunnySide] = useState(false);

  const imageStyle = {
    width: "70vw",
    maxWidth: "830px",
    cursor: "pointer",
    gridArea: "image",
    borderRadius: "0.5rem",
  };

  return (
    <ContainerDiv>
      <ProjectDiv
        onMouseEnter={() => !mobile && setSunnySide(true)}
        onMouseLeave={() => setSunnySide(false)}
        mobileSite={mobile}
      >
        <img src={sunnySidePic} alt="sunnyside-pic" style={imageStyle} />

        <Description>
          Static Landing page built with HTML, CSS and a tiny bit of JavaScript
        </Description>
        <LaunchCover launch={sunnySide}>
          <a
            href="https://zerico007.github.io/sunnyside/"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchButton>Visit</LaunchButton>
          </a>
        </LaunchCover>
        {mobile && (
          <a
            href="https://zerico007.github.io/sunnyside/"
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
      <ProjectDiv
        onMouseEnter={() => !mobile && setShop(true)}
        onMouseLeave={() => setShop(false)}
        mobileSite={mobile}
      >
        <img src={appleShopPic} alt="apple-shop-pic" style={imageStyle} />

        <Description>
          Web app for shopping apple products. Frontend built with React.
          Backend built with Node (includes REST APIs, jwt authentication,
          refresh tokens) and MongoDB
        </Description>
        <LaunchCover launch={shop}>
          <a
            href="https://zerico007.github.io/apple_shop/"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchButton>Visit</LaunchButton>
          </a>
        </LaunchCover>
        {mobile && (
          <a
            href="https://zerico007.github.io/apple_shop/"
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
      <ProjectDiv
        onMouseEnter={() => !mobile && setAuction(true)}
        onMouseLeave={() => setAuction(false)}
        mobileSite={mobile}
      >
        <img
          src={auctionsPic}
          alt="auctions-pic"
          loading="lazy"
          style={imageStyle}
        />

        <Description>
          Web app similar to ebay for posting items for sale and bidding. Built
          with Python using Django. SQL DB used.
        </Description>
        <LaunchCover launch={auction}>
          <a
            href="http://zerico007.pythonanywhere.com/"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchButton>Visit</LaunchButton>
          </a>
        </LaunchCover>
        {mobile && (
          <a
            href="http://zerico007.pythonanywhere.com/"
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
      <ProjectDiv
        onMouseEnter={() => !mobile && setGradebook(true)}
        onMouseLeave={() => setGradebook(false)}
        mobileSite={mobile}
        style={{ marginBottom: "100px" }}
      >
        <img
          src={gradebookPic}
          alt="gradebook-pic"
          loading="lazy"
          style={imageStyle}
        />

        <Description>
          Web app for recording student grades. Built with Python using Flask.
          SQL DB used.
        </Description>
        <LaunchCover launch={gradebook}>
          <a
            href="http://kabash.pythonanywhere.com/"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchButton>Visit</LaunchButton>
          </a>
        </LaunchCover>
        {mobile && (
          <a
            href="http://kabash.pythonanywhere.com/"
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
    </ContainerDiv>
  );
};

export default Projects;
