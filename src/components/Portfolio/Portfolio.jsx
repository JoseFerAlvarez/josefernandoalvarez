import React from 'react';
import Project from './Project';
import {
    PortfolioContainer,
    ProjectsList
} from "./PortfolioStyled";

import data from "../../db/portfolio.json";
import { projectImages } from "../../db/portfolio.js";
import { Title } from '../Blocks/Title';
import { Line } from '../Blocks/Line';


const Portfolio = () => {
    return (
        <PortfolioContainer id='portfolio'>
            <Line center />
            <Title center>Portfolio</Title>
            <ProjectsList>
                {data.map((project, index) => (
                    <Project project={project} key={index} image={projectImages.images[index]}></Project>
                ))}
            </ProjectsList>
        </PortfolioContainer>
    );
}

export default Portfolio;
