import { useState } from "react";
import * as S from "./styles";

function CharacterDropdown() {
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

        <S.OrigemName>teste</S.OrigemName>
        <S.OrigemAdd>Escolher</S.OrigemAdd>
      </S.Wrapper>

      {isOpen && (
        <>
        <S.Divider />
        <S.OpenWrapper>
          <S.OrigemDescription>
            Você era um pesquisador ou professor universitário. De forma proposital ou não, seus estudos tocaram em assuntos misteriosos e chamaram a 
            atenção da Ordo Realitas.

            Perícias treinadas. Ciências e Investigação.

            Saber é Poder. Quando faz um teste usando Intelecto, você pode gastar 2 PE para receber +5 nesse teste.
          </S.OrigemDescription>
        </S.OpenWrapper>
        </>
      )}
    </S.Container>
  );
}

export default CharacterDropdown;