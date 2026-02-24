import * as S from './styles';

function Atributos() {

    return(
        <S.AtributosWrapper>
            <S.Description>
                Quando você cria um personagem, todos os seus atributos começam em 1 e você recebe 4 pontos para distribuir entre eles como quiser. 
                Você também pode reduzir um atributo para 0 para receber 1 ponto adicional. 
                O valor máximo inicial que você pode ter em cada atributo é 3.
            </S.Description>
            <S.InnerWrapper>
                <S.Atributos>
                    <S.AtributoText>Agilidade (AGI)</S.AtributoText>
                    <S.AtributoInput></S.AtributoInput>
                </S.Atributos>
                <S.Atributos>
                    <S.AtributoText>Intelecto (INT)</S.AtributoText>
                    <S.AtributoInput></S.AtributoInput>
                </S.Atributos>
                <S.Atributos>
                    <S.AtributoText>VIGOR (VIG)</S.AtributoText>
                    <S.AtributoInput></S.AtributoInput>
                </S.Atributos>
                <S.Atributos>
                    <S.AtributoText>Presença (PRE)</S.AtributoText>
                    <S.AtributoInput></S.AtributoInput>
                </S.Atributos>
                <S.Atributos>
                    <S.AtributoText>Força (FOR)</S.AtributoText>
                    <S.AtributoInput></S.AtributoInput>
                </S.Atributos>
            </S.InnerWrapper>
        </S.AtributosWrapper>
    );
} 

export default Atributos;