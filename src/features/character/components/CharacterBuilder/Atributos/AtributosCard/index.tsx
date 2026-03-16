import * as S from './styles';

interface AtributosCardProps {
    name: string;
    description: string;
    value: number;
    onChange: (value: number) => void;
}
function AtributosCard({ name, description, value, onChange }:AtributosCardProps) {

   return(
       <>
       <S.Container>
        <S.Wrapper>
            <S.Atributo>{name}</S.Atributo>
            <S.AtributoInput
                type='number'
                value={value}
                min={0}
                max={3}
                onChange={(e) => onChange(Number(e.target.value))}
            />
        </S.Wrapper>
            <S.Divider></S.Divider>
            <S.Description>{description}</S.Description>
       </S.Container>
       </>
   );
}

export default AtributosCard;