import styled from "styled-components";

export const Button = styled.button`
    padding: 10px;
    background: var(--linear);
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:active {
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 1);
    }
`;
