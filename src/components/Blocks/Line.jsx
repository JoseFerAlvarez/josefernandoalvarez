import styled, { css } from "styled-components";

export const Line = styled.hr`
    ${(props) => {
        if (props.center) {
            return css`
                border: 1px solid var(--color-grey);
                margin: 0 25%;
<<<<<<< HEAD
                border-radius: 8px;
=======
                background-color: var(--color-grey);
>>>>>>> develop
            `;
        } else {
            return css`
                border: 1px solid var(--color-grey);
                border-radius: 8px;
<<<<<<< HEAD
=======
                color: var(--color-grey);
                background-color: var(--color-grey);
>>>>>>> develop
            `;
        }
    }}
`;
