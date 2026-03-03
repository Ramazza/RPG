import * as S from './styles';

function FormInput() {

   return(
       <>
       <S.Container>
            <S.Wrapper>
                <S.Name>Aparência</S.Name>
                <S.Input placeholder='Nome, Gênero, Idade, Descrição Física...'></S.Input>
            </S.Wrapper>
            <S.Wrapper>
                <S.Name>Personalidade</S.Name>
                <S.Input placeholder='Traços marcantes, opiniões, ideias...'></S.Input>
            </S.Wrapper>
            <S.Wrapper>
                <S.Name>Histórico</S.Name>
                <S.Input placeholder='Infância, relação com a família, contato com o Paranormal, eventos, bons e ruins...'></S.Input>
            </S.Wrapper>
            <S.Wrapper>
                <S.Name>Objetivo</S.Name>
                <S.Input placeholder='Por que ele faz parte da Ordem? Porque luta contra o Outro Lado?'></S.Input>
            </S.Wrapper>
       </S.Container>
       </>
   );
}

export default FormInput;