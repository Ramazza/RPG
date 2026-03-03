import * as S from './styles';

function PlayerInput() {

   return(
       <>
       <S.Container>
            <S.Wrapper>
                <S.Name>Personagem</S.Name>
                <S.Input placeholder='Nome do Personagem'></S.Input>
            </S.Wrapper>
            <S.Wrapper>
                <S.Name>Jogador</S.Name>
                <S.Input placeholder='Nome do Jogador'></S.Input>
            </S.Wrapper>
       </S.Container>
       </>
   );
}

export default PlayerInput;