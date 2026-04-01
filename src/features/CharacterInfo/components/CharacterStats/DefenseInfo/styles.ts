import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Wrapper = styled.div`
  
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const IconValue = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-weight: bold;
  font-size: 20px;
  color: white;
`;

export const Title = styled.p`
  padding-bottom: 10px;
  font-size: 17px;
  font-weight: bold;
`;

export const DefenseInput = styled.input`
  width: 30%;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  padding-left: 2rem;
`;

export const StatsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: #9ca3af;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  width: 100%;
  box-sizing: border-box;
  outline: none;
`;