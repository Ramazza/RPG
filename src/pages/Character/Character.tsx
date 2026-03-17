import * as S from './styles';
import Header from '../../components/Header/Header';
import { useNavigate } from "react-router-dom";
import CharacterCard from '@/features/character/components/CharacterCard/CharacterCard';


function Character() {
    
    const navigate = useNavigate();

    return(
        <>
        <S.CharacterWrapper>
            <Header></Header>
            <S.AddCharacter onClick={() => navigate("/novo-personagem")}>Novo Personagem</S.AddCharacter>
            <S.Characters>Personagens: 1</S.Characters>
        </S.CharacterWrapper>
        <S.InnerWrapper>
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
        </S.InnerWrapper>
        </>
    );
}

export default Character;