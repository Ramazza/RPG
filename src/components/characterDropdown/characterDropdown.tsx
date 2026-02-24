import { useState } from 'react';
import * as S from './styles';

function CharacterDropdown() {

    const [dropdown, setDropdown] = useState(false);
    

   return(
        <>
        <S.Wrapper>
            <S.DropButton onClick={() => setDropdown(!dropdown)}>drop</S.DropButton>
            <S.OrigemName>teste</S.OrigemName>
            <S.OrigemAdd>Escolher</S.OrigemAdd>
        </S.Wrapper>
        {dropdown === true && 
            <S.OrigemDescription>essa é a descrição</S.OrigemDescription>
        }
        </>
);
}

export default CharacterDropdown;