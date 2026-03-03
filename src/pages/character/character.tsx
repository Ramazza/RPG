import * as S from './styles';
import Header from '../../components/header/header';
import { useNavigate } from "react-router-dom";


function Character() {
    
    const navigate = useNavigate();

    return(
        <S.CharacterWrapper>
            <Header></Header>
            <S.AddCharacter onClick={() => navigate("/novo-personagem")}>Novo Personagem</S.AddCharacter>
        </S.CharacterWrapper>
    );
}

export default Character;