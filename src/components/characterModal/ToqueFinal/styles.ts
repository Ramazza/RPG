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

export const Description = styled.h3`
  line-height: 1.6;
  word-spacing: 4px;
  text-align: justify;
  font-weight: 200;
  padding-bottom: 1rem;
`;

export const Button = styled.div`
  margin-left: auto;
  width: 4rem;
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
