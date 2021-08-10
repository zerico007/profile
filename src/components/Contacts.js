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
  animation: ${(props) => (props.odd ? "enterLeft 0.8s" : "fadeIn 0.8s")};
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: white;
  color: var(--main-black);
  border: 2px solid var(--main-black);
  &:hover {
    background: var(--main-black);
    color: white;
    border: 2px solid white;
    transform: scale(1.2);
  }
`;

const ContactsContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: ${(props) => (props.mobileSite ? "column" : "row")};
  justify-content: ${(props) =>
    props.mobileSite ? "flex-start" : "space-evenly"};
  align-items: ${(props) => (props.mobileSite ? "center" : "flex-start")}; ;
`;

const Contacts = ({ mobile }) => {
  return (
    <ContactsContainer mobileSite={mobile}>
      <a href="https://github.com/zerico007" target="_blank" rel="noreferrer">
        <ContactBox odd={true}>
          <GitHub size={40} />
        </ContactBox>
      </a>
      <a
        href="https://www.linkedin.com/in/bavin-edwards-777b23180/"
        target="_blank"
        rel="noreferrer"
      >
        <ContactBox odd={false}>
          <Linkedin size={40} />
        </ContactBox>
      </a>
      <a href="mailto:bavin_edwards@live.com" target="_blank" rel="noreferrer">
        <ContactBox odd={true}>
          <Inbox size={40} />
        </ContactBox>
      </a>
    </ContactsContainer>
  );
};

export default Contacts;
