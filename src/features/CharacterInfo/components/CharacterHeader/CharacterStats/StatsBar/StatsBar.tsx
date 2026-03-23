import * as S from './styles';

type Props = {
  label: string;
  value: number;
  max: number;
  color: string;
  onChange?: (delta: number) => void;
};

function StatsBar({label, value, max, color, onChange}: Props) {

    const percentage = (value / max) * 100;

   return(
       <>
        <S.Container>
            <S.Label>{label}</S.Label>
            <S.BarWrapper>
                <S.BarFill $percentage={percentage} $color={color} />

                <S.Content>
                <div>
                    <S.Button onClick={() => onChange?.(-5)}>{"<<"}</S.Button>
                    <S.Button onClick={() => onChange?.(-1)}>{"<"}</S.Button>
                </div>

                <S.Value>
                    {value} / {max}
                </S.Value>

                <div>
                    <S.Button onClick={() => onChange?.(1)}>{">"}</S.Button>
                    <S.Button onClick={() => onChange?.(5)}>{">>"}</S.Button>
                </div>
                </S.Content>
            </S.BarWrapper>
        </S.Container>
       </>
   );
}

export default StatsBar;