import styled from "styled-components";
import AtributosImg from '@/assets/imgs/atributos.svg?react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Column = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SvgWrapper = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
`;

export const Img = styled(AtributosImg)`
  width: 100%;
  height: 100%;

  path {
    fill: white;
  }
`;

export const AttributeButton = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);

  width: 36px;
  height: 36px;

  background: transparent;
  border: none;
  color: white;

  font-weight: bold;
  font-size: 25px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    color: #1B6CA8;
  }
`;