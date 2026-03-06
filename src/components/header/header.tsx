import * as S from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <S.FontSytle />
            <S.HeaderWrapper>
                <S.Logo src="/src/assets/imgs/logo.png" alt="logo" onClick={() => navigate("/")}></S.Logo>
                <S.HeaderContainer>
                    <S.HeaderItem 
                        $active={location.pathname === "/personagem" || location.pathname === "/novo-personagem"}
                        onClick={() => navigate("/personagem")}
                    >   Personagem
                    </S.HeaderItem>

                    <S.HeaderItem
                        $active={location.pathname === "/campanha"}
                    >
                        Campanha
                    </S.HeaderItem>

                    <S.HeaderItem 
                        $active={location.pathname === "/livro/0"}
                        onClick={() => navigate("/livro/0")}
                    >
                        Livro
                    </S.HeaderItem>
                </S.HeaderContainer>
            </S.HeaderWrapper>
        </>
    );
}

export default Header;