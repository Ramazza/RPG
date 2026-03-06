interface OrigemInfo {
    id: number;
    name: string;
    info: string;
}

export const origemInfo: OrigemInfo[] = [
    {
        id: 1,
        name: "Acadêmico",
        info: `Você era um pesquisador ou professor universitário. De forma proposital ou não, seus estudos tocaram em assuntos misteriosos e chamaram a atenção da Ordo Realitas. \n
        Perícias treinadas: Ciências e Investigação.\n
        Saber é Poder: Quando faz um teste usando Intelecto, você pode gastar 2 PE para receber +5 nesse teste.`
    },
    {
        id: 2,
        name: "Agente de Saúde",
        info: `Você era um profissional da saúde como um enfermeiro, farmacêutico, médico, psicólogo ou socorrista, treinado no atendimento e cuidado de pessoas. Você pode ter sido surpreendido por um evento paranormal durante o trabalho ou mesmo cuidado de um agente da Ordem em uma emergência, que ficou surpreso com o quão bem você lidou com a situação.\n
        Perícias treinadas: Intuição e Medicina.\n
        Técnica Medicinal: Sempre que cura um personagem, você adiciona seu Intelecto no total de PV curados.`
    },
    {
        id: 3,
        name: "Amnésico",
        info: `Você perdeu a maior parte da memória. Sabe apenas o próprio nome, ou nem isso. Sua amnésia pode ser resultado de um trauma paranormal ou mesmo de um ritual. Talvez você tenha sido vítima de cultistas? Talvez você tenha sido um cultista? Seja como for, hoje a Ordem é a única família que conhece. Quem sabe, cumprindo missões, você descubra algo sobre seu passado.\n
        Perícias treinadas: Duas à escolha do mestre.\n
        Vislumbres do Passado: Uma vez por sessão, você pode fazer um teste de Intelecto (DT 10) para reconhecer pessoas ou lugares familiares, que tenha encontrado antes de perder a memória. Se passar, recebe 1d4 PE temporários e, a critério do mestre, uma informação útil.`
    },
    {
        id: 4,
        name: "Artista",
        info: `Você era um ator, músico, escritor, dançarino, influenciador... Seu trabalho pode ter sido inspirado por uma experiência paranormal do passado e o que o público acha que é pura criatividade, a Ordem sabe que tem um lado mais sombrio.\n
        Perícias treinadas: Artes e Enganação.\n
        Magnum Opus: Você é famoso por uma de suas obras. Uma vez por missão, pode determinar que um personagem envolvido em uma cena de interação o reconheça. Você recebe +5 em testes de Presença e de perícias baseadas em Presença contra aquele personagem. A critério do mestre, pode receber esses bônus em outras situações nas quais seria reconhecido.`
    },
    {
        id: 5,
        name: "Atleta",
        info: `Você competia em um esporte individual ou por equipe, como natação ou futebol. Seu alto desempenho pode ser fruto de alguma influência paranormal que nem mesmo você conhecia ou você pode ter se envolvido em algum evento paranormal em uma de suas competições.\n
        Perícias treinadas: Acrobacia e Atletismo.\n
        110%: Quando faz um teste de perícia usando Força ou Agilidade (exceto Luta e Pontaria) você pode gastar 2 PE para receber +5 nesse teste.`
    },
    {
        id: 6,
        name: "Chef",
        info: `Você é um cozinheiro amador ou profissional. Talvez trabalhasse em um restaurante, talvez simplesmente gostasse de cozinhar para a família e amigos. Como sua comida fez com que você se envolvesse com o paranormal? Ninguém sabe. Mas os outros agentes adoram quando você vai para a missão!\n
        Perícias treinadas: Fortitude e Profissão (cozinheiro).\n
        Ingrediente Secreto: Em cenas de interlúdio, você pode fazer a ação alimentar-se para cozinhar um prato especial. Você, e todos os membros do grupo que fizeram a ação alimentar-se, recebem o benefício de dois pratos (caso o mesmo benefício seja escolhido duas vezes, seus efeitos se acumulam).`
    },
    {
        id: 7,
        name: "Cientista Forense",
        info: `Você trabalhava coletando provas para a resolução de crimes, seja para a polícia, seja para uma empresa privada de investigação. Usava métodos e técnicas adquiridos através de uma graduação em uma área científica ou médica, além de cursos específicos. Recrutado para a Ordem por seus conhecimentos técnicos, seu trabalho não mudou muito - mas o tipo de que você investiga, sim.\n
        Perícias treinadas: Ciências e Investigação.\n
        Investigação Científica: Uma vez por cena de investigação, você pode gastar uma ação livre para procurar pistas, usando Ciências no lugar da perícia que seria usada para tentar encontrar a pista em questão.`
    },
    {
        id: 8,
        name: "Criminoso",
        info: `Você vivia uma vida fora da lei, seja como mero batedor de carteiras, seja como membro de uma facção criminosa. Em algum momento, você se envolveu em um assunto da Ordem — talvez tenha roubado um item amaldiçoado? A organização, por sua vez, achou melhor recrutar seus talentos do que ter você como um estorvo.\n
        Perícias treinadas: Crime e Furtividade.\n
        O Crime Compensa: No final de uma missão, escolha um item encontrado na missão. Em sua próxima missão, você pode incluir esse item em seu inventário sem que ele conte em seu limite de itens por patente.`
    },
    {
        id: 9,
        name: "Cultista Arrependido",
        info: `Você fez parte de um culto paranormal. Talvez fossem ignorantes iludidos, que acreditavam estar contatando entidades benevolentes. Talvez soubessem exatamente o que estavam fazendo. Seja como for, algo abriu seus olhos e agora você luta pelo lado certo — embora carregue para sempre traços de sua vida pregressa. Outros membros da Ordem podem desconfiar de sua conversão e você sabe que precisará se esforçar para conquistar a confiança de todos.\n
        Perícias treinadas: Ocultismo e Religião.\n
        Traços do Outro Lado: Você possui um poder paranormal à sua escolha. Porém, começa o jogo com metade da Sanidade normal para sua classe.`
    },
    {
        id: 10,
        name: "Desgarrado",
        info: `Você não vivia de acordo com as normas da sociedade. Podia ser um eremita, uma pessoa em situação de rua ou simplesmente alguém que descobriu o Paranormal e abandonou sua rotina — sabendo o quão frágil era a existência humana, não conseguia simplesmente continuar indo para o trabalho todo o dia. De qualquer forma, a vida sem os confortos modernos o deixou mais forte.\n
        Perícias treinadas: Fortitude e Sobrevivência.\n
        Calejado: Você recebe +1 PV para cada 5% de NEX.`
    },
    {
        id: 11,
        name: "Dublê",
        info: `Você sempre combinou um gosto por alta velocidade, manobras ousadas e esportes radicais com uma total falta de noção do perigo. Sua busca incessante por adrenalina o fez seguir carreira de dublê, uma profissão que lhe permitiu enfrentar o risco das mais diversas formas. Agora à serviço da Ordem, você enfim enfrentará o Medo verdadeiro e poderá colocar sua coragem - e suas peripécias - à prova como nunca.\n
        Perícias treinadas: Pilotagem e Reflexos.\n
        Destemido: Quando faz um teste de perícia para o qual uma falha terá como consequência direta dano ou uma condição negativa, você recebe +5 nesse teste.`
    },
    {
        id: 12,
        name: "Engenheiro",
        info: `Enquanto os acadêmicos estão preocupados com teorias, você colocar a mão na massa, seja como engenheiro profissional, seja como inventor de garagem. Provavelmente você criou algum dispositivo paranormal que chamou a atenção da Ordem.\n
        Perícias treinadas: Profissão e Tecnologia.\n
        Ferramentas Favoritas: Um item a sua escolha (exceto armas) conta como uma categoria abaixo (por exemplo, um item de categoria II conta como categoria I para você).`
    },
    {
        id: 13,
        name: "Escritor",
        info: `Você ganhava a vida inventando mundos, pessoas e histórias - em outra palavras, escrevendo ficção. Em certo momento, seu trabalho tocou ou foi tocado pelo paranormal Talvez as suas histórias tenham gerado Medo, talvez a inspiração para ela viesse do Outro Lado desde o início. Recrutado pela Ordem, você agora luta para que a vida real tenha o final feliz que seus livros não tiveram.\n
        Perícias treinadas: Artes e Atualidades.\n
        Bagagem de Leitura: Por seu trabalho, você já leu - e aprendeu - de tudo um pouco. Uma vez por cena, pode gastar 2 PE para se tornar treinado em uma perícia qualquer até o fim da cena.`
    },
    {
        id: 14,
        name: "Executivo",
        info: `Você possuía um trabalho de escritório em uma grande empresa, banco ou corporação. Era um administrador, advogado, contador ou de qualquer outra profissão que lida com papelada e burocracia. Sua vida era bastante normal, até que você descobriu algo que não devia. Talvez o sucesso da empresa residisse em um ritual? Talvez toda a corporação fosse fachada para um culto e o presidente, um líder cultista envolvido com entidades paranormais? Após essa descoberta, você foi recrutado pela Ordem e trocou seu trabalho de escritório por missões de campo — hoje, sua vida é tudo, menos normal.\n
        Perícias treinadas: Diplomacia e Profissão.\n
        Processo Otimizado: Sempre que faz um teste de perícia durante um teste estendido, ou uma ação para revisar documentos (físicos ou digitais), pode pagar 2 PE para receber +5 nesse teste.`
    },
    {
        id: 15,
        name: "Gaudério Abutre",
        info: `Você fez parte dos valorosos Gaudérios Abutres. Mesmo longe do motoclube, ainda segue o lema "A gente morre por quem a gente ama".\n
        Perícias treinadas: Luta e Pilotagem.\n
        Fraternidade Gaudéria: Uma vez por rodada, quando um aliado adjacente é alvo de um ataque ou efeito, você pode gastar 1 PE para trocar de lugar com este aliado e se tornar o alvo deste ataque ou efeito. Se fizer isso, em seu próximo turno você recebe +2 em testes de ataque contra o agressor.`
    },
    {
        id: 16,
        name: "Ginasta",
        info: `Desde muito jovem, você passou a maior parte de sua vida em ginásios (ou talvez em antigos templos monásticos) praticando as mais difíceis acrobacias. Sua preparação foi árdua e dolorosa, mas aprimorou seu corpo, sua técnica e sua disciplina. Recrutado pela Ordo Realitas, essas se tornaram suas principais ferramentas para enfrentar o Outro lado. E com elas, você planeja fazer as criaturas paranormais sofrerem muito mais do que você sofreu em seus treinos.\n
        Perícias treinadas: Acrobacia e Reflexos.\n
        Mobilidade Acrobática: Você recebe +2 na Defesa e seu deslocamento aumenta em +3m.`
    },
    {
        id: 17,
        name: "Investigador",
        info: `Você era um investigador do governo, como um perito forense ou policial federal, ou privado, como um detetive particular. Pode ter tido contato com o Paranormal em algum caso ou ter sido recrutado pela Ordem por suas habilidades de resolução de mistérios.\n
        Perícias treinadas: Investigação e Percepção.\n
        Faro para Pistas: Uma vez por cena, quando fizer um teste para procurar pistas, você pode gastar 1 PE para receber +5 nesse teste.`
    },
    {
        id: 18,
        name: "Jornalista",
        info: `Uma espécie ameaçada de extinção, você atuava investigando notícias para um jornal, rede de televisão, blog, canal do YouTube... Você se juntou à Ordem porque descobriu algo relacionado ao paranormal, ou foi recrutado para investigar um caso específico. Seja como for, continua buscando a verdade - não mais para informar as pessoas, mas sim para protegê-las.\n
        Perícias treinadas: Atualidades e Investigação.\n
        Fontes Confiáveis: Uma vez por sessão de jogo, você pode gastar 1 PE para contatar suas fontes - pessoas com acesso a informações nas quais você confia. Isso permite que você role novamente um teste já realizado para encontrar uma pista, com +5 de bônus, ou receba outra informação relevante (a critério do mestre).`
    },
    {
        id: 19,
        name: "Lutador",
        info: `Você pratica uma arte marcial ou esporte de luta, ou cresceu em um bairro perigoso onde aprendeu briga de rua. Já quebrou muitos ossos, tanto seus quanto dos outros. Pode ter conhecido a Ordem após um torneio secreto envolvendo entidades do Outro Lado ou ter sido recrutado pela sua capacidade de luta.\n
        Perícias treinadas: Luta e Reflexos.\n
        Mão Pesada: Você recebe +2 em rolagens de dano com ataques corpo a corpo.`
    },
    {
        id: 20,
        name: "Magnata",
        info: `Você possui muito dinheiro ou patrimônio. Pode ser o herdeiro de uma família antiga ligada ao oculto, ter criado e vendido uma empresa e decidido usar sua riqueza para uma causa maior, ou ter ganho uma loteria após inadvertidamente escolher números amaldiçoados que formavam um ritual.\n
        Perícias treinadas: Diplomacia e Pilotagem.\n
        Patrocinador da Ordem: Seu limite de crédito é sempre considerado um acima do atual.`
    },
    {
        id: 21,
        name: "Mercenário",
        info: `Você é um soldado de aluguel, que trabalha sozinho ou como parte de alguma organização que vende serviços militares. Escoltas e assassinatos fizeram parte de sua rotina por tempo o suficiente para você se envolver em alguma situação com o Paranormal.\n
        Perícias treinadas: Iniciativa e Intimidação.\n
        Posição de Combate: No primeiro turno de cada cena de ação, você pode gastar 2 PE para receber uma ação de movimento adicional.`
    },
    {
        id: 22,
        name: "Militar",
        info: `Você serviu em uma força militar, como o exército ou a marinha. Passou muito tempo treinando com armas de fogo, até se tornar um perito no uso delas. Acostumado a obedecer ordens e partir em missões, está em casa na Ordo Realitas. O inimigo é diferente, mas um tiro bem dado continua resolvendo o problema.\n
        Perícias treinadas: Pontaria e Tática.\n
        Para Bellum: Você recebe +2 em rolagens de dano com armas de fogo.`
    },
    {
        id: 23,
        name: "Operário",
        info: `Pedreiro, industriário, operador de máquinas em uma fábrica… Você passou uma parte de sua vida em um emprego braçal, desempenhando atividades práticas que lhe deram uma visão pragmática do mundo. Sua rotina mundana, entretanto, foi confrontada de alguma forma pelo paranormal,e você não consegue mais esquecer tudo que viu sobre os mistérios do mundo.\n
        Perícias treinadas: Fortitude e Profissão.\n
        Ferramenta de Trabalho: Escolha uma arma simples ou tática que, a critério do mestre, poderia ser usada como ferramenta em sua profissão (como uma marreta para um pedreiro). Você sabe usar a arma escolhida e recebe +1 em testes de ataque, rolagens de dano e margem de ameaça com ela.`
    },
    {
        id: 24,
        name: "Policial",
        info: `Você fez parte de uma força de segurança pública, civil ou militar. Em alguma patrulha ou chamado se deparou com um caso paranormal e sobreviveu para contar a história.\n
        Perícias treinadas: Percepção e Pontaria.\n
        Patrulha: Você recebe +2 em Defesa.`
    },
    {
        id: 25,
        name: "Professor",
        info: `Você leciona em uma escola ou universidade, ensinando ciências, artes ou outro campo do saber. Sua profissão é uma das mais nobres de todas e o colocou em contato com muitas pessoas e conhecimentos. Em algum momento, o colocou em contato também com o paranormal. Agora, trabalhando na Ordem, seus alunos são criaturas do Outro Lado, e você planeja reprovar todos esse ano.\n
        Perícias treinadas: Ciências e Intuição.\n
        Aula de Campo: Você sabe extrair o melhor das pessoas. Uma vez por cena, pode gastar uma ação padrão e 2 PE para fornecer +1 em um atributo de outro personagem em alcance curto até o fim da cena.`
    },
    {
        id: 26,
        name: "Religioso",
        info: `Você é devoto ou sacerdote de uma fé. Independentemente da religião que pratica, se dedica a auxiliar as pessoas com problemas espirituais. A partir disso, teve contato com o paranormal, o que fez com que fosse convocado pela Ordem.\n
        Perícias treinadas: Religião e Vontade.\n
        Acalentar: Você recebe +5 em testes de Religião para acalmar. Além disso, quando acalma uma pessoa, ela recebe um número de pontos de Sanidade igual a 1d6 + a sua Presença.`
    },
    {
        id: 27,
        name: "Revoltado",
        info: `Alguma coisa aconteceu em sua juventude que fez com que você se rebelasse contra o mundo ao seu redor. Talvez seus parentes tenham sido ausentes, por escolha ou por algum evento trágico, talvez outra perda tenha marcado seu coração. Qualquer que seja a razão, você possui iguais doses de rebeldia e independência e, acima de tudo, aprendeu a se virar sozinho. Recrutado pela Ordem, você luta por vingança - ou para que outros não passem pelo que você passou.\n
        Perícias treinadas: Furtividade e Vontade.\n
        Antes Só: Você recebe +1 na Defesa, em testes de perícias e em seu limite de PE por turno se estiver sem nenhum aliado em alcance curto.`
    },
    {
        id: 28,
        name: "Servidor Público",
        info: `Você possuía carreira em um órgão do governo, lidando com burocracia e atendendo pessoas. Sua rotina foi quebrada quando você viu que o prefeito era um cultista ou que a câmara de vereadores se reunia à noite para realizar rituais. Quando os próprios representantes do povo estão dispostos a sacrificá-lo para entidades malignas, onde reside nossa esperança? Hoje, você sabe a resposta para essa pergunta: na Ordo Realitas.\n
        Perícias treinadas: Intuição e Vontade.\n
        Espírito Cívico: Sempre que faz um teste para ajudar, você pode gastar 1 PE para aumentar o bônus concedido em +2.`
    },
    {
        id: 29,
        name: "Teórico da Conspiração",
        info: `A humanidade nunca pisou na lua. Reptilianos ocupam importantes cargos públicos. A Terra é plana... E secretamente governada pelos Illuminati. Você sabe isso tudo, pois investigou a fundo esses importantes assuntos. Quando sua pesquisa esbarrou no Paranormal, você foi recrutado. Na Ordem, sua loucura determinação será usada para um bom propósito.\n
        Perícias treinadas: Investigação e Ocultismo.\n
        Eu Já Sabia: Você não se abala com entidades ou anomalias. Afinal, sempre soube que isso tudo existia. Você recebe resistência a dano mental igual ao seu Intelecto.`
    },
    {
        id: 30,
        name: "T.I.",
        info: `Programador, engenheiro de software ou simplesmente “o cara da T.I.”, você tem treinamento e experiência para lidar com sistemas informatizados. Seu talento (ou curiosidade exagerada) chamou a atenção da Ordem.\n
        Perícias treinadas: Investigação e Tecnologia.\n
        Motor de Busca: A critério do Mestre, sempre que tiver acesso a internet, você pode gastar 2 PE para substituir um teste de perícia qualquer por um teste de Tecnologia.`
    },
    {
        id: 31,
        name: "Trabalhador Rural",
        info: `Você trabalhava no campo ou em áreas isoladas, como fazendeiro, pescador, biólogo, veterinário... Você se acostumou com o convívio com a natureza e os animais e talvez tenha ouvido uma ou outra história de fantasmas ao redor da fogueira. Em algum momento da sua vida, porém, descobriu que muitas dessas histórias são verdadeiras.\n
        Perícias treinadas: Adestramento e Sobrevivência.\n
        Desbravador: Quando faz um teste de Adestramento ou Sobrevivência, você pode gastar 2 PE para receber +5 nesse teste. Além disso, você não sofre penalidade em deslocamento por terreno difícil.`
    },
    {
        id: 32,
        name: "Trambiqueiro",
        info: `Uma vida digna exige muito trabalho, então é melhor nem tentar. Você vivia de pequenos golpes, jogatina ilegal e falcatruas. Certo dia, enganou a pessoa errada; no dia seguinte, se viu servindo à Ordem. Pelo menos agora tem a chance de usar sua lábia para o bem.\n
        Perícias treinadas: Crime e Enganação.\n
        Impostor: Uma vez por cena, você pode gastar 2 PE para substituir um teste de perícia qualquer por um teste de Enganação.`
    },
    {
        id: 33,
        name: "Universitário",
        info: `Você era aluno de uma faculdade. Em sua rotina de estudos, provas e festas, acabou descobrindo algo — talvez um livro amaldiçoado na antiga biblioteca do campus? Por seu achado, foi convocado pela Ordem. Agora, estuda com mais afinco: nesse novo curso, ouviu dizer que as provas podem ser mortais.\n
        Perícias treinadas: Atualidades e Investigação.\n
        Dedicação: Você recebe +1 PE, e mais 1 PE adicional a cada NEX ímpar (15%, 25%...). Além disso, seu limite de PE por turno aumenta em 1 (em NEX 5% seu limite é 2, em NEX 10% é 3 e assim por diante; isso não afeta a DT de seus efeitos).`
    },
    {
        id: 34,
        name: "Vítima",
        info: `Em algum momento de sua vida — infância, juventude ou início da vida adulta — você encontrou o Paranormal... E a experiência não foi nada boa. Você viu os espíritos dos mortos, foi atacado por uma entidade ou mesmo foi sequestrado para ser sacrificado em um ritual impedido no últimomomento. A experiência foi traumática, mas você não se abateu; em vez disso, decidiu lutar para impedir que outros inocentes passem pelo mesmo. E, já tendo sendo vítima do Paranormal, se tornou habilidoso em evitar perigos.\n
        Perícias treinadas: Reflexos e Vontade.\n
        Cicatrizes Psicológicas: Você recebe +1 de Sanidade para cada 5% de NEX.`
    },
]