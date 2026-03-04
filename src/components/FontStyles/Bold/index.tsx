import * as S from './styles';

interface BoldProps {
    text: string;
}

function Bold({ text }: BoldProps) {

   return(
       <>
       <S.Bold>{text}</S.Bold>
       </>
   );
}

export default Bold;