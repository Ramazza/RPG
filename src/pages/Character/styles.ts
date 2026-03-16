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

    background: linear-gradient(135deg, #3ba4f7, #5cc1ff);
    border: none;
    border-radius: 8px;
    font-weight: 600;
    color: #0f1115;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 3px 8px rgba(59, 164, 247, 0.4);
}
`;