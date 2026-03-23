import * as S from './styles';

function CharacterHeader() {

   return(
       <>
       <S.Container>
               <S.Wrapper>
                   <S.ProfileImg alt='Profile Pic'></S.ProfileImg>
                   <S.InnerWrapper>
                       <S.Name>Nome: Credeoberto</S.Name>
                       <S.Player>Jogador: Ramazza</S.Player>
                       <S.Origem>Origem: T.I.</S.Origem>
                       <S.Classe>Ocultista</S.Classe>
                   </S.InnerWrapper>
               </S.Wrapper>
        </S.Container>
       </>
   );
}

export default CharacterHeader;