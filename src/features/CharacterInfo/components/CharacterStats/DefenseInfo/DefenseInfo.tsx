import * as S from './styles';
import { Shield } from 'lucide-react';

function DefenseInfo() {

   return(
       <>
       <S.Container>

        <S.TopSection>
            <S.InnerWrapper>
                <S.IconWrapper>
                    <Shield size={90} strokeWidth={1}/>    
                    <S.IconValue>15</S.IconValue>                
                </S.IconWrapper>
                <S.Title>DEFESA</S.Title>
            </S.InnerWrapper>
            <S.InnerWrapper>
                <S.Title>BLOQUEIO</S.Title>
                <S.DefenseInput></S.DefenseInput>
            </S.InnerWrapper>
            <S.InnerWrapper>
                <S.Title>ESQUIVA</S.Title>
                <S.DefenseInput></S.DefenseInput>
            </S.InnerWrapper>

        </S.TopSection>

        <S.BottomSection>
            <S.StatsWrapper>
                <S.Text>PROTEÇÃO</S.Text>
                <S.Input></S.Input>
            </S.StatsWrapper>
            <S.StatsWrapper>
                <S.Text>RESISTÊNCIAS</S.Text>
                <S.Input></S.Input>
            </S.StatsWrapper>
            <S.StatsWrapper>
                <S.Text>PROFICIÊNCIAS</S.Text>
                <S.Input></S.Input>
            </S.StatsWrapper>
        </S.BottomSection>

       </S.Container>
       </>
   );
}

export default DefenseInfo;