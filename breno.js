const qs = function(el) {
    return document.querySelector(el);
}
const mainContainer = qs(".mainContainer");

const start = function() {
    mainContainer.innerHTML = `
    <div class="invContainer flexRow">
      <div class="columnContainer  flexColumn">
        <p class="columnName font2" >Lavandaria</p>
        <button class="columnBtn columnLavandaria" onclick="getLavandaria()"></button>
      </div>

      <div class="columnContainer  flexColumn">
        <p class="columnName font2">ETFs</p>
        <button class="columnBtn columnEtf" onclick="getEtf()"></button>
      </div>

      <div class="columnContainer  flexColumn">
        <p class="columnName font2">Criptomoedas</p>
        <button class="columnBtn columnCripto" onclick="getCripto()"></button>
      </div>

      <div class="columnContainer  flexColumn">
        <p class="columnName font2">OLX</p>
        <button class="columnBtn columnOlx" onclick="getOLX()"></button>
      </div>
    </div>
    `
}
const getReturn = function() {
    mainContainer.innerHTML = `
    <h1 class="titulo font2">Invista com inteligência. Construa o seu futuro.</h1>
            <div class="btnContainer">
                <button class="startBtn btn font" onclick="start()">
                    Começar a Investir
                </button>
                <button class="saberBtn btn font" onclick="saber()">
                    Saber Mais
                </button>
            </div>
    `
}
const saber = function(title, subTitle, subSubTitle, mainText) {
    mainContainer.innerHTML = `
    <div class="adicionalData flexColumn">
            <div class="infoPage font">
                Este site foi criado para fazer os investimentos de vários tipos. O objetivo principal
                é facilitar a vida das pessoas e fazé-lo mais comfortavel.

                <h2 class="font">## O que são Investimentos</h2>

                Investir significa aplicar dinheiro, tempo ou recursos em um projeto, negócio ou ativo com o objetivo de obter retorno financeiro no futuro.
                Os investimentos podem assumir diferentes formas, como abrir um negócio, comprar ações de empresas, investir em imóveis ou adquirir ativos digitais.
                O objetivo principal de qualquer investimento é fazer o capital crescer ao longo do tempo.

                <h2 class="font">## Como funciona um Negócio</h2>

                Um negócio funciona através da criação de valor para os clientes.
                Uma empresa oferece um produto ou serviço que resolve um problema ou satisfaz uma necessidade do mercado. Em troca, os clientes pagam por esse produto ou serviço.
                A diferença entre as receitas obtidas e os custos operacionais determina o lucro do negócio.
                Para que um negócio seja sustentável, é necessário gerir bem recursos, controlar despesas e manter uma boa relação com os clientes.

                <h2 class="font">## Tipos de Investimento</h2>

                Existem várias formas de investir, dependendo dos objetivos e do nível de risco que o investidor está disposto a aceitar.

                Alguns exemplos comuns incluem:
                <ul class="font">

                  <li>Investimento em negócios próprios ou startups</li>
                  <li>Ações de empresas cotadas em bolsa</li>
                  <li>Fundos de investimento ou ETFs</li>
                  <li>Imobiliário</li>
                  <li>Criptomoedas</li>
                  <li>Pequenos negócios ou comércio</li>
                </ul>

                Cada tipo de investimento possui características, riscos e potenciais retornos diferentes.


                Investidores geralmente analisam indicadores financeiros para avaliar se um investimento é rentável e sustentável.

                <h2 class="font">## Riscos dos Investimentos</h2>

                Todo investimento envolve algum nível de risco.

                Entre os principais riscos estão:
                <ul class="font">
                  <li>Perda parcial ou total do capital investido  </li>
                  <li>Mudanças no mercado ou na economia  </li>
                  <li>Má gestão do negócio  </li>
                  <li>Concorrência ou redução da procura</li>
                </ul>

                Por esse motivo, é importante estudar bem cada oportunidade antes de investir.

                <h2 class="font">## Importância do Planeamento</h2>

                Antes de realizar qualquer investimento, é fundamental elaborar um plano. Analisar, Ver os custos todos, Avaliação de riscos, etc.


            </div>
            <button class="returnBtn btn font" onclick="getReturn()">
                    Return
            </button>
    </div>
    `
}
const getLavandaria = function () {
  mainContainer.innerHTML = `
 <div class="lavandariaPage flexRow">
      <div class="dataLavandariaContainer flexColumn">
        <div class="dataContainer lavandariaContainer flexColumn">
          <h1 class="titleLavandaria font2">Como abrir uma lavandaria self-service em Portugal</h1>
          <div><p class="mainTxtLavandaria font2">Abrir uma lavandaria self-service pode ser um investimento interessante e relativamente estável.
            No entanto, antes de iniciar este tipo de negócio é importante compreender os passos necessários, os custos envolvidos e os requisitos legais.

            Nesta página apresentamos um guia simples com os principais passos para criar e gerir uma lavandaria em Portugal.</p></div>

        </div>
        <div class=" flexRow listBox ">
          <ol class="planList">
            <li class="font2 lavandariaListText planoBtn" onclick="getPlano()">Criar um plano de negócio.</li>
            <li class="font2 lavandariaListText registarBtn" onclick="getRegister()">Registar a empresa.</li>
            <li class="font2 lavandariaListText licencaBtn" onclick="getLicenca()">Obter licenças e autorizações.</li>
            <li class="font2 lavandariaListText localBtn" onclick="getLocal()">Escolher o local adequado.</li>
            <li class="font2 lavandariaListText equipamentosBtn" onclick="getEquipamento()">Comprar e instalar equipamentos.</li>
            <li class="font2 lavandariaListText segurosBtn" onclick="getSeguros()">Contratar seguros.</li>
            <li class="font2 lavandariaListText gestaoBtn" onclick="getGestao()">Organizar a gestão diária.</li>
            <li class="font2 lavandariaListText promoverBtn" onclick="getMarketing()">Promover o negócio.</li>
          </ol>
          <img class="lavandariaImg" src="lavandariaImg2.jpg">
        </div>
        <button class="btn btnReturn returnBtnLavandaria" onclick="start()">Return</button>
      </div>

    </div>
  `
}
const getPlano = function () {
  mainContainer.innerHTML = `
    <div class="planContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getLavandaria()">×</button>
          <h1 class="font2 titlePlanPage"> Plano de Negócio</h1>

          <p class="font2 subTitlePlan">
            Antes de iniciar qualquer investimento, é essencial elaborar um plano de negócio.
            Este documento permite avaliar a viabilidade do projeto e planear os custos e receitas.
          </p>

          <div class="font2 planTxt">
            O plano deve incluir:
            <p class="font2 subSubTitlePlan">Estudo de mercado</p>
            <ul class="font2 dataPlanList">
              <li>Análise da concorrência</li>
              <li>Projeções financeiras</li>
              <li>Estratégia de preços</li>
              <li>Escolha da localização ideal</li>
            </ul>
          </div>
        </div>
    </div>
  `
}
const getRegister = function () {
  mainContainer.innerHTML = `
    <div class="registerContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getLavandaria()">×</button>
          <h1 class="font2 titlePlanPage">Estrutura Legal da Empresa</h1>

          <p class="font2 subTitlePlan">
            Para operar legalmente em Portugal, é necessário abrir uma atividade ou constituir uma empresa.
          </p>

          <div class="font2 planTxt">
            As opções mais comuns são:
            <ul class="font2 dataPlanList">
              <li>Empresário em Nome Individual</li>
              <li>Sociedade por Quotas (Lda.)</li>
            </ul>
            <p class="font2 subSubTitlePlan">Depois da criação da empresa é necessário:</p>
            <ul class="font2 dataPlanList">
              <li>Obter o NIF da empresa</li>
              <li>Abrir conta bancária empresarial</li>
              <li>Declarar início de atividade nas Finanças</li>
              <li>Registar os beneficiários efetivos</li>
              <li>Contratar um contabilista certificado</li>
            </ul>
          </div>
        </div>
    </div>
  `
}
const getLicenca = function () {
  mainContainer.innerHTML = `
    <div class="licencaContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getLavandaria()">×</button>
          <h1 class="font2 titlePlanPage">Licenças e Autorizações</h1>

          <p class="font2 subTitlePlan">
            Antes de abrir o estabelecimento é necessário comunicar a atividade às autoridades locais.
          </p>

          <div class="font2 planTxt">
            Pode ser necessário:

            <ul class="font2 dataPlanList">
              <li>Comunicação ao município</li>
              <li>Alvará de utilização do espaço</li>
              <li>Licença de publicidade</li>
              <li>Livro de reclamações</li>
              <li>Cumprimento das normas de segurança</li>
            </ul>
          </div>
        </div>
    </div>
  `
}
const getLocal = function () {
  mainContainer.innerHTML = `
    <div class="localContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getLavandaria()">×</button>
          <h1 class="font2 titlePlanPage">Localização do Negócio</h1>

          <p class="font2 subTitlePlan">
            A localização é um fator fundamental para o sucesso de uma lavandaria.
          </p>

          <div class="font2 planTxt">
            É recomendável escolher zonas com:

            <ul class="font2 dataPlanList">
              <li>Muitos apartamentos pequenos</li>
              <li>Estudantes ou turistas</li>
              <li>Elevada densidade populacional</li>
              <li>Boa visibilidade e acesso</li>
            </ul>
            O espaço deve permitir a instalação de máquinas industriais e ter ligação adequada a água, eletricidade e esgoto.
          </div>
        </div>
    </div>
  `
}
const getEquipamento = function () {
  mainContainer.innerHTML = `
    <div class="equipamentoContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getLavandaria()">×</button>
          <h1 class="font2 titlePlanPage">Equipamentos Necessários</h1>

          <p class="font2 subTitlePlan">
            Uma lavandaria self-service necessita de equipamentos específicos:
          </p>

          <div class="font2 planTxt">

            <ul class="font2 dataPlanList">
              <li>Máquinas de lavar industriais</li>
              <li>Secadoras industriais</li>
              <li>Sistema de pagamento automático</li>
              <li>Sistema de monitorização</li>
              <li>Software de gestão</li>
            </ul>
            O investimento inicial pode variar entre 35 000 € e 60 000 € dependendo do tamanho do negócio.
          </div>
        </div>
    </div>
  `
}

const getSeguros = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getLavandaria()">×</button>
          <h1 class="font2 titlePlanPage">Seguros</h1>

          <p class="font2 subTitlePlan">
            Para proteger o negócio é recomendável contratar:
          </p>

          <div class="font2 planTxt">

            <ul class="font2 dataPlanList">
              <li>Seguro de responsabilidade civil</li>
              <li>Seguro do estabelecimento</li>
              <li>Seguro dos equipamentos</li>

            </ul>
            Estes seguros ajudam a proteger o investimento contra acidentes, roubos ou danos.
          </div>
        </div>
    </div>
  `
}
const getGestao = function () {
  mainContainer.innerHTML = `
    <div class="gestaoContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getLavandaria()">×</button>
          <h1 class="font2 titlePlanPage">Gestão do Dia a Dia</h1>

          <p class="font2 subTitlePlan">
            Mesmo sendo um serviço self-service, a lavandaria precisa de gestão regular:
          </p>

          <div class="font2 planTxt">

            <ul class="font2 dataPlanList">
              <li>Limpeza do espaço</li>
              <li>Manutenção das máquinas</li>
              <li>Apoio ao cliente</li>
              <li>Reposição de consumíveis</li>
              <li>Monitorização do funcionamento</li>

            </ul>
          </div>
        </div>
    </div>
  `
}
const getMarketing = function () {
  mainContainer.innerHTML = `
    <div class="marketingContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getLavandaria()">×</button>
          <h1 class="font2 titlePlanPage">Marketing e Divulgação</h1>

          <p class="font2 subTitlePlan">
            Para atrair clientes é importante investir em marketing:
          </p>

          <div class="font2 planTxt">

            <ul class="font2 dataPlanList">
              <li>Presença no Google</li>
              <li>Redes sociais (Facebook, Instagram)</li>
              <li>Website próprio</li>
              <li>Campanhas de inauguração</li>
              <li>Parcerias com hostels ou residências</li>

            </ul>
          </div>
        </div>
    </div>
  `
}

const getEtf = function () {
  mainContainer.innerHTML = `
<div class="etfPage flexRow">
      <div class="dataLavandariaContainer flexColumn">
        <div class="dataContainer lavandariaContainer flexColumn">
          <h1 class="titleLavandaria font2">Investir em ações de diferentes empresas</h1>
          <div>
            <p class="mainTxtLavandaria font2">
                Investir em ações é uma das formas mais populares de participar no crescimento de empresas e aumentar o património ao longo do tempo.

                Quando uma pessoa compra ações, passa a possuir uma pequena parte da empresa.
                Nesta página explicamos os principais passos para começar a investir de forma simples e responsável.
            </p>
          </div>

        </div>
        <div class=" flexRow listBox listEtf">
          <ol class="planList etfList1 font2">
            <li class="font2 lavandariaListText planoBtn" onclick="getAcoes()">Compreender o que são ações.</li>
            <li class="font2 lavandariaListText registarBtn" onclick="getPreparar()">Organizar as finanças pessoais.</li>
            <li class="font2 lavandariaListText licencaBtn" onclick="getEscolha()">Escolher uma corretora.</li>
            <li class="font2 lavandariaListText gestaoBtn" onclick="getErros()">Evitar os erros gerais</li>
            <li class="font2 lavandariaListText localBtn" onclick="getEstrategia()">Começar com pequenos investimentos.</li>
            <li class="font2 lavandariaListText equipamentosBtn" onclick="getDivercao()">Diversificar a carteira.</li>
            <li class="font2 lavandariaListText segurosBtn" onclick="getPrazo()">Pensar no longo prazo.</li>
            <li class="font2 lavandariaListText gestaoBtn" onclick="getImpostos()">Cumprir as obrigações fiscais.</li>

          </ol>
           <img class="EtfImg" src="simulador-de-investimentos-1.jpg">

        </div>
        <button class="btn btnReturn returnBtnLavandaria" onclick="start()">Return</button>
      </div>

    </div>
  `
}

const getErros = function () {
  mainContainer.innerHTML = `
   <div class="flexColumn etfBox font2 planList errosBox">
              <button class="closeBtn" onclick="getEtf()">×</button>
              <h1 class="font2 erroTxt">Erros Gerais</h1>
              <p class="font2 lavandariaListText segurosBtn" onclick="">🚫 investir todo o dinheiro numa única empresa</p>
              <p class="font2 lavandariaListText gestaoBtn" onclick="">🚫 utilizar dinheiro emprestado</p>
              <p class="font2 lavandariaListText gestaoBtn" onclick="">🚫 fazer trading sem conhecimento</p>
              <p class="font2 lavandariaListText gestaoBtn" onclick="">🚫 seguir conselhos não confiáveis nas redes sociais</p>


            </div>`
}
const getAcoes = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getEtf()">×</button>
          <h1 class="font2 titlePlanPage">O que é uma ação</h1>

          <p class="font2 subTitlePlan">
            Uma ação representa uma pequena parte de uma empresa.
          </p>

          <div class="font2 dataPlanList">

              <p>Quando compras ações de uma empresa, tornas-te acionista e participas nos resultados dessa empresa.</p>

              <p>Existem duas formas principais de ganhar dinheiro com ações:</p>

              <p>📈 Valorização do preço da ação (vender mais caro do que compraste)</p>
              <p>💰 Dividendos, que são parte dos lucros distribuídos aos acionistas.</p>

          </div>
        </div>
    </div>
  `
}

const getPreparar = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getEtf()">×</button>
          <h1 class="font2 titlePlanPage">Preparação financeira</h1>

          <p class="font2 subTitlePlan">
            Antes de começar a investir é importante organizar as finanças pessoais.
          </p>

          <div class="font2 planTxt">
            Recomenda-se:
            <ul class="font2 dataPlanList">
              <li>Ter um fundo de emergência (3 a 6 meses de despesas)</li>
              <li>Não investir dinheiro necessário a curto prazo</li>
              <li>Evitar dívidas com juros elevados</li>
            </ul>
            Investimentos em ações devem ser pensados para médio ou longo prazo.
          </div>
        </div>
    </div>
  `
}
const getEscolha = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getEtf()">×</button>
          <h1 class="font2 titlePlanPage">Escolher uma corretora</h1>

          <p class="font2 subTitlePlan">
            Para comprar ações é necessário utilizar uma plataforma de investimento chamada corretora.
          </p>

           <div class="font2 planTxt">
            Algumas corretoras populares utilizadas em Portugal incluem:
            <ul class="font2 dataPlanList">
              <li>Degiro</li>
              <li>XTB</li>
              <li>eToro</li>
              <li>Interactive Brokers</li>
            </ul>
            <p class="font2 subSubTitlePlan">Ao escolher uma corretora é importante analisar:</p>
            <ul class="font2 dataPlanList">
              <li>Comissões</li>
              <li>Custos de manutenção</li>
              <li>Facilidade de utilização</li>
              <li>Segurança e regulação.</li>
            </ul>
          </div>
        </div>
    </div>
  `
}

const getEstrategia = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getEtf()">×</button>
          <h1 class="font2 titlePlanPage">Estratégia simples para iniciantes</h1>

          <p class="font2 subTitlePlan">
            Para comprar ações é necessário utilizar uma plataforma de investimento chamada corretora.
          </p>

           <div class="font2 planTxt">
            <p class="font2 subSubTitlePlan">Uma estratégia comum para iniciantes é investir em ETFs.</p>
            <p class="font2 subSubTitlePlan">Um ETF é um fundo que reúne muitas empresas numa única aplicação.</p>
            Exemplos populares:
            <ul class="font2 dataPlanList">
              <li>S&P 500 (500 maiores empresas dos EUA)</li>
              <li>MSCI World</li>
            </ul>
            <p class="font2 subSubTitlePlan">Desta forma o investidor diversifica o investimento e reduz o risco.</p>
          </div>
        </div>
    </div>
  `
}
const getDivercao = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getEtf()">×</button>
          <h1 class="font2 titlePlanPage">Diversificar os investimentos</h1>

          <p class="font2 subTitlePlan">
            Diversificação significa distribuir o dinheiro por diferentes ativos.
          </p>

           <div class="font2 planTxt">
            Um exemplo simples de carteira para iniciantes pode ser:
            <ul class="font2 dataPlanList">
              <li>70% ETF global</li>
              <li>20% grandes empresas estáveis</li>
              <li>10% empresas com maior risco</li>
            </ul>
            <p class="font2 subSubTitlePlan">Esta estratégia ajuda a reduzir riscos.</p>
          </div>
        </div>
    </div>
  `
}

const getPrazo = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getEtf()">×</button>
          <h1 class="font2 titlePlanPage">Investir a longo prazo</h1>



           <div class="font2 planTxt">
            <p>O mercado financeiro pode subir ou descer no curto prazo.</p>

            <p>Por isso, muitos investidores preferem manter os investimentos durante vários anos.</p>

            <p>Investimentos de longo prazo (10 a 20 anos) tendem a apresentar melhores resultados.</p>

          </div>
        </div>
    </div>
  `
}

const getImpostos = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getEtf()">×</button>
          <h1 class="font2 titlePlanPage">Impostos sobre investimentos</h1>

          <p class="font2 subTitlePlan">
            Em Portugal, os rendimentos provenientes de ações estão sujeitos a impostos.
          </p>

           <div class="font2 planTxt">
            <ul class="font2 dataPlanList">
              <li>Mais-valias: 28%</li>
              <li>Dividendos: 28%</li>
            </ul>
            <p class="font2 subSubTitlePlan">Estes rendimentos devem ser declarados no IRS.</p>
            <p class="font2 subSubTitlePlan">Se utilizares corretoras estrangeiras, a responsabilidade da declaração continua a ser do investidor.</p>
          </div>
        </div>
    </div>
  `
}

const getCripto = function () {
  mainContainer.innerHTML = `
 <div class="lavandariaPage flexRow">
      <div class="dataLavandariaContainer flexColumn">
        <div class="dataContainer lavandariaContainer flexColumn">
          <h1 class="titleLavandaria font2">Investir em criptomoedas</h1>
          <div>
            <p class="mainTxtLavandaria font2">
                As criptomoedas tornaram-se um dos investimentos mais discutidos nos últimos anos.
                São ativos digitais baseados em tecnologia blockchain que permitem transferências e transações sem a necessidade de um intermediário central.
                Nesta página apresentamos os conceitos básicos e os principais passos para quem deseja começar a investir em criptomoedas de forma responsável.
            </p>
          </div>

        </div>
        <div class=" flexRow listBox ">
          <ol class="planList">
            <li class="font2 lavandariaListText planoBtn" onclick="getCriptoExplique()">Compreender o que são criptomoedas.</li>
            <li class="font2 lavandariaListText registarBtn" onclick="getPrepararCripto()">Preparar as finanças pessoais.</li>
            <li class="font2 lavandariaListText licencaBtn" onclick="getPlatforma()">Escolher uma exchange segura.</li>
            <li class="font2 lavandariaListText localBtn" onclick="getPequeInv()">Começar com pequenos investimentos.</li>
            <li class="font2 lavandariaListText equipamentosBtn" onclick="getEstrategiaSimples()">Utilizar estratégias simples como DCA.</li>
            <li class="font2 lavandariaListText segurosBtn" onclick="getSeguranca()">Garantir segurança dos ativos.</li>
            <li class="font2 lavandariaListText segurosBtn" onclick="getDCA()">Método DCA.</li>
            <li class="font2 lavandariaListText gestaoBtn" onclick="getImpostosPortugal()">Impostos em Portugal.</li>
            <li class="font2 lavandariaListText gestaoBtn" onclick="getErrosCripto()">Erros comuns.</li>

          </ol>
          <img class="lavandariaImg" src="criptoImg.jpg">
        </div>
        <button class="btn btnReturn returnBtnLavandaria" onclick="start()">Return</button>
      </div>

    </div>
  `
}
const getCriptoExplique = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getCripto()">×</button>
          <h1 class="font2 titlePlanPage">O que são criptomoedas</h1>

          <p class="font2 subTitlePlan">
            Criptomoedas são ativos digitais descentralizados que utilizam tecnologia blockchain.
          </p>

           <div class="font2 planTxt">
            Alguns exemplos conhecidos incluem:
            <ul class="font2 dataPlanList">
              <li>Bitcoin – a primeira e mais conhecida criptomoeda</li>
              <li>Ethereum – permite a criação de contratos inteligentes</li>
            </ul>
            Ao contrário das ações, as criptomoedas não representam participação numa empresa.
          </div>
        </div>
    </div>
  `
}

const getPrepararCripto = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getCripto()">×</button>
          <h1 class="font2 titlePlanPage">Preparação antes de investir</h1>

          <p class="font2 subTitlePlan">
            O mercado de criptomoedas é conhecido pela sua elevada volatilidade.
          </p>

           <div class="font2 planTxt">
            Antes de começar a investir é recomendável:
            <ul class="font2 dataPlanList">
              <li>Ter um fundo de emergência</li>
              <li>Não investir dinheiro necessário no curto prazo</li>
              <li>Estar preparado para grandes variações de preço</li>
            </ul>
            Criptomoedas são consideradas investimentos de risco elevado.
          </div>
        </div>
    </div>
  `
}
const getPlatforma = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getCripto()">×</button>
          <h1 class="font2 titlePlanPage">Escolher uma plataforma (exchange)</h1>

          <p class="font2 subTitlePlan">
            Para comprar criptomoedas é necessário utilizar uma plataforma chamada exchange.
          </p>

           <div class="font2 planTxt">
            Algumas exchanges populares utilizadas em Portugal incluem:
            <ul class="font2 dataPlanList">
              <li>Binance</li>
              <li>Coinbase</li>
              <li>Kraken</li>
              <li>Bit2Me</li>
            </ul>
            Ao escolher uma plataforma é importante analisar:
            <ul class="font2 dataPlanList">
              <li>Taxas de transação</li>
              <li>Nível de segurança</li>
              <li>Facilidade de utilização</li>
              <li>Regulamentação na União Europeia</li>
            </ul>
          </div>
        </div>
    </div>
  `
}

const getPequeInv = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getCripto()">×</button>
          <h1 class="font2 titlePlanPage">Começar com pequenos investimentos</h1>

          <p class="font2 subTitlePlan">
            Não é necessário investir grandes quantias para começar.
          </p>

           <div class="font2 planTxt">
            Muitos investidores iniciam com valores entre:
            <p class="font2 dataPlanList">
            💰 20€ e 100€ por mês.
            </p>
            Também é possível comprar apenas frações de uma criptomoeda, como no caso do Bitcoin.
          </div>
        </div>
    </div>
  `
}


const getEstrategiaSimples = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getCripto()">×</button>
          <h1 class="font2 titlePlanPage">Estratégia simples para iniciantes</h1>

          <p class="font2 subTitlePlan">
            Para iniciantes, uma estratégia mais conservadora pode ser concentrar o investimento nas criptomoedas maiores.
          </p>

           <div class="font2 planTxt">
            Um exemplo simples:
            <ul class="font2 dataPlanList">
              <li>60% Bitcoin</li>
              <li>30% Ethereum</li>
              <li>10% outras criptomoedas mais conhecidas</li>
            </ul>
            É aconselhável evitar:
            <p class="font2 dataPlanList">🚫Memecoins</p>
            <p class="font2 dataPlanList">🚫Projetos desconhecidos</p>
            <p class="font2 dataPlanList">🚫Promessas de ganhos rápidos.</p>
          </div>
        </div>
    </div>
  `
}
const getErrosCripto = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getCripto()">×</button>
          <h1 class="font2 titlePlanPage">Erros comuns</h1>

           <div class="font2 planTxt">
            Alguns erros comuns:

            <p class="font2 dataPlanList">🚫Comprar apenas porque o preço está a subir</p>
            <p class="font2 dataPlanList">🚫Vender em pânico</p>
            <p class="font2 dataPlanList">🚫Investir todo o dinheiro em criptomoedas</p>
            <p class="font2 dataPlanList">🚫Não proteger passwords</p>
            Investir exige informação e disciplina.
          </div>
        </div>
    </div>
  `
}

const getDCA = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getCripto()">×</button>
          <h1 class="font2 titlePlanPage">Método DCA</h1>

          <p class="font2 subTitlePlan">
            DCA (Dollar Cost Averaging) significa investir o mesmo valor regularmente.
          </p>

           <div class="font2 planTxt">
            Por exemplo:
            <p class="font2 dataPlanList">Investir 50€ todos os meses independentemente do preço.</p>
            Este método ajuda a reduzir o risco de investir apenas quando o mercado está no ponto mais alto.
          </div>
        </div>
    </div>
  `
}

const getSeguranca = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getCripto()">×</button>
          <h1 class="font2 titlePlanPage">Segurança</h1>

          <p class="font2 subTitlePlan">
            A segurança é um fator muito importante no investimento em criptomoedas.
          </p>

           <div class="font2 planTxt">
            Recomendações:
            <p class="font2 dataPlanList">🔐 ativar autenticação de dois fatores (2FA)</p>
            <p class="font2 dataPlanList">🔐 não guardar todas as criptomoedas na exchange</p>
            <p class="font2 dataPlanList">🔐 considerar o uso de carteiras físicas (hardware wallets)</p>
            Exemplo de hardware wallet:
            <ul class="font2 dataPlanList">
              <li>Ledger</li>
            </ul>
          </div>
        </div>
    </div>
  `
}
const getImpostosPortugal = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getCripto()">×</button>
          <h1 class="font2 titlePlanPage">Impostos em Portugal</h1>

           <div class="font2 planTxt">
            Em Portugal, desde 2023:
            <ul class="font2 dataPlanList">
              <li>Se venderes criptomoedas antes de 1 ano → pagas 28% de imposto sobre o lucro</li>
              <li>Se mantiveres mais de 1 ano → normalmente não pagas imposto (para pessoas singulares)</li>
            </ul>
            Os rendimentos devem ser declarados no IRS.
          </div>
        </div>
    </div>
  `
}

const getOLX = function () {
  mainContainer.innerHTML = `
 <div class="lavandariaPage flexRow">
      <div class="dataLavandariaContainer flexColumn">
        <div class="dataContainer lavandariaContainer flexColumn">
          <h1 class="titleLavandaria font2">Ganhar dinheiro com OLX</h1>
          <div>
            <p class="mainTxtLavandaria font2">
               O OLX é uma plataforma online que permite comprar e vender produtos novos ou usados.
               Muitas pessoas utilizam o OLX não apenas para vender objetos que já possuem, mas também como uma forma de iniciar um pequeno negócio.
               Nesta página explicamos como funciona o OLX e quais são as estratégias mais simples para começar.
            </p>
          </div>

        </div>
        <div class=" flexRow listBox ">
          <ol class="planList planListOLX">
            <li class="font2 lavandariaListText planoBtn" onclick="getOLXExplique()">Compreender como funciona o OLX e o processo de venda.</li>
            <li class="font2 lavandariaListText registarBtn" onclick="getEscolhaVenda()">Escolher o que vender (produtos usados, revenda ou produtos novos).</li>
            <li class="font2 lavandariaListText localBtn" onclick="getRevenda()">Comprar produtos baratos e revendê-los com lucro.</li>
            <li class="font2 lavandariaListText equipamentosBtn" onclick="getAnuncios()">Criar anúncios atrativos com boas fotos, título claro e preço competitivo.</li>
            <li class="font2 lavandariaListText segurosBtn" onclick="getSegurancaVendas()">Garantir segurança nas transações e evitar possíveis fraudes.</li>
            <li class="font2 lavandariaListText gestaoBtn" onclick="getCrescer()">Reinvestir os lucros para crescer no negócio.</li>

          </ol>
          <img class="lavandariaImg OLXImg" src="olx.jpeg">
        </div>
        <button class="btn btnReturn returnBtnLavandaria" onclick="start()">Return</button>
      </div>

    </div>
  `
}

const getOLXExplique = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getOLX()">×</button>
          <h1 class="font2 titlePlanPage">Como funciona o OLX</h1>

          <p class="font2 subTitlePlan">
            O OLX funciona como um marketplace onde qualquer pessoa pode vender produtos.
          </p>

           <div class="font2 planTxt">
            O processo é simples:
            <ul class="font2 dataPlanList">
              <li>Publicar anúncios gratuitamente</li>
              <li>Responder a mensagens de compradores interessados</li>
              <li>Combinar entrega ou envio</li>
              <li>Receber o pagamento</li>
            </ul>
            Não é necessário ter empresa para começar, embora seja recomendável legalizar a atividade se as vendas se tornarem regulares.
          </div>
        </div>
    </div>
  `
}
const getEscolhaVenda = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getOLX()">×</button>
          <h1 class="font2 titlePlanPage">Escolher o que vender</h1>

          <p class="font2 subTitlePlan">
            Existem várias formas de começar a vender no OLX.
          </p>

           <div class="font2 planTxt">
            Três estratégias simples incluem:
            <ul class="font2 dataPlanList">
              <li>Vender objetos que já tens</li>
              <li>Comprar produtos baratos e revender</li>
              <li>Vender produtos novos comprados a fornecedores</li>
            </ul>
            Cada método tem diferentes níveis de investimento e risco.
            </div>
        </div>
    </div>
  `
}
const getRevenda = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getOLX()">×</button>
          <h1 class="font2 titlePlanPage">Revenda de produtos</h1>

          <p class="font2 subTitlePlan">
            Outro modelo popular é comprar produtos a um preço baixo e vendê-los por um preço mais alto
          </p>

           <div class="font2 planTxt">
            Exemplos de produtos comuns:
            <ul class="font2 dataPlanList">
              <li>Telemóveis usados</li>
              <li>Consolas</li>
              <li>Ferramentas</li>
              <li>Bicicletas</li>
              <li>Pequenos eletrodomésticos</li>
            </ul>
            O investimento inicial pode variar entre 200€ e 1000€, com margens de lucro entre 20% e 40%.
            </div>
        </div>
    </div>
  `
}
const getAnuncios = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getOLX()">×</button>
          <h1 class="font2 titlePlanPage">Criar bons anúncios</h1>

          <p class="font2 subTitlePlan">
            Um bom anúncio aumenta significativamente a probabilidade de venda.
          </p>

           <div class="font2 planTxt">
            Algumas recomendações:
            <ul class="font2 dataPlanList">
              <li>Utilizar fotos claras e bem iluminadas</li>
              <li>Criar um título direto e informativo</li>
              <li>Escrever uma descrição honesta</li>
              <li>Definir um preço competitivo</li>
            </ul>
            Também é útil analisar anúncios semelhantes antes de publicar.
            </div>
        </div>
    </div>
  `
}
const getSegurancaVendas = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getOLX()">×</button>
          <h1 class="font2 titlePlanPage">Segurança no OLX</h1>

          <p class="font2 subTitlePlan">
            Ao vender online é importante ter atenção a possíveis fraudes.
          </p>

           <div class="font2 planTxt">
            Recomendações:
            <ul class="font2 dataPlanList">
              <li>Nunca enviar produtos sem receber pagamento</li>
              <li>Evitar links suspeitos</li>
              <li>Preferir negócios presenciais quando possível</li>
              <li>Ter atenção a esquemas de falsas transportadoras</li>
            </ul>

            </div>
        </div>
    </div>
  `
}

const getCrescer = function () {
  mainContainer.innerHTML = `
    <div class="segurosContainer flexRow">
        <div class="flexColumn dataPlanBox">
        <button class="closeBtn" onclick="getOLX()">×</button>
          <h1 class="font2 titlePlanPage">Como expandir o negócio</h1>


           <div class="font2 planTxt">
            Depois de ganhar experiência é possível expandir a atividade:
            <ul class="font2 dataPlanList">
              <li>Criar um perfil profissional</li>
              <li>Publicar mais anúncios</li>
              <li>Reinvestir os lucros</li>
              <li>Vender também em outras plataformas</li>
            </ul>
            Exemplos:
            <ul class="font2 dataPlanList">
              <li>Facebook Marketplace</li>
              <li>Vinted</li>
            </ul>
            </div>
        </div>
    </div>
  `
}
