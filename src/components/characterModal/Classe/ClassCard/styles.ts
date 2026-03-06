import styled from "styled-components";

export const Container = styled.div`
  background: #161a21;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(59, 164, 247, 0.2);
  transition: all 0.2s ease;
`;

export const Wrapper = styled.div`
  background-color: #161a21;
`;

export const Name = styled.h2`
  background-color: #161a21;
`;

export const Divisor = styled.div`
  height: 2px;
  width: 100%;
  margin: 1rem 0;
  background: linear-gradient(135deg, #0E3A5D, #1B6CA8);
`;

export const Description = styled.p`
  line-height: 1.6;
  word-spacing: 4px;
  text-align: justify;
  font-weight: 200;
  background-color: #161a21;
  color: #9ca3af;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  background-color: #161a21;
`;

export const MoreInfoButton = styled.button`
  background: linear-gradient(135deg, #3ba4f7, #5cc1ff);
  font-weight: 600;
  border: none;
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

export const ChooseButton = styled.button`
  background: linear-gradient(135deg, #3ba4f7, #5cc1ff);
  font-weight: 600;
  border: none;
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