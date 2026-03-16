import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  line-height: 1.6;
  word-spacing: 4px;
  text-align: justify;
  font-weight: 200;
  padding-bottom: 1rem;
`;

export const Button = styled.div`
  margin-left: auto;
  width: 4rem;
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
