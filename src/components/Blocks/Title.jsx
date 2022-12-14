import styled, { css } from 'styled-components';

export const Title = styled.h2`
    ${(props) => {
        if (props.center) {
            return css`
                font-size: var(--h2-size);
                font-weight: 500;
                color: var(--color-white);
                font-family: var(--montserrat);
                text-align: center;
                margin: 50px;
            `;
        } else {
            return css`
                font-size: var(--h2-size);
                font-weight: 500;
                color: var(--color-white);
                font-family: var(--montserrat);
                margin: 0;
            `;
        }
    }}
`;
