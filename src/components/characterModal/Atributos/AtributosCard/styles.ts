import styled from "styled-components";

export const Container = styled.div`
  background: #161a21;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(59, 164, 247, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  background: #161a21;
`;

export const Atributo = styled.h3`
  background: #161a21;
`;

export const AtributoInput = styled.input`
  background: #161a21;
  border-radius: 7px;
  padding: 5px;
  padding-left: 1rem;
  width: 2rem;
  border: 1px solid rgba(59, 164, 247, 0.2);
`;

export const Divider = styled.div`
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