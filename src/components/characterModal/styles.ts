import styled from "styled-components";

export const CharacterWrapper = styled.div`
    height: 92vh;
`;

export const CharacterOptionsWrapper = styled.div`
    display: flex;
    gap: 3rem;
    justify-content: center;
    padding: 2rem;
    color: white;
    font-family: 'CinzelCustom';
`;

export const CharacterOption = styled.h3`
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        color: #15507F;
        transform: translateY(-1px);
    }
`;
