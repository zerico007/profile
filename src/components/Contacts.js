import React from "react";
import styled from "@emotion/styled";
import { GitHub, Linkedin, Inbox } from "react-feather";

const ContactBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: white;
  color: #3463ad;
  border: 2px solid #3463ad;
  &:hover {
    background: #3463ad;
    color: white;
    border: 2px solid white;
    transform: scale(1.2);
  }
`;

const ContactsContainer = styled.div`
  position: relative;
  top: ${(props) => (props.mobileSite ? "30px" : "100px")};
  margin: 0 auto;
  width: 70vw;
  display: flex;
  flex-direction: ${(props) => (props.mobileSite ? "column" : "row")};
  justify-content: space-evenly;
  align-items: center;
`;

const Contacts = ({ mobile }) => {
  return (
    <ContactsContainer mobileSite={mobile}>
      <a
        href="https://github.com/zerico007"
        target="_blank"
        rel="noreferrer"
        style={{ animation: "enterLeft 1s" }}
      >
        <ContactBox>
          <GitHub size={40} />
        </ContactBox>
      </a>
      <a
        href="https://www.linkedin.com/in/bavin-edwards-777b23180/"
        target="_blank"
        rel="noreferrer"
        style={{ animation: "enterBottom 1s" }}
      >
        <ContactBox>
          <Linkedin size={40} />
        </ContactBox>
      </a>
      <a
        href="mailto:bavin_edwards@live.com"
        target="_blank"
        rel="noreferrer"
        style={{ animation: "enterRight 1s" }}
      >
        <ContactBox>
          <Inbox size={40} />
        </ContactBox>
      </a>
    </ContactsContainer>
  );
};

export default Contacts;
