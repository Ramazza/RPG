import * as S from './styles';
import CharacterDropdown from '../../CharacterDropdown/characterDropdown';
import Bold from '../../FontStyles/Bold';
import Italic from '../../FontStyles/Italic';
import { origemInfo } from './origemInfo';

function Origem() {

    return(
        <S.OrigemWrapper>

            <S.OrigemDescription>
                O que seu personagem fazia antes de se envolver com o paranormal e ingressar na Ordem da Realidade? 
                A origem representa como a vida pregressa influencia sua carreira de investigador. Escolha uma origem que se encaixe com o conceito 
                de seu personagem ou escolha uma aleatoriamente. 
                
                <Bold text='Ao escolher uma origem, você recebe duas perícias treinadas e um poder da origem.'/>
                    
                Cada origem apresentada a seguir é intencionalmente vaga, apenas uma ideia por onde começar. Você pode usá-la como está, para jogar 
                rapidamente, ou colorir com quantos detalhes quiser, conforme o conceito de seu agente.
               
                <Italic text='Perícias concedidas serão adicionadas automaticamente. Perícias opcionais podem ser adicionadas ao agente após sua criação.'/>
            </S.OrigemDescription>

            <S.Search placeholder='Buscar'/>

            <S.OrigemOptions>

                {origemInfo.map((origem) => (
                    <CharacterDropdown
                        key={origem.id}
                        name={origem.name}
                        info={origem.info}
                    />
                ))}

            </S.OrigemOptions>

        </S.OrigemWrapper>
    );
}

export default Origem;