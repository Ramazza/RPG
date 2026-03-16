import styled from "styled-components";

export const CharacterWrapper = styled.div`
  max-width: 60vw;
  margin: 0 auto;
  padding: 40px 24px;
`;

export const CharacterOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  padding: 16px 24px;
  margin-bottom: 40px;

  background-color: #161a21;

  backdrop-filter: blur(8px);

  border-radius: 16px;
  border: 1px solid rgba(59, 164, 247, 0.15);
`;

export const CharacterOption = styled.h3<{ $active?: boolean }>`
  position: relative;
  cursor: pointer;

  font-weight: 500;
  letter-spacing: 1px;
  font-size: 1rem;

  background-color: #161a21;
  color: ${({ $active }) => ($active ? "#3ba4f7" : "#9ca3af")};

  transition: all 0.2s ease;

  &:hover {
    color: #5cc1ff;
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: ${({ $active }) => ($active ? "100%" : "0%")};
    height: 2px;
    background: linear-gradient(90deg, #3ba4f7, #5cc1ff);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;