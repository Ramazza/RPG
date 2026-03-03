import * as S from './styles';
import Header from '../../components/header/header';
import { useParams } from 'react-router';

function Book() {

    const { page } = useParams();

   return(
       <>
       <Header/>
       <S.PDF src={`../../../public/pdf/Ordem Paranormal RPG.pdf#page=${page}`}></S.PDF>
       </>
   );
}

export default Book;