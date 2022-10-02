import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { GitHub, Linkedin, Inbox } from "react-feather";
import { useAppContext } from "../context/appContext";
import callme from "../assets/callme.png";

interface ContactBoxProps {
  odd: boolean;
}

const ContactBox = styled.div<ContactBoxProps>`
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

const ContactsContainer = styled.div<MobileProp>`
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: ${(props) => (props.mobileSite ? "column" : "row")};
  justify-content: ${(props) =>
    props.mobileSite ? "flex-start" : "space-evenly"};
  align-items: ${(props) => (props.mobileSite ? "center" : "flex-start")};
`;

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  img {
    width: 150px;
    align-self: center;
    margin-top: 40px;
  }
`;

const Contacts = (): ReactElement => {
  const { mobile } = useAppContext();
  return (
    <Wrapper>
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
        <a
          href="mailto:bavin_edwards@live.com"
          target="_blank"
          rel="noreferrer"
        >
          <ContactBox odd={true}>
            <Inbox size={40} />
          </ContactBox>
        </a>
      </ContactsContainer>
      <img src={callme} alt="call me" />
    </Wrapper>
  );
};

export default Contacts;
