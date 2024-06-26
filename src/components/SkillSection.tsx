import { ReactElement } from "react";
import styled from "@emotion/styled";

interface SkillSectionProps {
  image: string;
  title: string;
  languages: string;
  frameworks: string;
  desc: string;
  mobileSite: boolean;
}

const SkillDiv = styled.div<MobileProp>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.mobileSite ? "80vw" : "18rem")};
  height: 35rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
  margin: 4rem 2rem;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  animation: fadeIn 0.6s;

  h3 {
    text-align: center;
    color: #fff;
    background: linear-gradient(45deg, #ef629f, #eecda3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ContentDiv = styled.div`
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  height: 18rem;
  padding: 0.5rem;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const SkillSection = ({
  image,
  title,
  languages,
  frameworks,
  desc,
  mobileSite,
}: SkillSectionProps): ReactElement => {
  return (
    <SkillDiv mobileSite={mobileSite}>
      <img src={image} alt="skill" width="100" />
      <h3>{title}</h3>
      <ContentDiv>
        <div className="description">{desc}</div>
        <div className="languages">{languages}</div>
        <div className="frameworks">{frameworks}</div>
      </ContentDiv>
    </SkillDiv>
  );
};

export default SkillSection;
