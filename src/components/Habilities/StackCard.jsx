import React from 'react';
import {
    Card,
    List,
    Tech
} from './StackCardStyled';

const StackCard = ({ stack }) => {

    return (
        <Card>
            <h3>{stack.name}</h3>
            <hr />
            <List>
                {stack.tech.map((tech, index) => (
                    <Tech key={index}>
                        <a href={tech.link} target="_blank" rel='noreferrer'>
                            <svg width={tech.width} height={tech.height}>
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
