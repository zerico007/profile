import React from 'react';
import styled from '@emotion/styled';
import heroPic from '../assets/hero.jpg';


const ContainerDiv = styled.div`
    position: relative;
    top: 100px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
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
    padding: 10px;
    background: #361999;
    color: white;
    border-radius: 6px;
    font-size: ${props => props.mobileSite ? '16px' : '22px'};
    line-height: 150%;
    font-weight: bold;
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem black;
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
    font-size: 62px;
    font-weight: bold;
    text-align: center;
    text-shadow: 2px 2px white;
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
    font-size: 42px;
    font-weight: bold;
    text-shadow: 2px 2px white;
`;

const Home = ({mobile}) => {
    return (
        <ContainerDiv mobileSite={mobile}>
            <img src={heroPic} alt="background" style={{width: '100vw', zIndex: '-1'}}/>
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