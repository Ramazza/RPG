export type Atributo = "agi" | "for" | "pre" | "vig" | "int";

interface AtributoInfo {
    key: Atributo;
    name: string;
    description: string;
}

export const  atributosInfo: AtributoInfo[] = [
    {
        key: "agi",
        name: "Agilidade (AGI)",
        description: `Define sua coordenação motora, velocidade de reação e destreza manual. Uma pessoa com Agilidade elevada é rápida e 
                    tem movimentos precisos, como um ginasta ou dançarino. Agilidade é o atributo-base das perícias Acrobacia, Furtividade, Iniciativa, 
                    Crime, Pilotagem, Pontaria e Reflexos.`
    },
    {
        key: "for",
        name: "Força (FOR)",
        description: `Determina sua potência muscular e habilidade atlética. Um personagem com Força alta tem grande capacidade física, 
                    seja por predisposição genética, treinamento constante ou modificação paranormal. Força é o atributo-base de Atletismo e Luta, além de
                    ser aplicada em suas rolagens de dano corpo a corpo e com armas de arremesso.`
    },
    {
        key: "pre",
        name: "Presença (PRE)",
        description: `Define sua capacidade de observação, força de vontade e habilidades sociais. Um personagem com Presença alta é atento, 
                    determinado e possui boa lábia ou aparência. Pode ser uma figura agradável e descolada, ou séria e imponente. Presença é o atributo-base 
                    de Diplomacia, Enganação, Intimidação, Intuição, Percepção, Religião e Vontade, além de conceder pontos de esforço adicionais por nível 
                    de exposição (NEX).`
    },
    {
        key: "vig",
        name: "Vigor (VIG)",
        description: `Determina sua saúde e resistência física. Uma pessoa com Vigor elevado pode ser grande e robusta, ou simplesmente ter 
                    bom fôlego e disposição. Vigor é o atributo-base de Fortitude, além de conceder pontos de vida adicionais por nível de exposição.
                    Se você aumentar seu Vigor, seus PV aumentam deacordo retroativamente.`
    },
    {
        key: "int",
        name: "Intelecto (INT)",
        description: `Mede seu raciocínio, memória e educação geral. Uma pessoa com Intelecto elevado tem raciocínio rápido e afiado, conhecimento 
                    amplo sobre diversos assuntos e habilidades que envolvem estudo, como conhecimento científico. Intelecto é o atributo-base de Atualidades, 
                    Ciências, Investigação, Medicina, Ocultismo, Profissão, Sobrevivência, Tática e Tecnologia. Além disso, você recebe treinamento em 
                    perícias adicionais igual ao seu Intelecto. Caso seu Intelecto aumente, você aprende uma perícia adicional para cada ponto (e também 
                    aumenta o grau de treinamento de uma perícia adicional nos NEX 35% e 70%). Por fim, o Intelecto afeta sua compreensão do Outro Lado e 
                    sua capacidade de racionalizar o paranormal, definindo o número de rituais que você pode aprender.`
    },
]