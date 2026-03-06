import * as S from "./styles";
import { useState } from "react";

interface CharacterDropdownProps {
  name: string;
  info: string;
}

function CharacterDropdown({ name, info }: CharacterDropdownProps) {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <S.Container>
      <S.Wrapper>

        <S.DropButton onClick={handleToggle}>
          Drop
        </S.DropButton>

        <S.OrigemName>
          {name}
        </S.OrigemName>

        <S.OrigemAdd>
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