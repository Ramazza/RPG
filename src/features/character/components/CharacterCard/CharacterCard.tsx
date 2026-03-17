import * as S from './styles';

function CharacterCard() {

   return(
       <>
       <S.Container>
        <S.Wrapper>
            <S.Name>Teste</S.Name>
            <S.Class>Lutador</S.Class>
            <S.Date>Registrado em: 17/03/2026</S.Date>
            <S.Button>Acessar Ficha</S.Button>
        </S.Wrapper>
       </S.Container>
       </>
   );
}

export default CharacterCard;