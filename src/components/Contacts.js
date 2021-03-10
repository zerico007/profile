import React from 'react';
import styled from '@emotion/styled';
import {GitHub, Linkedin, Inbox} from 'react-feather'

const ContactBox = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 40px;
    box-shadow: 0.3rem 0.3rem 0.3rem 0.5rem lightgrey;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background: #78FFF1;
    color: #361999;
    border: 2px solid #361999;
    &:hover {
        background: #361999;
        color: #78FFF1;
        border: 2px solid #78FFF1;
        transform: scale(1.2);
    }
`;

const ContactsContainer = styled.div`
    position: relative;
    top: ${props => props.mobileSite ? '100px' : '200px'};
    margin: 0 auto;
    width: 70vw;
    display: flex;
    flex-direction: ${props => props.mobileSite ? 'column' : 'row'};
    justify-content: space-evenly;
    align-items: center;
`;

const Contacts = ({mobile}) => {
    return (
        <ContactsContainer mobileSite={mobile}>
            <a href="https://github.com/zerico007" style={{animation: 'enterLeft 1s'}}>
            <ContactBox>
                <GitHub size={40}/>   
            </ContactBox>
            </a> 
            <a href="https://www.linkedin.com/in/bavin-edwards-777b23180/" style={{animation: 'enterBottom 1s'}}>
            <ContactBox>
                <Linkedin size={40}/>
            </ContactBox>
            </a>
            <a href="mailto:bavin_edwards@live.com" style={{animation: 'enterRight 1s'}}>
            <ContactBox>   
                <Inbox size={40}/>
            </ContactBox>
            </a>
        </ContactsContainer>
    )
}

export default Contacts;