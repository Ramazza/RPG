import * as S from "./styles";
import { useState } from "react";
import { ArrowBigDown } from 'lucide-react';

interface CharacterDropdownProps {
  name: string;
  info: string;
  onChoose: () => void;
}

function CharacterDropdown({ name, info, onChoose }: CharacterDropdownProps) {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <S.Container>
      <S.Wrapper>

        <S.DropButton onClick={handleToggle}>
          <ArrowBigDown 
            size={20}
            color="black"
            fill="black"
            style={{
              backgroundColor: "transparent",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.2s"
            }}
          />
        </S.DropButton>

        <S.OrigemName>
          {name}
        </S.OrigemName>

        <S.OrigemAdd onClick={onChoose}>
          Escolher
        </S.OrigemAdd>

      </S.Wrapper>

      {isOpen && (
        <>
          <S.Divider />

          <S.OpenWrapper>
            <S.OrigemDescription>
              {info}
            </S.OrigemDescription>
          </S.OpenWrapper>
        </>
      )}

    </S.Container>
  );
}

export default CharacterDropdown;