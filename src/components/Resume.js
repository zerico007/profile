import React from "react";
import styled from "@emotion/styled";
import { Download } from "react-feather";
import resumePic from "../assets/resume.jpg";
import { saveAs } from "file-saver";

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
  animation: fadeIn 1s;
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
  animation: enterLeft 1s;
  &:hover {
    background: var(--main-black);
    color: white;
    border: 2px solid white;
    transform: scale(1.2);
  }
`;

const Resume = ({ mobile }) => {
  const downloadResume = () => {
    saveAs(process.env.PUBLIC_URL + "/resume.pdf", "resume.pdf");
  };

  return (
    <ContainerDiv>
      <DownloadButton mobileSite={mobile} onClick={downloadResume}>
        <Download size={16} style={{ marginRight: "4px" }} /> Download
      </DownloadButton>
      <ResumeDiv>
        <img style={{ width: "100%" }} src={resumePic} alt="resume-pic" />
      </ResumeDiv>
    </ContainerDiv>
  );
};

export default Resume;
