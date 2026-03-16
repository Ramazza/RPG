import * as S from './styles';
import Header from '../../../../components/Header/Header';
import Atributos from './Atributos/Atributos';
import Origem from './Origem/Origem';
import Classe from './Classe/Classe';
import ToqueFinal from './ToqueFinal/ToqueFinal';
import { useState } from 'react';

function CharacterBuilder() {

    const [characterStep, setCharacterStep] = useState<
        "atributos" | "origem" | "classe" | "toqueFinal"
    >("atributos");

    return(
        <>
            <Header />
            <S.CharacterWrapper>

                <S.CharacterOptionsWrapper>

                    <S.CharacterOption
                        $active={characterStep === "atributos"}
                        onClick={() => setCharacterStep("atributos")}
                    >
                        Atributos
                    </S.CharacterOption>

                    <S.CharacterOption
                        $active={characterStep === "origem"}
                        onClick={() => setCharacterStep("origem")}
                    >
                        Origem
                    </S.CharacterOption>

                    <S.CharacterOption
                        $active={characterStep === "classe"}
                        onClick={() => setCharacterStep("classe")}
                    >
                        Classe
                    </S.CharacterOption>

                    <S.CharacterOption
                        $active={characterStep === "toqueFinal"}
                        onClick={() => setCharacterStep("toqueFinal")}
                    >
                        Toques Finais
                    </S.CharacterOption>

                </S.CharacterOptionsWrapper>

                {characterStep === "atributos" && <Atributos />}

                {characterStep === "origem" && (
                    <Origem goToClasse={() => setCharacterStep("classe")} />
                )}

                {characterStep === "classe" && (
                    <Classe goToToqueFinal={() => setCharacterStep("toqueFinal")} />
                )}

                {characterStep === "toqueFinal" && <ToqueFinal />}

            </S.CharacterWrapper>
        </>
    );
}

export default CharacterBuilder;