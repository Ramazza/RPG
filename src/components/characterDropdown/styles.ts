import styled from "styled-components";

export const Wrapper = styled.div`
    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40%;
    background-color: #1e1e1e;
    padding: 1rem 0 1rem 0;
    border-radius: 3px;
`;

export const DropButton = styled.div`
    background-color: #0E3A5D;
    padding: 0.5rem;
    border-radius: 3px;
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
        background-color: #15507F;
    }
`;

export const OrigemName = styled.div`
  
`;

export const OrigemAdd = styled.div`
    background-color: #0E3A5D;
    padding: 0.5rem;
    border-radius: 3px;
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
        background-color: #15507F;
    }
`;

export const OrigemDescription = styled.h3`
  
`;