import React, { useState } from "react";
import styled from "@emotion/styled";
import appleShopPic from "../assets/apple-shop.jpg";
import auctionsPic from "../assets/auctions.jpg";
import gradebookPic from "../assets/gradebook.jpg";

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
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0.3rem 0.3rem 0.3rem 0.5rem lightgrey;
  animation: enterTop 1.8s;
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

const LaunchButton = styled.button`
  position: relative;
  border: 2px solid white;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: none;
  height: 32px;
  width: 150px;
  font-weight: bold;
  transition: all ease-in-out 0.3s;
  &:hover {
    transform: scale(1.3);
    background: white;
    color: black;
  }
`;

const Projects = ({ mobile }) => {
  const [shop, setShop] = useState(false);
  const [auction, setAuction] = useState(false);
  const [gradebook, setGradebook] = useState(false);

  const imageStyle = {
    width: "70vw",
    maxWidth: "830px",
    cursor: "pointer",
    gridArea: "image",
  };

  return (
    <>
      <ProjectDiv
        onMouseEnter={() => setShop(true)}
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
      </ProjectDiv>
      <ProjectDiv
        onMouseEnter={() => setAuction(true)}
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
      </ProjectDiv>
      <ProjectDiv
        onMouseEnter={() => setGradebook(true)}
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
      </ProjectDiv>
    </>
  );
};

export default Projects;
