import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e1e1e;
  border-radius: 4px;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40%;
`;

export const DropButton = styled.div`
  background-color: #0E3A5D;
  padding: 6px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #15507F;
    color: #E6F4FF;
    transform: translateY(-1px);
  }
`;

export const OrigemName = styled.div`
  
`;

export const OrigemAdd = styled.div`
  background-color: #0E3A5D;
  padding: 6px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #15507F;
    color: #E6F4FF;
    transform: translateY(-1px);
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin: 1rem 0;
  background: linear-gradient(135deg, #0E3A5D, #1B6CA8);
`;

export const OpenWrapper = styled.div`
  
`;

export const OrigemDescription = styled.div`
  line-height: 1.6;
  word-spacing: 4px;
  text-align: justify;
  font-weight: 200;
`;