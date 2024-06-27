import { ReactElement } from "react";
import styled from "@emotion/styled";
import { Download } from "react-feather";
import resumePic from "../assets/resumePic.png";

const ContainerDiv = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResumeDiv = styled.div`
  position: relative;
  margin: 0 auto;
  width: 70vw;
  height: auto;
  border: none;
  padding: 10px;
  border-radius: 6px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  animation: fadeIn 0.6s;
`;

const DownloadButton = styled.button`
  position: relative;
  margin: 50px auto;
  width: 11rem;
  height: 2.5rem;
  background: white;
  color: var(--main-black);
  border: 2px solid var(--main-black);
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  font-weight: 900;
  font-size: 1rem;
  font-family: "Nunito", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  animation: enterLeft 0.6s;
  &:hover {
    background: var(--main-black);
    color: white;
    border: 2px solid white;
    transform: scale(1.2);
  }
`;

const Resume = (): ReactElement => {
  return (
    <ContainerDiv>
      <a href={import.meta.env.PUBLIC_URL + "/resume.pdf"} download>
        <DownloadButton>
          <Download size={16} style={{ marginRight: "4px" }} /> Download
        </DownloadButton>
      </a>
      <ResumeDiv>
        <img
          style={{ width: "100%", objectFit: "cover" }}
          src={resumePic}
          loading="lazy"
          alt="resume-pic"
        />
      </ResumeDiv>
    </ContainerDiv>
  );
};

export default Resume;
