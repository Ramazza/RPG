import styled from "styled-components";

export const Container = styled.div`
  background: #161a21;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(59, 164, 247, 0.2);
  transition: all 0.2s ease;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  background-color: #161a21;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropButton = styled.div`
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

export const OrigemName = styled.h3`
  background-color: #161a21;
`;

export const OrigemAdd = styled.div`
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

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin: 1rem 0;
  background: linear-gradient(135deg, #0E3A5D, #1B6CA8);
`;

export const OpenWrapper = styled.div`
  
`;

export const OrigemDescription = styled.p`
  line-height: 1.6;
  word-spacing: 4px;
  text-align: justify;
  font-weight: 200;
  background-color: #161a21;
  color: #9ca3af;
`;