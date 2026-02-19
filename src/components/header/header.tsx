import * as S from "./styles";



function Header() {

    return (
        <>
            <S.FontSytle />
            <S.HeaderWrapper>
                <S.Logo src="./src/assets/imgs/logo.jpg" alt="logo"></S.Logo>
                <S.HeaderContainer>
                    <S.HeaderItem>Personagem</S.HeaderItem>
                    <S.HeaderItem>Campanha</S.HeaderItem>
                    <S.HeaderItem>Livro</S.HeaderItem>
                </S.HeaderContainer>
            </S.HeaderWrapper>
        </>
    );
}

export default Header;