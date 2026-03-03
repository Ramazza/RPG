import styled from "styled-components"

export const CharacterWrapper = styled.div`
    
`;

export const AddCharacter = styled.div`
    height: 4rem;
    width: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    inset-inline-start: 90vw;
    inset-block-start: 1rem;
    text-align: center;
    font-family: 'PlayfairDisplayCustom';
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s ease;
    background-color: #0E3A5D;
    color: #E6F4FF;
    border-radius: 3px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);

    &:hover {
        background-color: #15507F;
    }
`;