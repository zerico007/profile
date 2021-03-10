import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import {Download} from 'react-feather';
import resumePic from '../assets/resume.jpg'

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
    margin: 150px auto 50px auto;
    width: 150px;
    height: 35px;
    background: #78FFF1;
    color: #361999;
    border: 2px solid #361999;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    animation: enterLeft 1s;
    &:hover {
        background: #361999;
        color: #78FFF1;
        border: 2px solid #78FFF1;
        transform: scale(1.2);
    }
`;

const Resume = ({mobile}) => {

    return (
        <>
        <Link to='/files/resume.pdf' target='_blank' download>
            <DownloadButton mobileSite={mobile}>
               <Download size={16} style={{marginRight: '4px'}}/> Download
            </DownloadButton>
        </Link>
        <ResumeDiv>
            <img style={{width: '70vw'}} src={resumePic} alt="resume-pic"/>
        </ResumeDiv>
        </>
    )
}

export default Resume;