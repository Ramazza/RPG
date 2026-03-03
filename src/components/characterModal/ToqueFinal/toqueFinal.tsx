import * as S from './styles';
import PlayerInput from '../../characterForm/playerInput/playerInput';
import FormInput from '../../characterForm/formInput/formInput';

function ToqueFinal() {

   return(
      <>
      <S.Container>
         <S.Wrapper>
            <S.Description>
               Até aqui, você definiu as características mecânicas de sua ficha — mas um bom personagem é mais do que apenas números. 
               Agora, vamos trabalhar na descrição de seu agente, definindo aspectos como nome, gênero e idade. Esses aspectos não possuem 
               efeito em regras, mas deixam o jogo mais envolvente e divertido.
            </S.Description>
            <S.Button>Finalizar</S.Button>
         </S.Wrapper>
         <PlayerInput></PlayerInput>
         <FormInput></FormInput>
      </S.Container>
      </>
   );
}

export default ToqueFinal;