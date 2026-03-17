import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  background: #161a21;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(59, 164, 247, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #161a21;
  position: relative;
`;

export const Name = styled.h3`
  padding-bottom: 0.5rem;
  background: #161a21;
`;

export const Class = styled.p`
  padding-bottom: 0.5rem;
  background: #161a21;  

`;

export const Date = styled.p`
  padding-bottom: 2.5rem;
  background: #161a21;  
  font-size: small;
  color: #9ca3af;
`;

export const Button = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #3ba4f7, #5cc1ff);
  font-weight: 600;
  color: #0f1115;
  padding: 6px;
  border-radius: 8px;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(59, 164, 247, 0.4);
  }
`;