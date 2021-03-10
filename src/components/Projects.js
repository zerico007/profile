import React from 'react';
import styled from '@emotion/styled';
import appleShopPic from '../assets/apple-shop.jpg';
import auctionsPic from '../assets/auctions.jpg';
import gradebookPic from '../assets/gradebook.jpg';

const ProjectDiv = styled.div`
    position: relative;
    top: 100px;
    display: grid;
    grid-template-areas:
    'image'
    'desc';
    grid-template-rows: 1fr 1fr;
    margin: 50px auto 0 auto;
    width: 70vw;
    height: ${props => props.mobileSite ? 'auto' : '600px'};
    border: none;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0.3rem 0.3rem 0.3rem 0.5rem lightgrey;
    animation: enterTop 1.8s;
`;

const Description = styled.p`
    align-self: center;
    text-align: center;
    font-weight: bold;
    line-height: 1.5rem;
    grid-area: desc;
`;

const Projects = ({mobile}) => {

    const imageStyle = {
        width: '70vw',
        cursor: 'pointer',
        gridArea: 'image'
    }

    return (
        <>
        <ProjectDiv mobileSite={mobile}>
            <a href="https://zerico007.github.io/apple_shop/">
            <img src={appleShopPic} alt="apple-shop-pic" style={imageStyle}/>
            </a>
            <Description>
                Web app for shopping apple products. Frontend built with React. Backend 
                built with Node (includes REST APIs, jwt authentication, refresh tokens) and MongoDB
            </Description>
        </ProjectDiv>
        <ProjectDiv mobileSite={mobile}>
            <a href="http://zerico007.pythonanywhere.com/">
            <img src={auctionsPic} alt="auctions-pic" loading="lazy" style={imageStyle}/>
            </a>
            <Description>
                Web app simialr to ebay for posting items for sale and bidding. Built with Python using Django.
                SQL DB used. 
            </Description>
        </ProjectDiv>
        <ProjectDiv mobileSite={mobile} style={{marginBottom: '100px'}}>
            <a href="http://kabash.pythonanywhere.com/">
            <img src={gradebookPic} alt="gradebook-pic" loading="lazy" style={imageStyle}/>
            </a>
            <Description>
                Web app for recording student grades. Built with Python using Flask. SQL DB used. 
            </Description>
        </ProjectDiv>
        </>
    )
}

export default Projects;