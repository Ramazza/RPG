import * as S from "./styles";
import { useState } from "react";

import Header from '@/components/Header/Header';
import CharacterHeader from '@/features/CharacterInfo/components/CharacterHeader/CharacterHeader';
import StatsBar from '@/features/CharacterInfo/components/CharacterStats/StatsBar/StatsBar';
import Nex from "@/features/CharacterInfo/components/CharacterStats/Nex/Nex";
import DefenseInfo from "@/features/CharacterInfo/components/CharacterStats/DefenseInfo/DefenseInfo";
import CharacterExpertise from "@/features/CharacterInfo/components/CharacterExpertise/CharacterExpertise";

function CharacterInfo() {

    const maxVida = 16;
    const maxSanidade = 25;
    const maxEsforco = 14;

    const [vida, setVida] = useState(maxVida);
    const [sanidade, setSanidade] = useState(maxSanidade);
    const [esforco, setEsforco] = useState(maxEsforco);

    return(
        <>
            <Header />

            <S.Container>
                <CharacterHeader />

                <S.Content>

                    <S.Column>
                        <S.Wrapper>

                            <S.SvgWrapper>
                                <S.Img />

                                <S.AttributeButton style={{ top: "16%", left: "50%" }}>
                                    1
                                </S.AttributeButton>

                                <S.AttributeButton style={{ top: "37%", left: "19%" }}>
                                    5
                                </S.AttributeButton>

                                <S.AttributeButton style={{ top: "37%", right: "8%" }}>
                                    2
                                </S.AttributeButton>

                                <S.AttributeButton style={{ bottom: "14%", left: "27%" }}>
                                    4
                                </S.AttributeButton>

                                <S.AttributeButton style={{ bottom: "14%", right: "17%" }}>
                                    3
                                </S.AttributeButton>
                            </S.SvgWrapper>

                            <Nex />

                            <StatsBar
                                label="VIDA"
                                value={vida}
                                max={maxVida}
                                color="#b91c1c"
                                onChange={(delta) => setVida(v => Math.max(0, Math.min(v + delta, maxVida)))}
                            />

                            <StatsBar
                                label="SANIDADE"
                                value={sanidade}
                                max={maxSanidade}
                                color="#8a2be2"
                                onChange={(delta) => setSanidade(v => Math.max(0, Math.min(v + delta, maxSanidade)))}
                            />

                            <StatsBar
                                label="ESFORÇO"
                                value={esforco}
                                max={maxEsforco}
                                color="#ff8811"
                                onChange={(delta) => setEsforco(v => Math.max(0, Math.min(v + delta, maxEsforco)))}
                            />

                            <DefenseInfo />

                        </S.Wrapper>
                    </S.Column>

                    <S.Column>
                        <CharacterExpertise />
                    </S.Column>

                    <S.Column>
                        
                    </S.Column>

                </S.Content>
            </S.Container>
        </>
    );
}

export default CharacterInfo;