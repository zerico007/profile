import React from "react";
import styled from "@emotion/styled";
import heroPic from "../assets/hero.jpg";
import { ChevronDown } from "react-feather";

const ContainerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: ${(props) => (props.mobileSite ? "fill" : "contain")};
  background-position: center;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
`;

const AboutDiv = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  filter: drop-shadow(16px 16px 20px grey);
  width: ${(props) => (props.mobileSite ? "70vw" : "50vw")};
  height: 40vh;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 15px 50px;
  line-height: 150%;
  font-weight: bold;
  text-align: center;
  animation: enterBottom 1s;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const NameDiv = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 32px;
  border: none;
  padding: 10px;
  font-size: ${(props) => (props.mobileSite ? "48px" : "62px")};
  font-weight: bold;
  text-align: center;
  color: white;
  @media (max-width: 400px) {
    font-size: 36px;
  }
`;

const TitleDiv = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 32px;
  border: none;
  padding: 10px;
  font-size: ${(props) => (props.mobileSite ? "36px" : "42px")};
  font-weight: bold;
  color: white;
  @media (max-width: 400px) {
    font-size: 24px;
  }
`;

const Footer = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 32px;
  font-weight: bold;
  color: white;
  width: fit-content;
  animation: bounce 1s infinite alternate;
  cursor: pointer;
  &:hover {
    color: #78fff1;
  }
`;

const Home = ({ mobile, setRoute }) => {
  const fontSizeAboutDiv = () => {
    if (window.matchMedia("(orientation: landscape)").matches) {
      return "14px";
    } else if (mobile) {
      return "16px";
    } else if (!mobile) {
      return "22px";
    }
  };
  return (
    <ContainerDiv>
      <img
        src={heroPic}
        alt="background"
        style={{
          width: "100%",
          height: "100vh",
          zIndex: "-1",
          filter: "blur(4px)",
          position: "absolute",
        }}
      />
      <NameDiv mobileSite={mobile}>Bavin Edwards</NameDiv>
      <TitleDiv mobileSite={mobile}>Web Developer</TitleDiv>
      <AboutDiv mobileSite={mobile} style={{ fontSize: fontSizeAboutDiv() }}>
        We live in a data driven digital world, and thus success in any field
        requires us to be able to take full advantage of the profuse amount of
        data available to us through our digital connections within the world
        around us. My goal is to play an active role in solving real world
        problems through knowledge, innovation, data analysis and critical
        thinking.
      </AboutDiv>
      <Footer onClick={() => setRoute("projects")}>
        <span>Take a look at my work</span>
        <ChevronDown />
      </Footer>
    </ContainerDiv>
  );
};

export default Home;
