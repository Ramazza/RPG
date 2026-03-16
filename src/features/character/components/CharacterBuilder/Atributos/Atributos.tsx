import * as S from './styles';
import Bold from '@/components/FontStyles/Bold';
import AtributosCard from './AtributosCard/AtributosCard';
import { atributosInfo } from './AtributosInfo';
import type { Atributo } from './AtributosInfo';
import { useState } from 'react';

function Atributos() {

    const [atributos, setAtributos] = useState({
        agi: 1,
        for: 1,
        pre: 1,
        vig: 1,
        int: 1
    });

    const pontosGastos = Object.values(atributos).reduce((acc, valor) => {
        return acc + (valor -1);
    }, 0);

    const pontosRestantes = 4 - pontosGastos;

    const handleChange = (atributo: Atributo, valor: number) => {
        
        if (valor < 0 || valor > 3) return;

        const valorAtual = atributos[atributo];
        const diferenca = valor - valorAtual;

        if (diferenca > 0 && pontosRestantes <= 0) {
            return
        }

        setAtributos(prev => ({
            ...prev,
            [atributo]: valor
        }));
    }


    return(
        <S.AtributosWrapper>
            <S.Description>
                Quando você cria um personagem, todos os seus atributos começam em 1 e você recebe 4 pontos para distribuir entre eles como quiser. 
                Você também pode reduzir um atributo para 0 para receber 1 ponto adicional. 
            </S.Description>
            <Bold 
                text='O valor máximo inicial que você pode ter em cada atributo é 3.'
            />
            <S.MaxPoints>Pontos Restantes: {pontosRestantes}</S.MaxPoints>
            <S.InnerWrapper>
                {atributosInfo.map((atributo) => (
                    <AtributosCard 
                        key={atributo.key}
                        name={atributo.name}
                        description={atributo.description}
                        value={atributos[atributo.key]}
                        onChange={(v) => handleChange(atributo.key, v)}
                    />
                ))}
            </S.InnerWrapper>
        </S.AtributosWrapper>
    );
} 

export default Atributos;