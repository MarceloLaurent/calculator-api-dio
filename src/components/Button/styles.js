import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`
    padding: 15px;
    border: 1px solid #F0F8FF;
    border-radius: 8px;
    background-color: #B0E2FF;
    color: #000000;
    font-size: 24px;
    font-weight: 600;
    font-family: 'Roboto';
    flex: 1;

    &:hover {
        opacity: 0.6;
    }

    ${({variant}) => variant !== "primary" && css`
        background-color: #4A708B;
        color: #FFFFFF;
    `}

`