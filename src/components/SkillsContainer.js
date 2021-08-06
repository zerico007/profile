import React from "react";
import SkillSection from "./SkillSection";
import styled from "@emotion/styled";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import database from "../assets/database.png";

const ContainerDiv = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: ${(props) => (props.mobileSite ? "column" : "row")};
  align-items: center;
  justify-content: center;
`;

const SkillsContainer = ({ mobile }) => {
  return (
    <ContainerDiv mobileSite={mobile}>
      <SkillSection
        image={frontend}
        title="Front End Development"
        languages="Languages: HTML, CSS, JavaScript, TypeScript"
        frameworks="Libraries: ReactJS"
        desc="Modern, dynamic & responsive web development that animates your visions and captivates your audience."
      />
      <SkillSection
        image={backend}
        title="Back End Development"
        languages="Languages: JavaScript, TypeScript, Java"
        frameworks="Frameworks: NodeJS, Spring Boot"
        desc="Development of both RESTful and GraphQL API's with JWT authentication, role-based and location-based permissions."
      />
      <SkillSection
        image={database}
        title="Database Modeling and Management"
        frameworks="Databases: MongoDB, PostgresQL, MySQL"
        languages="Structured Query Language, MongoDB Query Language"
        desc="Database creation, modeling and management using Mongoose, Prisma from NodeJs and Spring Data JPA from Spring Boot."
      />
    </ContainerDiv>
  );
};

export default SkillsContainer;
