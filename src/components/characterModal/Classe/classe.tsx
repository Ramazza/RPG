import * as S from './styles';
import ClassCard from './ClassCard/ClassCard';
import Italic from '../../FontStyles/Italic';

interface ClasseProps {
    goToToqueFinal: () => void;
}

function Classe({goToToqueFinal}: ClasseProps) {


   return(
       <>
       <S.Container>
        <S.Wrapper>
            <S.Description>
                Sua classe indica o treinamento que você recebeu na Ordem para enfrentar os perigos do Outro Lado.
                Em termos de jogo, é a sua característica mais importante, pois define o que você faz e qual é o seu papel no grupo de investigadores.

                <Italic 
                    text='Perícias concedidas serão adicionadas automaticamente. Perícias opcionais podem ser adicionadas ao agente após sua criação.'
                />
            </S.Description>
            <ClassCard
                name="Combatente"
                description="
                    Treinado para lutar com todo tipo de armas, e com a força e a coragem para encarar os perigos de frente, É o tipo de agente que 
                    prefere abordagens mais diretas e costuma atirar primeiro e perguntar depois.

                    Do mercenário especialista em armas de fogo até o perito em espadas, combatentes apresentam uma gama enorme de habilidades e técnicas 
                    especiais que aprimoram sua eficiência no campo de batalha, tornando-os membros essenciais em qualquer missão de extermínio.

                    Além de treinar seu corpo, o combatente também é perito em liderar seus aliados em batalha e cuidar de seu equipamento de combate, 
                    sempre preparado para assumir a linha de frente quando a coisa fica feia."
                page={32}
                onChoose={goToToqueFinal}
            />
            <ClassCard 
                name="Especialista"
                description="
                    Um agente que confia mais em esperteza do que em força bruta. Um especialista se vale de conhecimento técnico, raciocínio 
                    rápido ou mesmo lábia para resolver mistérios e enfrentar o paranormal.

                    Cientistas, inventores, pesquisadores e técnicos de vários tipos são exemplos de especialistas, que são tão variados quanto as áreas 
                    do conhecimento e da tecnologia. Alguns ainda preferem estudar engenharia social e se tornam excelentes espiões infiltrados, ou mesmo 
                    estudam técnicas especiais de combate como artes marciais e tiro a distância, aliando conhecimento técnico e habilidade.

                    O que une todos os especialistas é sua incrível capacidade de aprender e improvisar usando seu intelecto e conhecimento avançado, 
                    que pode tirar o grupo todo dos mais diversos tipos de enrascadas."
                page={36}
                onChoose={goToToqueFinal}
            />
            <ClassCard 
                name="Ocultista"
                description="
                    O Outro Lado é misterioso, perigoso e, de certa forma, cativante. Muitos estudiosos das entidades se perdem em seus reinos obscuros 
                    em busca de poder, mas existem aqueles que visam compreender e dominar os mistérios paranormais para usá-los para combater o próprio 
                    Outro Lado. Esse tipo de agente não é apenas um conhecedor do oculto, como também possui talento para se conectar com 
                    elementos paranormais.

                    Ao contrário da crendice popular, ocultistas não são intrinsecamente malignos. Seria como dizer que o cientista que inventou a 
                    pólvora é culpado pelo assassino que disparou o revólver. Para a Ordem, o Paranormal é uma força que pode ser usada para os mais d
                    iversos propósitos, de acordo com a intenção de seu usuário.

                    Ocultistas aplicam seu conhecimento acadêmico e suas capacidades de conjuração de rituais em missões para investigar e combater 
                    o Paranormal em todas as suas formas, principalmente quando munição convencional não é o suficiente para lidar com a tarefa."            
                page={40}
                onChoose={goToToqueFinal}
            />
        </S.Wrapper>
       </S.Container>
       </>
   );
}

export default Classe;