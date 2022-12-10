import React from 'react';
import styled from 'styled-components';

import data from "../../db/stack.json";

const Card = styled.div`
    border: 1px solid var(--color-grey);
    margin: 0 5%;
    border-radius: 8px;
    max-width: 500px;

    h3{
        font-family: var(--montserrat);
        color: var(--color-white);
        font-weight: 500;
        font-size: 1.5rem;
        text-align: center;
    }

    hr{
        color: var(--color-grey);
        margin: 0 10%;
    }
`;
const List = styled.div`
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media only screen and (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`;

const Tech = styled.div`
    margin: 0 5%;
    display: flex;
    align-items: center;

    @media only screen and (min-width: 1000px) {
        margin: 0 85px 0 50px;
    }

    p{
        color: var(--color-white);
        font-family: var(--roboto);
        font-size: 1rem;
        display: block;
        margin: auto;

        @media only screen and (min-width: 1000px) {
            font-size: 1.5rem;
        }
    }
`;

const StackCard = () => {

    return (
        <Card>
            <h3>{data.stack[0].name}</h3>
            <hr />
            <List>
                {data.stack[0].tech.map((tech) => (
                    <Tech>
                        <a href={tech.link} target="_blank" rel='noreferrer'>
                            <svg width="35" height="35">
                                {tech.icon.map((path, j) => (
                                    <path d={path} fill="white" key={j}></path>
                                ))}
                            </svg>
                        </a>
                        <p>{tech.name}</p>
                    </Tech>
                ))}
            </List>
        </Card>
    );
}

export default StackCard;
