import styled from "styled-components"

export const Container = styled.div`
  display: flex;
	align-items: center;
  gap: 1rem;
	padding-top: 1rem;
`;

export const Wrapper = styled.div`
  border: 1px solid white;
	padding: 10px;
`;

export const Nex = styled.h3`
  color: #9ca3af;
`;

export const NexValue = styled.h3`
  cursor: pointer;
	font-weight: bold;

	&:hover {
		color: #1B6CA8;
	}
`;

export const PeValue = styled.h3`
	font-weight: bold;
`;
