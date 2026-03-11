import * as S from './styles';

interface ClassCardProps {
    name: string;
    description: string;
    page: number;
    onChoose: () => void;
}

function ClassCard({ name, description, page, onChoose }: ClassCardProps) {

   return(
       <>
       <S.Container>
        <S.Wrapper>
            <S.Name>{name}</S.Name>
            <S.Divisor></S.Divisor>
            <S.Description>{description}</S.Description>
            <S.InnerWrapper>
                <S.MoreInfoButton onClick={() => window.open(`/livro/${page}`)}>Mais Info</S.MoreInfoButton>
                <S.ChooseButton onClick={onChoose}>Escolher</S.ChooseButton>
            </S.InnerWrapper>
        </S.Wrapper>
       </S.Container>
       </>
   );
}

export default ClassCard;