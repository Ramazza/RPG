import * as S from './styles';
import { User } from 'lucide-react';

function CharacterHeader() {

   return(
       <>
       <S.Container>
               <S.Wrapper>
                   <S.ProfileImg>
                        <User 
                            size={50}
                        />
                   </S.ProfileImg>
                   <S.InnerWrapper>
                    <S.TextContainer>
                       <S.Name>Nome: </S.Name>
                       <S.Value>Credeoberto</S.Value>
                    </S.TextContainer>
                    <S.TextContainer>
                       <S.Name>Jogador: </S.Name>
                       <S.Value>Ramazza</S.Value>
                    </S.TextContainer>
                    <S.TextContainer>
                       <S.Name>Origem: </S.Name>
                       <S.Value>T.I.</S.Value>
                    </S.TextContainer>
                    <S.TextContainer>
                       <S.Name>Classe: </S.Name>
                       <S.Value>Ocultista</S.Value>
                    </S.TextContainer>
                   </S.InnerWrapper>
               </S.Wrapper>
        </S.Container>
       </>
   );
}

export default CharacterHeader;