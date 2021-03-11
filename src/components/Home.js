import React from 'react';
import styled from '@emotion/styled';
import heroPic from '../assets/hero.jpg';
import { Link } from 'react-router-dom';


const ContainerDiv = styled.div`
    position: relative;
    top: 95px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0, 0.4);
    background-size: ${props => props.mobileSite ? 'fill' : 'contain'};
    background-repeat: no-repeat;
`;

const AboutDiv = styled.div`
    position: absolute;
    top: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.mobileSite ? '70vw' : '50vw'};
    height: 40vh;
    border: none;
    border: 3px solid #f1f1f1;
    padding: 10px;
    color: white;
    border-radius: 6px;
    font-size: ${props => props.mobileSite ? '18px' : '26px'};
    line-height: 150%;
    font-weight: bold;
    text-align: center;
    animation: enterBottom 1s;
`;

const NameDiv = styled.div`
    position: absolute;
    top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 32px;
    border: none;
    padding: 10px;
    font-size: ${props => props.mobileSite ? '48px' : '62px'};
    font-weight: bold;
    text-align: center;
    color: white;
`;

const TitleDiv = styled.div`
    position: absolute;
    top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 32px;
    border: none;
    padding: 10px;
    font-size: ${props => props.mobileSite ? '36px' : '42px'};
    font-weight: bold;
    color: white;
    
`;


const Home = ({mobile}) => {
    return (
        <ContainerDiv mobileSite={mobile}>
            <img src={heroPic} alt="background" style={{width: '105vw', zIndex: '-1', filter: 'blur(4px)'}}/>
            <NameDiv mobileSite={mobile}>
                Bavin Edwards
            </NameDiv>
            <TitleDiv mobileSite={mobile}>
                Web Developer
            </TitleDiv>
            <AboutDiv mobileSite={mobile}>
            We live in a data driven digital world and thus success
            in any field requires us to be able to take full advantage 
            of the profuse amount of data available to us through our 
            digital connections with the world around us and the virtual world.
            My goal is play an active role in solving real world problems
            through knowledge, innovation, data analysis and critical thinking.
            </AboutDiv>
        </ContainerDiv>
    )
}

export default Home;