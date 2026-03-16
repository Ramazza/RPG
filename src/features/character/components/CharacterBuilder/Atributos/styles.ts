import styled from "styled-components";

export const AtributosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: #E6F4FF;
  text-align: justify;
`;

export const Description = styled.p`
  line-height: 1.6;
  word-spacing: 4px;
  display: flex;
  align-items: center;
`;

export const MaxPoints = styled.div`
  padding-bottom: 1rem;
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 1rem;
`;
