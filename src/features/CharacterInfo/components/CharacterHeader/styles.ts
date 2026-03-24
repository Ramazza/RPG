import styled from "styled-components"

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
`;

export const ProfileImg = styled.div`
  padding: 1rem;
  background-color: #222;
  border: 1px solid gray;
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 0.5rem;
`;

export const Name = styled.h3`
  width: 6vw;
  color: #9ca3af;
`;

export const Value = styled.p`
  width: 20vw;
  border-bottom: 1px solid white;
`;