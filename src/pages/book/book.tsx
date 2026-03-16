import * as S from './styles';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router';

function Book() {

    const { page } = useParams();

   return(
       <>
       <Header/>
       <S.PDF src={`/pdf/Ordem Paranormal RPG.pdf#page=${page}`} />
       </>
   );
}

export default Book;