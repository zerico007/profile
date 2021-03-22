import React, { useState } from "react";
import styled from "@emotion/styled";
import { Check } from "react-feather";
import profilePic from "../assets/profilePic.jpg";

const NavDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 64px;
  padding: 20px;
  background: #361999;
  margin-bottom: 3rem;
  z-index: 10;
`;

const ImgDiv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  border: 2px solid #78fff1;
  padding: 5px;
  overflow: hidden;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const NavButtonsDiv = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: none;
  float: right;
  margin-right: 7rem;
`;

const NavButton = styled.div`
  width: ${(props) => (props.mobileSite ? "100%" : "120px")};
  height: ${(props) => (props.mobileSite ? "2rem" : "60px")};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #361999;
  border: none;
  border-radius: 6px;
  font-size: ${(props) => (props.mobileSite ? "24px" : "18px")};
  color: ${(props) => (props.selected ? "#FF6495" : "#78FFF1")};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #ff6495;
    transform: scale(1.2);
  }
  margin-right: ${(props) => (props.mobileSite ? "0" : "40px")};
  margin-top: ${(props) => (props.mobileSite ? "45px" : "10px")};
  margin-left: ${(props) => (props.mobileSite ? "auto" : "0")};
  text-align: center;
  line-height: 1.5rem;
`;

const MobileNavButtonsDiv = styled.div`
  position: fixed;
  left: 0;
  padding-left: 40px;
  padding-top: 10px;
  top: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  z-index: 100;
  width: 105vw;
  background-color: #361999;
  height: 100vh;
`;

const NavBar = ({ mobile, setRoute, route }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavDiv>
      <ImgDiv
        onClick={() => {
          setRoute("home");
          setShowNav(false);
        }}
      >
        <img
          src={profilePic}
          alt="profile-pic"
          style={{
            objectFit: "contain",
            width: "100px",
            transform: "translateY(30px)",
          }}
        />
      </ImgDiv>
      {!mobile && (
        <NavButtonsDiv>
          <NavButton
            selected={route === "projects"}
            onClick={() => setRoute("projects")}
          >
            {route === "projects" && <Check size={16} />}
            Projects
          </NavButton>
          <NavButton
            selected={route === "resume"}
            onClick={() => setRoute("resume")}
          >
            {route === "resume" && <Check size={16} />} Resume
          </NavButton>
          <NavButton
            selected={route === "contacts"}
            onClick={() => setRoute("contacts")}
          >
            {route === "contacts" && <Check size={16} />} Contact Me
          </NavButton>
        </NavButtonsDiv>
      )}
      {mobile && (
        <NavButton
          onClick={() => setShowNav(!showNav)}
          style={{ float: "right" }}
        >
          {showNav ? (
            <i className="fas fa-times fa-2x"></i>
          ) : (
            <i className="fas fa-bars fa-2x"></i>
          )}
        </NavButton>
      )}
      {showNav && (
        <MobileNavButtonsDiv onClick={() => mobile && setShowNav(!showNav)}>
          <NavButton
            mobileSite={true}
            selected={route === "projects"}
            onClick={() => setRoute("projects")}
          >
            {route === "projects" && <Check size={16} />}
            Projects
          </NavButton>
          <NavButton
            mobileSite={true}
            selected={route === "resume"}
            onClick={() => setRoute("resume")}
          >
            {route === "resume" && <Check size={16} />} Resume
          </NavButton>
          <NavButton
            mobileSite={true}
            selected={route === "contacts"}
            onClick={() => setRoute("contacts")}
          >
            {route === "contacts" && <Check size={16} />} Contact Me
          </NavButton>
        </MobileNavButtonsDiv>
      )}
    </NavDiv>
  );
};

export default NavBar;
