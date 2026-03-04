import * as S from './styles';

interface ItalicProps {
    text: string;
}

function Italic({ text }: ItalicProps) {

   return(
       <>
       <S.Italic>{text}</S.Italic>
       </>
   );
}

export default Italic;