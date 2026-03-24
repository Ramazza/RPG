import styled from "styled-components";
import AtributosImg from '@/assets/imgs/atributos.svg?react';

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
  width: 30vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Img = styled(AtributosImg)`
  width: 20rem;
  height: 20rem;
  padding-left: 2rem;

  path {
    fill: white;
  }
`;
