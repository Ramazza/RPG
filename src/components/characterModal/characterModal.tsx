import * as S from './styles';
import Header from '../Header/header';
import Atributos from './Atributos/atributos';
import Origem from './Origem/origem';
import Classe from './Classe/classe';
import ToqueFinal from './ToqueFinal/toqueFinal';
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
                <S.CharacterOption onClick={() => setCharacterStep("classe")}>Classe</S.CharacterOption>
                <S.CharacterOption onClick={() => setCharacterStep("toqueFinal")}>Toques Finais</S.CharacterOption>
            </S.CharacterOptionsWrapper>
            {characterStep === "atributos" && <Atributos/>}
            {characterStep === "origem" && <Origem/>}
            {characterStep === "classe" && <Classe />}
            {characterStep === "toqueFinal" && <ToqueFinal />}
        </S.CharacterWrapper>
        </>
    );
} 

export default CharacterModal;