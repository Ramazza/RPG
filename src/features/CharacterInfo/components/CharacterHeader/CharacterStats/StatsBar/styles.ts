import styled from "styled-components";

export const Container = styled.div`
  width: 25vw;
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

export const Label = styled.div`
  text-align: center;
  color: #aaa;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const BarWrapper = styled.div`
  background: #222;
  border: 1px solid #555;
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const BarFill = styled.div<{ $percentage: number; $color: string }>`
  background: ${({ $color }) => $color};
  width: ${({ $percentage }) => $percentage}%;
  height: 100%;
  transition: width 0.3s ease;
  z-index: 1;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: bold;
  z-index: 2;
`;

export const Value = styled.span`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;