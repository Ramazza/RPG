import * as S from './styles';
import Header from '../header/header';
import Atributos from './Atributos/atributos';
import Origem from './Origem/origem';
import { useState } from 'react';

function CharacterModal() {

    const [characterStep, setCharacterStep] = useState("atributos");

    return(
        <>
        <Header></Header>
        <S.CharacterWrapper>
            <S.CharacterOptionsWrapper>
                <S.CharacterOption onClick={() => setCharacterStep("atributos")}>Atributos</S.CharacterOption>
                <S.CharacterOption onClick={() => setCharacterStep("origem")}>Origem</S.CharacterOption>
                <S.CharacterOption>Classe</S.CharacterOption>
                <S.CharacterOption>Toques Finais</S.CharacterOption>
            </S.CharacterOptionsWrapper>
            {characterStep === "atributos" && <Atributos></Atributos>}
            {characterStep === "origem" && <Origem></Origem>}
        </S.CharacterWrapper>
        </>
    );
} 

export default CharacterModal;