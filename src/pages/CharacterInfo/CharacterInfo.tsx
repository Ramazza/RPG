import Header from '@/components/Header/Header';
import CharacterHeader from '@/features/CharacterInfo/components/CharacterHeader/CharacterHeader';
import * as S from "./styles";
import StatsBar from '@/features/CharacterInfo/components/CharacterHeader/CharacterStats/StatsBar/StatsBar';
import { useState } from "react";

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
       <CharacterHeader />
       <S.Img />
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
            label="Esforço"
            value={esforco}
            max={maxEsforco}
            color="#ff8811"
            onChange={(delta) => setEsforco(v => Math.max(0, Math.min(v + delta, maxEsforco)))}
        />
       </>
   );
}

export default CharacterInfo;