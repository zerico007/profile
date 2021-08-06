import React from "react";
import styled from "@emotion/styled";

const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 35rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
  margin: 4rem 2rem;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  animation: fadeIn 1s;
`;

const ContentDiv = styled.div`
  color: var(--main-blue);
  display: flex;
  flex-direction: column;
  height: 18rem;
  padding: 0.5rem;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const SkillSection = ({ image, title, languages, frameworks, desc }) => {
  return (
    <SkillDiv>
      <img src={image} alt="skill" width="100" />
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <ContentDiv>
        <div className="description">{desc}</div>
        <div className="languages">{languages}</div>
        <div className="frameworks">{frameworks}</div>
      </ContentDiv>
    </SkillDiv>
  );
};

export default SkillSection;
