import * as S from "./styles";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    return (
        <>
            <S.FontSytle />
            <S.HeaderWrapper>
                <S.Logo src="./src/assets/imgs/logo.png" alt="logo" onClick={() => navigate("/")}></S.Logo>
                <S.HeaderContainer>
                    <S.HeaderItem onClick={() => navigate("/personagem")}>Personagem</S.HeaderItem>
                    <S.HeaderItem>Campanha</S.HeaderItem>
                    <S.HeaderItem>Livro</S.HeaderItem>
                </S.HeaderContainer>
            </S.HeaderWrapper>
        </>
    );
}

export default Header;