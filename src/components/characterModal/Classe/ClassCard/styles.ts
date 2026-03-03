import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  background-color: #1e1e1e;
  border-radius: 4px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  
`;

export const Name = styled.h2`
  
`;

export const Divisor = styled.div`
  height: 2px;
  width: 100%;
  margin: 1rem 0;
  background: linear-gradient(135deg, #0E3A5D, #1B6CA8);
`;

export const Description = styled.h3`
  line-height: 1.6;
  word-spacing: 4px;
  text-align: justify;
  font-weight: 200;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
`;

export const MoreInfoButton = styled.button`
  background-color: #0E3A5D;
  padding: 6px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  border: none;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #15507F;
    color: #E6F4FF;
    transform: translateY(-1px);
  }
`;

export const ChooseButton = styled.button`
  background-color: #0E3A5D;
  padding: 6px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  border: none;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #15507F;
    color: #E6F4FF;
    transform: translateY(-1px);
  }
`;