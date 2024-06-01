import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContainerInput = styled.div`
    padding: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: flex-end;
`;

export const FileInput = styled.input`
    display: none;
`;

export const FileLabel = styled.label`
    position: relative;
    display: inline-block;
    background: var(--linear);
    padding: 10px 40px 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 400;
    font-size: 0.9em;
    color: white;
    &:active {
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 1);
    }
`;

export const Icon = styled.span`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`;

export const SuccessIcon = styled(FontAwesomeIcon)`
    color: green;
`;

export const ErrorIcon = styled(FontAwesomeIcon)`
    color: red;
`;
