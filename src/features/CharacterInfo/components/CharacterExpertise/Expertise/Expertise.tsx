import * as S from './styles';

interface ExpertiseProps {
  pericia: string;
  dado: string;
}

function Expertise({ pericia, dado }: ExpertiseProps) {
  return (
    <S.Container>
      <S.Img />

      <S.Pericia>{pericia}</S.Pericia>
      <S.Dado>( {dado} )</S.Dado>
      <S.Bonus>( 0 )</S.Bonus>
      <S.Treino>0</S.Treino>
      <S.Outros>0</S.Outros>
    </S.Container>
  );
}

export default Expertise;