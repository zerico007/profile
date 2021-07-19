import React from "react";
import styled from "@emotion/styled";
import { Download } from "react-feather";
import resumePic from "../assets/resume.jpg";
import { saveAs } from "file-saver";

const ResumeDiv = styled.div`
  position: relative;
  margin: 0 auto;
  width: 70vw;
  height: auto;
  border: none;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0.3rem 0.3rem 0.3rem 0.5rem lightgrey;
  animation: enterBottom 1s;
`;

const DownloadButton = styled.button`
  position: relative;
  margin: 50px auto;
  width: 150px;
  height: 35px;
  background: #78fff1;
  color: #3463ad;
  border: 2px solid #3463ad;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  animation: enterLeft 1s;
  &:hover {
    background: #3463ad;
    color: #78fff1;
    border: 2px solid #78fff1;
    transform: scale(1.2);
  }
`;

const Resume = ({ mobile }) => {
  const downloadResume = () => {
    saveAs(process.env.PUBLIC_URL + "/resume.pdf", "resume.pdf");
  };

  return (
    <>
      <DownloadButton mobileSite={mobile} onClick={downloadResume}>
        <Download size={16} style={{ marginRight: "4px" }} /> Download
      </DownloadButton>
      <ResumeDiv>
        <img style={{ width: "100%" }} src={resumePic} alt="resume-pic" />
      </ResumeDiv>
    </>
  );
};

export default Resume;
