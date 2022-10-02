import { ReactElement } from "react";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import { ArrowDownCircle } from "react-feather";
import { useAppContext } from "../context/appContext";
import hi from "../assets/hi.png";
import come from "../assets/come.png";

const ContainerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px 0;
`;

const AboutDiv = styled.div`
  position: relative;
  display: flex;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
  width: 70vw;
  max-width: 830px;
  height: auto;
  border: none;
  padding: 2rem;
  line-height: 150%;
  font-weight: bold;
  text-align: center;
  border-radius: 0.5rem;
  animation: fadeIn 4.8s;
  background: rgba(255 255 255 / 0.05);
  box-shadow: 0 0 10px rgba(0 0 0 / 0.5);
  outline: 2px solid rgba(255 255 255 / 0.1);

  p {
    color: #fff;
    background: linear-gradient(45deg, #ef629f, #eecda3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const NameDiv = styled.div<MobileProp>`
  position: relative;
  display: flex;
  margin-bottom: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80vw;
  line-height: ${(props) => (props.mobileSite ? "3rem" : "4rem")};
  height: 32px;
  border: none;
  padding: 10px;
  font-size: ${(props) => (props.mobileSite ? "32px" : "42px")};
  font-weight: bold;
  text-align: center;
  color: white;

  span {
    color: #fff;
    background: linear-gradient(45deg, #20bdff, #a5fecb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 400px) {
    font-size: 36px;
  }
`;

const TitleDiv = styled.div<MobileProp>`
  position: relative;
  display: flex;
  margin-top: 3rem;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 32px;
  border: none;
  padding: 10px;
  font-size: ${(props) => (props.mobileSite ? "28px" : "42px")};
  font-weight: bold;
  color: #fff;
  background: linear-gradient(45deg, #20bdff, #a5fecb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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
  height: auto;
  font-weight: bold;
  color: #0ed2f7;
  width: fit-content;
  cursor: pointer;
  &:hover {
    color: #ff6495;
  }
`;

const Home = (): ReactElement => {
  const { mobile, orientation, scrollToElement } = useAppContext();
  const navigate = useNavigate();

  const fontSizeAboutDiv = () => {
    if (orientation === "landscape" && window.innerHeight < 500) {
      return "14px";
    } else if (mobile) {
      return "16px";
    } else if (!mobile) {
      return "22px";
    }
  };

  return (
    <ContainerDiv>
      <NameDiv mobileSite={mobile}>
        <span style={{ animation: "fadeIn 0.5s" }}>Hi!</span>
        <span>
          <img
            src={hi}
            alt="hi"
            style={{
              display: "inline",
              animation: "fadeIn 0.5s",
              width: "56px",
            }}
          />
        </span>
        <span style={{ animation: "fadeIn 2s" }}> My</span>
        <span style={{ animation: "fadeIn 3.5s" }}> name</span>
        <span style={{ animation: "fadeIn 5s" }}> is</span>
        <span style={{ animation: "fadeIn 6.5s" }}> Bavin</span>
        <span style={{ animation: "fadeIn 8s" }}> Edwards</span>
      </NameDiv>
      <TitleDiv style={{ animation: "fadeIn 9.8s" }} mobileSite={mobile}>
        I am a Web Developer
      </TitleDiv>
      <AboutDiv style={{ fontSize: fontSizeAboutDiv() }}>
        <p>
          We live in a data-driven, digital world, and thus success in any field
          requires us to be able to take full advantage of the profuse amount of
          data available to us through digital connections within the world
          around us. My goal is to play an active role in solving real world
          problems through knowledge, innovation, data analysis and critical
          thinking.
        </p>
      </AboutDiv>
      <Footer
        onClick={() => {
          navigate("/profile/projects");
          scrollToElement("Projects");
        }}
      >
        <span>Take a look at my work</span>
        <img src={come} alt="take a look" style={{ width: "60px" }} />
        <ArrowDownCircle fontSize={32} />
      </Footer>
    </ContainerDiv>
  );
};

export default Home;
