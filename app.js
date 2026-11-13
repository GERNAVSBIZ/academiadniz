// ============================================================================
// TREINAMENTO DE FAMILIARIZAÇÃO AVSEC — NAV BRASIL (DNB / RÁDIO IMPERATRIZ - SBIZ)
// Plataforma LMS Interativa por Seções, Desafios de Bancada, Mito vs. Fato e Trava 3/3
// ============================================================================

const STORAGE_KEY = 'navbrasil_avsec_sbiz_lms_interactive_v2';

// DADOS INTERATIVOS DOS 4 MÓDULOS
const COURSE_MODULES = [
  // ==========================================================================
  // MÓDULO 1 (EXATAMENTE CONFORME ROTEIRO DO USUÁRIO + INTERATIVIDADE RICA)
  // ==========================================================================
  {
    id: 1,
    code: 'MÓDULO 1',
    shortTitle: 'Fundamentos AVSEC, Legislação e SeMS',
    title: 'MÓDULO 1: Fundamentos AVSEC, Legislação e a Cultura SeMS',
    subtitle: 'Domine a diferença prática entre Safety e AVSEC, navegue pelo Guarda-Chuva Normativo do SISCEAB e explore os 4 Pilares do SeMS na NAV Brasil.',
    duration: '25 min',
    normas: ['Decreto nº 11.195/2022', 'DCA 205-7', 'ICA 205-48', 'ICA 800-8', 'ICA 37-733'],
    pills: [
      {
        id: 'm1-p1',
        tabLabel: '📌 Seção 1: Safety vs. AVSEC',
        title: '📌 SEÇÃO 1: Safety vs. AVSEC (Você sabe a diferença?)',
        renderHtml: () => `
          <p style="font-size:0.96rem; margin-bottom:1rem;">
            Na aviação civil, a palavra <strong>"segurança"</strong> possui duas vertentes bem distintas que todo empregado da <strong>NAV Brasil</strong> precisa dominar. Clique nos cartões abaixo para destacar seus focos e, em seguida, resolva o <strong>Desafio Rápido de Bancada</strong>:
          </p>

          <div class="dual-interactive-grid">
            <div class="concept-card safety-card">
              <span class="concept-badge">🛠️ SAFETY (Segurança Operacional)</span>
              <h4 style="font-size:1.08rem; color:var(--nav-navy); margin-bottom:0.5rem;">Prevenção de Falhas Não Intencionais</h4>
              <p style="font-size:0.9rem; color:#334155;">
                Prevenção de acidentes e incidentes decorrentes de <strong>falhas involuntárias</strong>, fatores humanos, condições meteorológicas adversas ou falhas de equipamentos.
              </p>
              <div style="margin-top:0.85rem; padding-top:0.75rem; border-top:1px dashed #CBD5E1; font-size:0.83rem; color:#0369A1;">
                <strong>Exemplos na RDO-IZ:</strong> Desgaste de bateria de nobreak, nevoeiro abaixo do mínimo na pista, erro involuntário de leitura de QNH.
              </div>
            </div>

            <div class="concept-card avsec-card">
              <span class="concept-badge">🛡️ AVSEC / SECURITY (Contra Atos Ilícitos)</span>
              <h4 style="font-size:1.08rem; color:var(--nav-navy); margin-bottom:0.5rem;">Proteção contra Atos Intencionais e Criminosos</h4>
              <p style="font-size:0.9rem; color:#334155;">
                Proteção da infraestrutura, instalações, comunicações, sistemas de missão crítica e pessoas contra <strong>atos intencionais e criminosos</strong> (ex.: invasões, sabotagens, ameaças de bomba, ciberataques).
              </p>
              <div style="margin-top:0.85rem; padding-top:0.75rem; border-top:1px dashed #CBD5E1;">
                <span class="ref-citation">DCA-205-7, p. 10, 11</span>
                <span class="ref-citation">ICA-205-48, p. 18, 25</span>
                <span class="ref-citation">ICA-63-12, p. 47</span>
              </div>
            </div>
          </div>

          <!-- 🎯 DESAFIO RÁPIDO DE BANCADA INTERATIVO -->
          <div class="workbench-challenge" id="wb-m1-p1">
            <div class="workbench-header">
              <span class="workbench-tag">🎯 DESAFIO RÁPIDO DE BANCADA (INTERATIVO)</span>
              <span style="font-size:0.8rem; color:#FDE68A;">Clique na situação correta para testar sua resposta no console</span>
            </div>
            <div class="workbench-scenario">
              <strong>Cenário:</strong> Durante o turno na <strong>RDO-IZ (Imperatriz)</strong>, um Operador identifica duas situações distintas no console.<br>
              ❓ <strong>Qual delas é uma ocorrência estritamente AVSEC? Clique sobre a situação correspondente:</strong>
            </div>

            <div class="scenario-choices">
              <button type="button" class="scenario-choice-btn" id="wb-m1-btn-A" onclick="answerWorkbench('m1', 'A', false)">
                <strong>⚡ Situação A</strong>
                O nobreak da Sala Técnica apresenta uma falha elétrica por desgaste de bateria.
              </button>
              <button type="button" class="scenario-choice-btn" id="wb-m1-btn-B" onclick="answerWorkbench('m1', 'B', true)">
                <strong>🚨 Situação B</strong>
                Um indivíduo não identificado arrombou o portão de acesso ao perímetro do aeródromo e caminha em direção à Estação de Telecomunicações.
              </button>
            </div>

            <div class="workbench-feedback" id="wb-m1-feedback"></div>
          </div>
        `
      },
      {
        id: 'm1-p2',
        tabLabel: '📌 Seção 2: Guarda-Chuva Normativo',
        title: '📌 SEÇÃO 2: O Guarda-Chuva Normativo e a Responsabilidade de Todos',
        renderHtml: () => `
          <p style="font-size:0.95rem; margin-bottom:1rem;">
            A segurança AVSEC no Brasil é regida por uma hierarquia rígida de regulamentos que garantem a soberania do espaço aéreo e a proteção do SISCEAB. <strong>Clique em cada degrau do Guarda-Chuva Normativo abaixo</strong> para inspecionar sua aplicação prática:
          </p>

          <div class="normative-tree-layout">
            <div class="tree-stack">
              <button type="button" class="tree-node-btn active" id="tree-btn-0" onclick="selectNormNode(0)">
                <span class="node-code">📜 Decreto Presidencial nº 11.195/2022</span>
                <span class="node-scope">PNAVSEC (Nacional)</span>
              </button>
              <div class="tree-arrow">│<br>▼</div>
              <button type="button" class="tree-node-btn" id="tree-btn-1" onclick="selectNormNode(1)">
                <span class="node-code">🏛️ DCA 205-7 / DCA 205-6</span>
                <span class="node-scope">Diretriz AVSEC no COMAER</span>
              </button>
              <div class="tree-arrow">│<br>▼</div>
              <button type="button" class="tree-node-btn" id="tree-btn-2" onclick="selectNormNode(2)">
                <span class="node-code">🛡️ ICA 205-48</span>
                <span class="node-scope">PNAVSECCEA (SeMS no SISCEAB)</span>
              </button>
              <div class="tree-arrow">│<br>▼</div>
              <button type="button" class="tree-node-btn" id="tree-btn-3" onclick="selectNormNode(3)">
                <span class="node-code">📡 PES-AVSEC SBIZ / MOp RDO-IZ</span>
                <span class="node-scope">Execução Prática na DNB</span>
              </button>
            </div>

            <div class="tree-detail-box" id="normTreeDetailBox">
              <h4>📜 Decreto Presidencial nº 11.195/2022 ──► PNAVSEC (Âmbito Nacional)</h4>
              <p style="font-size:0.9rem; color:#1E293B; margin-bottom:0.75rem;">
                É o ato normativo máximo do Governo Federal que institui o <strong>Programa Nacional de Segurança da Aviação Civil contra Atos de Interferência Ilícita (PNAVSEC)</strong>. Define responsabilidades entre COMAER, ANAC, Polícia Federal, operadores de aeródromos e provedores de navegação aérea.
              </p>
              <div>
                <span class="ref-citation">CIRCEA-100-56, p. 9</span>
                <span class="ref-citation">DCA-205-7, p. 10, 11</span>
                <span class="ref-citation">PES-AVSEC_2026_01, p. 72</span>
              </div>
            </div>
          </div>

          <!-- 💡 MITO VS. FATO INTERATIVO -->
          <div class="myth-fact-box">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
              <strong style="color:#92400E; font-size:0.95rem;">💡 INTERAÇÃO RÁPIDA: MITO vs. FATO</strong>
              <span style="font-size:0.78rem; color:#B45309;">Julgue a afirmação abaixo clicando em um dos botões:</span>
            </div>
            <div class="myth-fact-statement">
              "Segurança AVSEC é dever exclusivo da Polícia Federal e da Guarda Patrimonial do Aeroporto."
            </div>
            <div class="myth-fact-buttons">
              <button type="button" class="btn-myth" onclick="revealMythFact('m1', true)">❌ ISSO É MITO!</button>
              <button type="button" class="btn-fact" onclick="revealMythFact('m1', false)">✅ ISSO É FATO!</button>
            </div>
            <div class="myth-fact-reveal" id="myth-reveal-m1"></div>
          </div>
        `
      },
      {
        id: 'm1-p3',
        tabLabel: '📌 Seção 3: Os 4 Pilares do SeMS',
        title: '📌 SEÇÃO 3: Estrutura do SeMS (Os 4 Pilares Fundamentais)',
        renderHtml: () => `
          <p style="font-size:0.95rem; margin-bottom:1rem;">
            O <strong>SeMS (Security Management System)</strong> é o sistema de gestão que integra a segurança ao dia a dia da NAV Brasil <span class="ref-citation">ICA-205-48, p. 16, 22</span>. <strong>Clique em cada um dos 4 Pilares abaixo</strong> para explorar sua função e a norma específica que o rege:
          </p>

          <div class="pillars-interactive-grid">
            <button type="button" class="pillar-card-btn active explored" id="pillar-btn-0" onclick="selectSemsPillar(0)">
              <div class="pillar-num">1</div>
              <h4>DIRETRIZ DE SEGURANÇA AVSEC</h4>
              <span class="pillar-norm-pill">DCA 205-7 / ICA 205-48</span>
            </button>

            <button type="button" class="pillar-card-btn" id="pillar-btn-1" onclick="selectSemsPillar(1)">
              <div class="pillar-num">2</div>
              <h4>GERENCIAMENTO DO RISCO AVSEC</h4>
              <span class="pillar-norm-pill">MCA 205-4 / ICA 205-51</span>
            </button>

            <button type="button" class="pillar-card-btn" id="pillar-btn-2" onclick="selectSemsPillar(2)">
              <div class="pillar-num">3</div>
              <h4>GARANTIA DA SEGURANÇA AVSEC</h4>
              <span class="pillar-norm-pill">ICA 800-8 / ESAB</span>
            </button>

            <button type="button" class="pillar-card-btn" id="pillar-btn-3" onclick="selectSemsPillar(3)">
              <div class="pillar-num">4</div>
              <h4>PROMOÇÃO DA SEGURANÇA AVSEC</h4>
              <span class="pillar-norm-pill">ICA 37-733</span>
            </button>
          </div>

          <div class="pillar-spotlight" id="semsPillarSpotlight">
            <h4 style="color:var(--nav-navy); font-size:1.1rem; margin-bottom:0.45rem;">
              1️⃣ DIRETRIZ DE SEGURANÇA AVSEC (Política e Objetivos)
            </h4>
            <p style="font-size:0.93rem; color:#1E293B; margin-bottom:0.65rem;">
              Define a política e os objetivos estratégicos de proteção do SISCEAB, estabelecendo o compromisso da Alta Direção e as responsabilidades orgânicas (normatizada na <strong>DCA 205-7</strong> e <strong>ICA 205-48</strong>).
            </p>
            <div>
              <span class="ref-citation">DCA-205-7, p. 10, 12</span>
              <span class="ref-citation">ICA-205-48, p. 19</span>
            </div>
          </div>
        `
      }
    ],
    quiz: [
      {
        id: 'm1q1',
        question: 'Questão 1: Qual é o ato normativo do Governo Federal que institui o Programa Nacional de Segurança da Aviação Civil contra Atos de Interferência Ilícita (PNAVSEC) no Brasil?',
        options: [
          'ICA 205-48.',
          'Decreto nº 11.195/2022.',
          'CIRCEA 100-56.',
          'Portaria ANAC nº 1.359.'
        ],
        correctIndex: 1,
        comment: 'Letra B. O Decreto Presidencial nº 11.195/2022 é o pilar jurídico nacional que disciplina o PNAVSEC e fundamenta todas as normas do COMAER/DECEA [CIRCEA-100-56.pdf, passage 9; DCA-205-7.pdf, passage 10, 11; PES-AVSEC_2026_01.pdf, passage 72].'
      },
      {
        id: 'm1q2',
        question: 'Questão 2: O pilar do Sistema de Gestão AVSEC (SeMS) responsável por verificar o nível de aderência às normas por meio de Vistorias, Auditorias e Exercícios Simulados (conforme a ICA 800-8) é denominado:',
        options: [
          'Diretriz de Segurança AVSEC.',
          'Promoção da Segurança AVSEC.',
          'Garantia da Segurança AVSEC.',
          'Gerenciamento do Risco AVSEC.'
        ],
        correctIndex: 2,
        comment: 'Letra C. A Garantia da Segurança AVSEC engloba o Controle de Qualidade (auditorias, vistorias, testes e simulados) para atestar a eficácia dos procedimentos de proteção [ICA-205-48.pdf, passage 20, 25; ICA-800-8.pdf, passage 54, 60].'
      },
      {
        id: 'm1q3',
        question: 'Questão 3: Assinale a alternativa que apresenta um exemplo correto de ato de interferência ilícita enquadrado no escopo de atuação AVSEC:',
        options: [
          'Erro na leitura de ajuste de altímetro (QNH) informado pela Rádio.',
          'Formação de nevoeiro denso reduzindo a visibilidade da pista abaixo do mínimo operacional.',
          'Comunicação de falsa informação de bomba a bordo que coloque em risco a segurança da aeronave.',
          'Desgaste natural das antenas de transmissão VHF da estação de telecomunicações.'
        ],
        correctIndex: 2,
        comment: 'Letra C. A comunicação falsa de ameaça de bomba é um ato intencional criminoso capitulado na legislação AVSEC (ICA 800-8 e CIRCEA 100-56) [CIRCEA-100-56.pdf, passage 9; ICA-800-8.pdf, passage 56]. As demais opções tratam de fatores operacionais ou meteorológicos (Safety).'
      }
    ]
  },

  // ==========================================================================
  // MÓDULO 2: CONTROLE DE ACESSO, CREDENCIAMENTO E CAMADAS DE DEFESA (INTERATIVO)
  // ==========================================================================
  {
    id: 2,
    code: 'MÓDULO 2',
    shortTitle: 'Controle de Acesso, Credenciamento e Camadas',
    title: 'MÓDULO 2: Controle de Acesso, Credenciamento e Camadas de Defesa',
    subtitle: 'Explore interativamente as 3 Camadas de Defesa da DNB Imperatriz (SBIZ / RDO-IZ), domine a ICA 63-14 e treine a abordagem a pessoas não identificadas na ARS.',
    duration: '25 min',
    normas: ['ICA 63-14', 'PES-AVSEC SBIZ', 'IT Local DNB-IZ', 'ICA 205-48'],
    pills: [
      {
        id: 'm2-p1',
        tabLabel: '📌 Seção 1: As 3 Camadas de Defesa',
        title: '📌 SEÇÃO 1: As 3 Camadas de Defesa da DNB em Imperatriz (SBIZ / RDO-IZ)',
        renderHtml: () => `
          <p style="font-size:0.95rem; margin-bottom:1rem;">
            A proteção física da RDO-IZ adota o conceito de <strong>Defesa em Profundidade</strong>. <strong>Clique em cada uma das 3 Camadas abaixo</strong> para inspecionar os limites físicos e o nível de restrição na dependência de Imperatriz:
          </p>

          <div class="pillars-interactive-grid">
            <button type="button" class="pillar-card-btn active explored" id="layer-btn-0" onclick="selectDefenseLayer(0)">
              <div class="pillar-num">1ª</div>
              <h4>1ª CAMADA: ÁREA PÚBLICA</h4>
              <span class="pillar-norm-pill">Externa / Sem Controle Prévio</span>
            </button>
            <button type="button" class="pillar-card-btn" id="layer-btn-1" onclick="selectDefenseLayer(1)">
              <div class="pillar-num">2ª</div>
              <h4>2ª CAMADA: ÁREA CONTROLADA</h4>
              <span class="pillar-norm-pill">Perímetro Patrimonial DNB-IZ</span>
            </button>
            <button type="button" class="pillar-card-btn" id="layer-btn-2" onclick="selectDefenseLayer(2)">
              <div class="pillar-num" style="background:var(--danger); color:#FFF;">3ª</div>
              <h4>3ª CAMADA: ÁREA RESTRITA (ARS)</h4>
              <span class="pillar-norm-pill">Sala AFIS • Sala Técnica • Telecom</span>
            </button>
          </div>

          <div class="pillar-spotlight" id="defenseLayerSpotlight">
            <h4 style="color:var(--nav-navy); font-size:1.08rem; margin-bottom:0.45rem;">
              1ª Camada de Defesa: Área Pública
            </h4>
            <p style="font-size:0.92rem; color:#1E293B;">
              Compreende as vias externas de acesso e áreas abertas ao público no entorno do sítio aeroportuário de Imperatriz (SBIZ). Não há controle prévio de identificação individual, sendo protegida por barreiras perimetrais (muros, alambrados, iluminação de segurança e avisos ostensivos).
            </p>
          </div>
        `
      },
      {
        id: 'm2-p2',
        tabLabel: '📌 Seção 2: Credenciamento (ICA 63-14)',
        title: '📌 SEÇÃO 2: Normas de Credenciamento e Crachás de Acesso (ICA 63-14)',
        renderHtml: () => `
          <p style="font-size:0.95rem; margin-bottom:1rem;">
            A publicação do DECEA que disciplina os modelos, categorias e regras de credenciamento no âmbito do SISCEAB é a <strong>ICA 63-14</strong>, aplicada localmente pelo PES-AVSEC SBIZ e IT da dependência.
          </p>

          <div class="dual-interactive-grid">
            <div class="concept-card safety-card">
              <span class="concept-badge">🪪 Uso Ostensivo e Intransferível</span>
              <h4 style="font-size:1.02rem; color:var(--nav-navy); margin-bottom:0.4rem;">Regras para Empregados NAV Brasil</h4>
              <ul style="padding-left:1.2rem; font-size:0.88rem; color:#334155;">
                <li>Porte obrigatório em local visível, <strong>acima da linha da cintura (altura do peito)</strong>;</li>
                <li>Credencial estritamente pessoal — proibido ceder crachá ou abrir porta restrita para caronas (<em>tailgating</em>);</li>
                <li>Extravio ou furto exige comunicação imediata à Gerência e registro de RELSEC.</li>
              </ul>
            </div>

            <div class="concept-card avsec-card">
              <span class="concept-badge">👷 Visitantes e Terceirizados na ARS</span>
              <h4 style="font-size:1.02rem; color:var(--nav-navy); margin-bottom:0.4rem;">Inspeção e Escolta Obrigatória</h4>
              <ul style="padding-left:1.2rem; font-size:0.88rem; color:#334155;">
                <li>Cadastro prévio mediante documento oficial com foto e entrega de credencial de Visitante/Serviço;</li>
                <li>Na <strong>3ª Camada (ARS — Sala AFIS / Sala Técnica)</strong>, o prestador ou visitante deve permanecer <strong>100% do tempo acompanhado (escoltado)</strong> por empregado efetivo credenciado.</li>
              </ul>
            </div>
          </div>

          <div class="myth-fact-box">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
              <strong style="color:#92400E; font-size:0.95rem;">💡 INTERAÇÃO RÁPIDA: MITO vs. FATO (ICA 63-14)</strong>
              <span style="font-size:0.78rem; color:#B45309;">Clique para validar:</span>
            </div>
            <div class="myth-fact-statement">
              "Se um técnico terceirizado de ar-condicionado já é conhecido da equipe há anos, ele pode ficar sozinho na Sala Técnica da RDO-IZ sem crachá e sem acompanhamento."
            </div>
            <div class="myth-fact-buttons">
              <button type="button" class="btn-myth" onclick="revealMythFact('m2', true)">❌ ISSO É MITO!</button>
              <button type="button" class="btn-fact" onclick="revealMythFact('m2', false)">✅ ISSO É FATO!</button>
            </div>
            <div class="myth-fact-reveal" id="myth-reveal-m2"></div>
          </div>
        `
      },
      {
        id: 'm2-p3',
        tabLabel: '📌 Seção 3: Desafio na ARS',
        title: '📌 SEÇÃO 3: Desafio a Pessoas Não Identificadas na ARS (Challenge)',
        renderHtml: () => `
          <p style="font-size:0.95rem; margin-bottom:1rem;">
            Todo colaborador credenciado na 3ª Camada (ARS) possui o dever de aplicar o <strong>Procedimento de Desafio (Abordagem Cortês)</strong> ao avistar qualquer pessoa sem credencial visível. Resolva o simulador de bancada abaixo:
          </p>

          <div class="workbench-challenge" id="wb-m2-p3">
            <div class="workbench-header">
              <span class="workbench-tag">🎯 DESAFIO RÁPIDO DE BANCADA — CONTROLE DE ACESSO ARS</span>
              <span style="font-size:0.8rem; color:#FDE68A;">Tome a decisão operacional correta</span>
            </div>
            <div class="workbench-scenario">
              <strong>Cenário:</strong> Ao sair da Sala Operacional AFIS em direção à Sala Técnica da RDO-IZ, você encontra uma pessoa sem crachá visível mexendo próxima ao bastidor de telecomunicações.<br>
              ❓ <strong>Qual é a sua atitude imediata segundo a ICA 63-14 e o PES-AVSEC?</strong>
            </div>

            <div class="scenario-choices">
              <button type="button" class="scenario-choice-btn" id="wb-m2-btn-A" onclick="answerWorkbench('m2', 'A', false)">
                <strong>🙈 Situação A (Omissão)</strong>
                Passar direto sem perguntar nada para evitar constrangimento, supondo que alguém da recepção já tenha autorizado.
              </button>
              <button type="button" class="scenario-choice-btn" id="wb-m2-btn-B" onclick="answerWorkbench('m2', 'B', true)">
                <strong>🛑 Situação B (Abordagem / Desafio AVSEC)</strong>
                Abordar com cortesia e firmeza (desafiar a identificação), não permitir permanência desacompanhada na ARS e comunicar imediatamente à Gerência/Agente AVSEC.
              </button>
            </div>

            <div class="workbench-feedback" id="wb-m2-feedback"></div>
          </div>
        `
      }
    ],
    quiz: [
      {
        id: 'm2q1',
        question: 'Questão 1: A Sala AFIS e a Sala Técnica da RDO-IZ pertencem a qual camada de defesa da dependência?',
        options: [
          '1ª Camada — Área Pública de Livre Circulação.',
          '2ª Camada — Área Comercial de Concessão.',
          '3ª Camada — Área Restrita de Segurança / ARS.',
          'Camada Externa — Zona de Proteção Paisagística.'
        ],
        correctIndex: 2,
        comment: 'Letra C. A Sala AFIS, a Sala Técnica e a Estação de Telecomunicações abrigam os sistemas críticos de navegação aérea e compõem a 3ª Camada de Defesa: Área Restrita de Segurança (ARS).'
      },
      {
        id: 'm2q2',
        question: 'Questão 2: Qual a atitude correta ao identificar uma pessoa sem crachá visível dentro da área restrita?',
        options: [
          'Ignorar a situação caso a pessoa esteja vestida com uniforme de manutenção.',
          'Abordar com cortesia/desafiar a identificação e comunicar imediatamente à Gerência/Agente AVSEC.',
          'Aguardar o término do turno operacional para comentar informalmente com o colega seguinte.',
          'Entregar seu próprio crachá temporariamente para que a pessoa conclua o serviço.'
        ],
        correctIndex: 1,
        comment: 'Letra B. O Procedimento de Desafio exige abordar com cortesia para verificar a credencial, impedir a circulação desacompanhada na ARS e acionar imediatamente a Gerência/Responsável AVSEC.'
      },
      {
        id: 'm2q3',
        question: 'Questão 3: Qual publicação do DECEA disciplina os modelos e regras de credenciamento no SISCEAB?',
        options: [
          'ICA 63-14.',
          'ICA 100-12.',
          'MCA 105-2.',
          'FCA 58-1.'
        ],
        correctIndex: 0,
        comment: 'Letra A. A ICA 63-14 é a Instrução do Comando da Aeronáutica que padroniza os modelos e regras de credenciamento e controle de acesso nas organizações do SISCEAB.'
      }
    ]
  },

  // ==========================================================================
  // MÓDULO 3: AMEAÇAS, PROTEÇÃO NBQR/BNQR E CIBERSEGURANÇA (INTERATIVO)
  // ==========================================================================
  {
    id: 3,
    code: 'MÓDULO 3',
    shortTitle: 'Ameaças, Defesa NBQR/BNQR e Cibersegurança',
    title: 'MÓDULO 3: Identificação de Ameaças, Proteção NBQR/BNQR e Cibersegurança',
    subtitle: 'Simule a reação primária diante de artefatos suspeitos/NBQR, aplique as regras de Cibersegurança da ICA 205-48 (Item 8.2) e gerencie o risco de Drones/UAS em SBIZ.',
    duration: '30 min',
    normas: ['ICA 205-48 (Item 8.2)', 'Defesa NBQR / BNQR', 'Controle UAS / Drones'],
    pills: [
      {
        id: 'm3-p1',
        tabLabel: '📌 Seção 1: Ameaças e Defesa NBQR/BNQR',
        title: '📌 SEÇÃO 1: Reconhecimento de Ameaças Físicas e Defesa NBQR / BNQR',
        renderHtml: () => `
          <p style="font-size:0.95rem; margin-bottom:1rem;">
            Ameaças físicas incluem pacotes abandonados, sabotagem em cabos/energia e artefatos contendo agentes <strong>NBQR / BNQR (Biológico, Nuclear, Químico e Radiológico)</strong>. Clique nos botões do protocolo abaixo para inspecionar a conduta correta:
          </p>

          <div class="pillars-interactive-grid">
            <button type="button" class="pillar-card-btn active explored" id="nbqr-btn-0" onclick="selectNbqrStep(0)">
              <div class="pillar-num" style="background:var(--danger); color:#FFF;">1</div>
              <h4>NÃO TOCAR / NÃO MOVER</h4>
              <span class="pillar-norm-pill">Regra Primária Absoluta</span>
            </button>
            <button type="button" class="pillar-card-btn" id="nbqr-btn-1" onclick="selectNbqrStep(1)">
              <div class="pillar-num">2</div>
              <h4>ISOLAR PERÍMETRO IMEDIATO</h4>
              <span class="pillar-norm-pill">Conter Dispersão / Onda de Choque</span>
            </button>
            <button type="button" class="pillar-card-btn" id="nbqr-btn-2" onclick="selectNbqrStep(2)">
              <div class="pillar-num">3</div>
              <h4>ZERO RADIOFREQUÊNCIA PRÓXIMA</h4>
              <span class="pillar-norm-pill">Afaste Rádios HT e Celulares</span>
            </button>
            <button type="button" class="pillar-card-btn" id="nbqr-btn-3" onclick="selectNbqrStep(3)">
              <div class="pillar-num">4</div>
              <h4>ACIONAR AUTORIDADES</h4>
              <span class="pillar-norm-pill">Gerência • APOC • PF • Bombeiros</span>
            </button>
          </div>

          <div class="pillar-spotlight" id="nbqrSpotlight">
            <h4 style="color:var(--danger-dark); font-size:1.08rem; margin-bottom:0.45rem;">
              1️⃣ Ação Primária: NÃO TOCAR, NÃO ABRIR E NÃO INALAR
            </h4>
            <p style="font-size:0.92rem; color:#1E293B;">
              Diante de qualquer pacote suspeito, pó desconhecido, líquido incomum ou recipiente abandonado próximo à RDO-IZ, <strong>jamais toque, sacuda ou tente abrir o artefato</strong>. Qualquer manipulação pode acionar uma espoleta ou dispersar agentes biológicos/químicos no ambiente operacional.
            </p>
          </div>
        `
      },
      {
        id: 'm3-p2',
        tabLabel: '📌 Seção 2: Cibersegurança (ICA 205-48)',
        title: '📌 SEÇÃO 2: Proteção de Sistemas Críticos e Cibersegurança (ICA 205-48, Item 8.2)',
        renderHtml: () => `
          <p style="font-size:0.95rem; margin-bottom:1rem;">
            Conforme o <strong>Item 8.2 da ICA 205-48</strong>, os consoles operacionais AFIS, servidores de gravação, enlaces de dados e redes do SISCEAB são <strong>Sistemas Críticos de Missão</strong>. Teste sua reação no Desafio de Bancada Cibernético abaixo:
          </p>

          <div class="workbench-challenge" id="wb-m3-p2">
            <div class="workbench-header">
              <span class="workbench-tag">🎯 DESAFIO RÁPIDO DE BANCADA — CIBERSEGURANÇA (ICA 205-48, Item 8.2)</span>
              <span style="font-size:0.8rem; color:#FDE68A;">Proteja os consoles operacionais da RDO-IZ</span>
            </div>
            <div class="workbench-scenario">
              <strong>Cenário:</strong> Durante o plantão na Sala AFIS de Imperatriz, a bateria do seu smartphone está em 2% e você também trouxe um <em>pen drive</em> pessoal com arquivos para imprimir. A porta USB do console operacional do SISCEAB está livre.<br>
              ❓ <strong>Qual é a conduta exigida pela ICA 205-48 (Item 8.2)?</strong>
            </div>

            <div class="scenario-choices">
              <button type="button" class="scenario-choice-btn" id="wb-m3-btn-A" onclick="answerWorkbench('m3', 'A', false)">
                <strong>🔌 Situação A</strong>
                Conectar o celular e o pen drive na porta USB do console operacional rapidamente, pois serve apenas para recarga e leitura simples.
              </button>
              <button type="button" class="scenario-choice-btn" id="wb-m3-btn-B" onclick="answerWorkbench('m3', 'B', true)">
                <strong>🛡️ Situação B</strong>
                Jamais conectar dispositivos USB, celulares ou mídias removíveis não homologadas em consoles operacionais/servidores do SISCEAB, prevenindo malware e intrusão lógica.
              </button>
            </div>

            <div class="workbench-feedback" id="wb-m3-feedback"></div>
          </div>
        `
      },
      {
        id: 'm3-p3',
        tabLabel: '📌 Seção 3: Riscos de Drones / UAS',
        title: '📌 SEÇÃO 3: Operação Não Autorizada de Drones / UAS em SBIZ',
        renderHtml: () => `
          <p style="font-size:0.95rem; margin-bottom:1rem;">
            A presença de <strong>Drones / UAS (Aeronaves Remotamente Pilotadas)</strong> sem autorização SARPAS/DECEA na zona de aproximação de Imperatriz (SBIZ) ou sobre as antenas da RDO-IZ é uma ocorrência grave que exige pronta resposta.
          </p>

          <div class="dual-interactive-grid">
            <div class="concept-card safety-card">
              <span class="concept-badge">✈️ Impacto Safety</span>
              <h4 style="font-size:1.02rem; color:var(--nav-navy); margin-bottom:0.4rem;">Risco de Colisão em Voo</h4>
              <p style="font-size:0.88rem; color:#334155;">
                Ameaça direta às aeronaves na final de aproximação ou decolagem em SBIZ, exigindo informação imediata de tráfego na frequência <strong>VHF 125.65 MHz</strong>.
              </p>
            </div>
            <div class="concept-card avsec-card">
              <span class="concept-badge">🕵️ Impacto AVSEC</span>
              <h4 style="font-size:1.02rem; color:var(--nav-navy); margin-bottom:0.4rem;">Vigilância Hostil ou Sabotagem</h4>
              <p style="font-size:0.88rem; color:#334155;">
                Reconhecimento ilícito de instalações críticas da DNB, interferência eletromagnética deliberada ou lançamento de artefatos sobre o sítio aeroportuário.
              </p>
            </div>
          </div>

          <div class="myth-fact-box">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
              <strong style="color:#92400E; font-size:0.95rem;">💡 INTERAÇÃO RÁPIDA: MITO vs. FATO (DRONES EM SBIZ)</strong>
              <span style="font-size:0.78rem; color:#B45309;">Julgue a afirmação:</span>
            </div>
            <div class="myth-fact-statement">
              "Drones pequenos voando sem autorização perto da cabeceira da pista de SBIZ são apenas brinquedos recreativos e não precisam ser reportados ao controle nem ao APOC."
            </div>
            <div class="myth-fact-buttons">
              <button type="button" class="btn-myth" onclick="revealMythFact('m3', true)">❌ ISSO É MITO!</button>
              <button type="button" class="btn-fact" onclick="revealMythFact('m3', false)">✅ ISSO É FATO!</button>
            </div>
            <div class="myth-fact-reveal" id="myth-reveal-m3"></div>
          </div>
        `
      }
    ],
    quiz: [
      {
        id: 'm3q1',
        question: 'Questão 1: Em relação à Defesa NBQR/BNQR, qual a ação primária do operador ao identificar um artefato com suspeita de contaminação?',
        options: [
          'Abrir o pacote cuidadosamente na Sala Técnica para verificar o conteúdo antes de gerar alarme.',
          'Transportar o artefato em veículo próprio até a delegacia mais próxima.',
          'Não tocar, isolar a área imediata e acionar as autoridades competentes.',
          'Lavar o artefato com água corrente e descartá-lo no lixo comum do aeródromo.'
        ],
        correctIndex: 2,
        comment: 'Letra C. Diante de suspeita NBQR/BNQR ou explosivo, a regra primária é NÃO TOCAR, isolar imediatamente a área e acionar as autoridades competentes (Gerência, APOC, Polícia Federal e Bombeiros).'
      },
      {
        id: 'm3q2',
        question: 'Questão 2: A proteção contra ataques cibernéticos a consoles operacionais e redes do SISCEAB é regulamentada por qual norma?',
        options: [
          'ICA 205-48.',
          'Código Brasileiro de Trânsito Terrestre.',
          'Manual de Serviços de Bordo da Aviação Comercial.',
          'Portaria de Tarifas Aeroportuárias.'
        ],
        correctIndex: 0,
        comment: 'Letra A. A ICA 205-48 (especialmente em seu Item 8.2) regulamenta a proteção de Sistemas Críticos de Missão e a cibersegurança no âmbito do SISCEAB.'
      },
      {
        id: 'm3q3',
        question: 'Questão 3: Como deve ser tratada a presença de drones não autorizados na zona de aproximação de SBIZ?',
        options: [
          'Como evento recreativo irrelevante que não exige comunicação às aeronaves ou ao APOC.',
          'Como uma ameaça à segurança operacional e física, reportando imediatamente aos órgãos de controle e APOC.',
          'Como atividade exclusiva de aeromodelismo autorizada automaticamente sem cadastro no SARPAS.',
          'Apenas como curiosidade fotográfica, sem necessidade de registro no Livro de Rádio ou RELSEC.'
        ],
        correctIndex: 1,
        comment: 'Letra B. Drones não autorizados representam risco simultâneo Safety e AVSEC, exigindo alerta imediato às aeronaves e reporte aos órgãos de controle (ACC-AZ) e APOC.'
      }
    ]
  },

  // ==========================================================================
  // MÓDULO 4: PROCEDIMENTOS DE CONTINGÊNCIA (ESAB, EVACUAÇÃO E REASSUNÇÃO)
  // ==========================================================================
  {
    id: 4,
    code: 'MÓDULO 4',
    shortTitle: 'Contingência: ESAB, Evacuação e Reassunção',
    title: 'MÓDULO 4: Procedimentos de Contingência (ESAB, Evacuação e Reassunção)',
    subtitle: 'Pratique o Anexo G da CIRCEA 100-56/2025 (ESAB), a cadeia de acionamento (VHF 125.65 MHz, ACC-AZ TF-2, CGNA, APOC, PF), Evacuação ao PE (Ponto de Encontro) e RELSEC no SGAVSEC em 24h.',
    duration: '30 min',
    normas: ['CIRCEA 100-56/2025 (Anexo G)', 'VHF 125.65 MHz / TF-2', 'PE & Reassunção', 'RELSEC SGAVSEC (24h)'],
    pills: [
      {
        id: 'm4-p1',
        tabLabel: '📌 Seção 1: ESAB (Anexo G) e Acionamentos',
        title: '📌 SEÇÃO 1: ESAB (Anexo G da CIRCEA 100-56/2025) e Cadeia de Acionamento',
        renderHtml: () => `
          <p style="font-size:0.95rem; margin-bottom:1rem;">
            No recebimento de uma ameaça de bomba (real ou em <strong>Exercício Simulado de Ameaça de Bomba — ESAB</strong>), o operador utiliza imediatamente o <strong>Questionário Padrão do Anexo G da CIRCEA 100-56/2025</strong> e executa o protocolo de comunicações da RDO-IZ. <strong>Clique em cada passo da cadeia operacional abaixo:</strong>
          </p>

          <div class="pillars-interactive-grid">
            <button type="button" class="pillar-card-btn active explored" id="esab-btn-0" onclick="selectEsabStep(0)">
              <div class="pillar-num">1</div>
              <h4>ANEXO G (CIRCEA 100-56/2025)</h4>
              <span class="pillar-norm-pill">Questionário de Ameaça de Bomba</span>
            </button>
            <button type="button" class="pillar-card-btn" id="esab-btn-1" onclick="selectEsabStep(1)">
              <div class="pillar-num">2</div>
              <h4>FONIA VHF 125.65 MHz</h4>
              <span class="pillar-norm-pill">Frequência AFIS Imperatriz</span>
            </button>
            <button type="button" class="pillar-card-btn" id="esab-btn-2" onclick="selectEsabStep(2)">
              <div class="pillar-num">3</div>
              <h4>ACC-AZ (TF-2) e CGNA</h4>
              <span class="pillar-norm-pill">Coordenação ATS / ATFM</span>
            </button>
            <button type="button" class="pillar-card-btn" id="esab-btn-3" onclick="selectEsabStep(3)">
              <div class="pillar-num">4</div>
              <h4>APOC e POLÍCIA FEDERAL</h4>
              <span class="pillar-norm-pill">Resposta de Segurança e Varredura</span>
            </button>
          </div>

          <div class="pillar-spotlight" id="esabSpotlight">
            <h4 style="color:var(--nav-navy); font-size:1.08rem; margin-bottom:0.45rem;">
              1️⃣ Aplicação do Anexo G da CIRCEA 100-56/2025
            </h4>
            <p style="font-size:0.92rem; color:#1E293B;">
              O <strong>Anexo G da CIRCEA 100-56/2025</strong> estabelece o questionário padrão para coleta máxima de dados do ameaçador: <em>"Onde está a bomba?", "Quando vai explodir?", "Qual o formato/aparência?", "Qual aeronave ou instalação é o alvo?"</em>, além do registro de características da voz, ruídos de fundo e número chamador (BINA).
            </p>
          </div>
        `
      },
      {
        id: 'm4-p2',
        tabLabel: '📌 Seção 2: Evacuação e PE (Headcount)',
        title: '📌 SEÇÃO 2: Evacuação AVSEC vs. Evacuação SMS/SGSO e Ponto de Encontro (PE)',
        renderHtml: () => `
          <p style="font-size:0.95rem; margin-bottom:1rem;">
            Você sabia que uma evacuação por <strong>Ameaça de Bomba (AVSEC)</strong> possui diferenças importantes em relação a uma evacuação por <strong>Incêndio (SMS/SGSO)</strong>? Compare abaixo:
          </p>

          <div class="dual-interactive-grid">
            <div class="concept-card avsec-card">
              <span class="concept-badge">💣 Evacuação AVSEC (Ameaça Ilícita / Bomba)</span>
              <h4 style="font-size:1.02rem; color:var(--nav-navy); margin-bottom:0.4rem;">Abandono Ordenado + Pertences Pessoais</h4>
              <ul style="padding-left:1.2rem; font-size:0.88rem; color:#334155;">
                <li>Observação visual rápida do próprio posto de trabalho (sem tocar em objetos suspeitos);</li>
                <li>Cada colaborador leva consigo sua mochila/bolsa pessoal (reduz falsos alarmes durante a varredura antibombas da PF);</li>
                <li>Deslocamento seguro ao <strong>Ponto de Encontro (PE)</strong> e realização obrigatória da <strong>contagem nominal (<em>headcount</em>)</strong>.</li>
              </ul>
            </div>

            <div class="concept-card safety-card">
              <span class="concept-badge">🔥 Evacuação SMS / SGSO (Incêndio / Sinistro)</span>
              <h4 style="font-size:1.02rem; color:var(--nav-navy); margin-bottom:0.4rem;">Abandono Imediato Contra Chamas/Fumaça</h4>
              <ul style="padding-left:1.2rem; font-size:0.88rem; color:#334155;">
                <li>Saída imediata sem recolher pertences pessoais;</li>
                <li>Fechamento de portas corta-fogo (sem trancar) para abafar o foco de incêndio;</li>
                <li>Reunião no <strong>Ponto de Encontro (PE)</strong> externo e contagem nominal (<em>headcount</em>) para o Corpo de Bombeiros.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: 'm4-p3',
        tabLabel: '📌 Seção 3: Reassunção e RELSEC (24h)',
        title: '📌 SEÇÃO 3: Reassunção do Serviço ("Área Segura") e RELSEC no SGAVSEC (Até 24h)',
        renderHtml: () => `
          <p style="font-size:0.95rem; margin-bottom:1rem;">
            Após uma evacuação AVSEC, o retorno à Sala AFIS e Sala Técnica obedece a um rito rigoroso. Resolva o Desafio Rápido de Bancada abaixo:
          </p>

          <div class="workbench-challenge" id="wb-m4-p3">
            <div class="workbench-header">
              <span class="workbench-tag">🎯 DESAFIO RÁPIDO DE BANCADA — REASSUNÇÃO E RELSEC</span>
              <span style="font-size:0.8rem; color:#FDE68A;">Valide o protocolo de retorno à operação normal</span>
            </div>
            <div class="workbench-scenario">
              <strong>Cenário:</strong> A equipe da RDO-IZ está reunida no <strong>Ponto de Encontro (PE)</strong> após uma evacuação por ameaça de bomba. Passaram-se 20 minutos e aparentemente não houve explosão.<br>
              ❓ <strong>Quando a equipe pode reentrar na instalação para reassumir o serviço e qual o prazo do RELSEC no portal SGAVSEC?</strong>
            </div>

            <div class="scenario-choices">
              <button type="button" class="scenario-choice-btn" id="wb-m4-btn-A" onclick="answerWorkbench('m4', 'A', false)">
                <strong>🏃 Situação A</strong>
                Reentrar por conta própria após 20 minutos de silêncio e enviar o RELSEC somente no fechamento do mês.
              </button>
              <button type="button" class="scenario-choice-btn" id="wb-m4-btn-B" onclick="answerWorkbench('m4', 'B', true)">
                <strong>✅ Situação B</strong>
                Reentrar SOMENTE após declaração formal de "Área Segura" pelas autoridades e autorização da Gerência, cancelar o NOTAM e submeter o RELSEC no portal SGAVSEC em até 24 horas.
              </button>
            </div>

            <div class="workbench-feedback" id="wb-m4-feedback"></div>
          </div>
        `
      }
    ],
    quiz: [
      {
        id: 'm4q1',
        question: 'Questão 1: Qual anexo da CIRCEA 100-56/2025 estabelece o questionário padrão para registro de Ameaça de Bomba?',
        options: [
          'Anexo A (Tabela de Frequências).',
          'Anexo C (Plano de Férias).',
          'Anexo G.',
          'Anexo Z (Inventário Patrimonial).'
        ],
        correctIndex: 2,
        comment: 'Letra C. O Anexo G da CIRCEA 100-56/2025 contém o Questionário Padrão para Registro de Ameaça de Bomba.'
      },
      {
        id: 'm4q2',
        question: 'Questão 2: Qual o prazo máximo para inserção do relatório de ocorrência (RELSEC) no portal SGAVSEC após o evento?',
        options: [
          'Em até 24 horas.',
          'Em até 15 dias úteis.',
          'Em até 6 meses após a auditoria anual.',
          'Não há prazo estipulado para envio no portal SGAVSEC.'
        ],
        correctIndex: 0,
        comment: 'Letra A. O Relatório de Segurança da Aviação Civil (RELSEC) deve ser submetido no portal SGAVSEC no prazo máximo de até 24 horas após o evento.'
      },
      {
        id: 'm4q3',
        question: 'Questão 3: Quando a equipe pode iniciar a reentrada na instalação para a reassunção do serviço pós-evacuação?',
        options: [
          'Assim que passarem 10 minutos do alarme, independentemente da chegada da Polícia Federal.',
          'Quando o operador decidir buscar objetos esquecidos na Sala AFIS por conta própria.',
          'Somente após a declaração formal de "Área Segura" pelas autoridades e autorização da Gerência.',
          'Imediatamente após o primeiro pouso de aeronave comercial no pátio.'
        ],
        correctIndex: 2,
        comment: 'Letra C. A reentrada para reassunção do serviço só é permitida após a varredura e declaração formal de "Área Segura" pelas autoridades competentes, somada à autorização da Gerência.'
      }
    ]
  }
];

// DADOS DETALHADOS DOS COMPONENTES INTERATIVOS
const NORMATIVE_TREE_DATA = [
  {
    title: '📜 Decreto Presidencial nº 11.195/2022 ──► PNAVSEC (Âmbito Nacional)',
    desc: 'É o ato normativo máximo do Governo Federal que institui o <strong>Programa Nacional de Segurança da Aviação Civil contra Atos de Interferência Ilícita (PNAVSEC)</strong>. Define responsabilidades entre COMAER, ANAC, Polícia Federal, operadores de aeródromos e provedores de navegação aérea.',
    refs: ['CIRCEA-100-56, p. 9', 'DCA-205-7, p. 10, 11', 'PES-AVSEC_2026_01, p. 72']
  },
  {
    title: '🏛️ DCA 205-7 / DCA 205-6 ──► Diretriz AVSEC no COMAER',
    desc: 'Estabelece a Diretriz e a Política de Segurança da Aviação Civil contra Atos de Interferência Ilícita no âmbito do Comando da Aeronáutica (COMAER), orientando estrategicamente a proteção das organizações e infraestruturas do SISCEAB.',
    refs: ['DCA-205-7, p. 10, 12', 'ICA-205-48, p. 17']
  },
  {
    title: '🛡️ ICA 205-48 ──► PNAVSECCEA (SeMS no SISCEAB)',
    desc: 'Institui o Programa Nacional de Segurança da Aviação Civil contra Atos de Interferência Ilícita no Controle do Espaço Aéreo (PNAVSECCEA) e estrutura o <strong>SeMS (Security Management System)</strong> e seus 4 Pilares aplicáveis diretamente à <strong>NAV Brasil</strong>.',
    refs: ['ICA-205-48, p. 16, 18, 22', 'ICA-205-51, p. 30']
  },
  {
    title: '📡 PES-AVSEC SBIZ / MOp RDO-IZ ──► Execução Prática na DNB',
    desc: 'Materializa as normas superiores na rotina operacional de <strong>Imperatriz (SBIZ / RDO-IZ)</strong>: define as 3 Camadas de Defesa locais, regras de acesso à Sala AFIS e Sala Técnica, protocolos ESAB, rotas para o Ponto de Encontro (PE) e acionamentos via VHF 125.65 MHz e TF-2.',
    refs: ['PES-AVSEC_2026_01', 'MOp RDO-IZ']
  }
];

const SEMS_PILLARS_DATA = [
  {
    title: '1️⃣ DIRETRIZ DE SEGURANÇA AVSEC (Política e Objetivos)',
    desc: 'Define a política e os objetivos estratégicos de proteção do SISCEAB, estabelecendo o compromisso da Alta Direção e as responsabilidades de todo o efetivo (normatizada na <strong>DCA 205-7</strong>).',
    refs: ['DCA-205-7, p. 10, 12', 'ICA-205-48, p. 19']
  },
  {
    title: '2️⃣ GERENCIAMENTO DO RISCO AVSEC (Análise e Tratamento de Ameaças)',
    desc: 'Processo contínuo de identificar, analisar, avaliar e tratar ameaças físicas, humanas e cibernéticas, mantendo os riscos em níveis aceitáveis (regido pelo <strong>MCA 205-4</strong> e <strong>ICA 205-51</strong>).',
    refs: ['ICA-205-48, p. 19', 'ICA-205-51, p. 34, 38', 'MCA 205-4']
  },
  {
    title: '3️⃣ GARANTIA DA SEGURANÇA AVSEC (Controle de Qualidade e Simulados)',
    desc: 'Monitoramento e controle de qualidade por meio de auditorias, inspeções, vistorias e exercícios simulados (como o <strong>ESAB e Evacuação</strong>) — regido pela <strong>ICA 800-8</strong>.',
    refs: ['ICA-205-48, p. 20, 26', 'ICA-800-8, p. 57, 58']
  },
  {
    title: '4️⃣ PROMOÇÃO DA SEGURANÇA AVSEC (Treinamento e Cultura)',
    desc: 'Fortalecimento da cultura proativa de segurança por meio de capacitações, treinamentos de familiarização e cursos normativos (regido pela <strong>ICA 37-733</strong>).',
    refs: ['ICA-205-48, p. 21, 27', 'ICA-37-733, p. 73']
  }
];

const DEFENSE_LAYERS_DATA = [
  {
    title: '1ª Camada de Defesa: Área Pública',
    desc: 'Compreende as vias externas de acesso e áreas abertas ao público no entorno do sítio aeroportuário de Imperatriz (SBIZ). Não há controle prévio de identificação individual, sendo protegida por barreiras perimetrais, iluminação e vigilância.'
  },
  {
    title: '2ª Camada de Defesa: Área Controlada (Perímetro Patrimonial DNB-IZ)',
    desc: 'Abrange o pátio interno da dependência da NAV Brasil, recepção e áreas administrativas. O ingresso exige identificação na portaria/recepção, autorização de acesso e uso visível de credencial.'
  },
  {
    title: '3ª Camada de Defesa: Área Restrita de Segurança (ARS — Sala AFIS, Sala Técnica e Telecomunicações)',
    desc: 'É o núcleo crítico de missão da RDO-IZ! Engloba a <strong>Sala Operacional AFIS, a Sala Técnica (bastidores/servidores) e a Estação de Telecomunicações</strong>. Acesso restrito exclusivamente a pessoal credenciado autorizado, com portas travadas e escolta obrigatória para terceirizados.'
  }
];

const NBQR_STEPS_DATA = [
  {
    title: '1️⃣ Ação Primária: NÃO TOCAR, NÃO ABRIR E NÃO INALAR',
    desc: 'Diante de qualquer pacote suspeito, pó desconhecido, líquido incomum ou recipiente abandonado próximo à RDO-IZ, <strong>jamais toque, sacuda ou tente abrir o artefato</strong>. Qualquer manipulação pode acionar uma espoleta ou dispersar agentes biológicos/químicos.'
  },
  {
    title: '2️⃣ Isolar Imediatamente a Área e Conter Ventilação',
    desc: 'Afaste todas as pessoas do compartimento ou perímetro imediato. Se houver suspeita de pó/aerossol químico ou biológico (NBQR/BNQR), desligue imediatamente o sistema de ar-condicionado/ventilação do setor para impedir a contaminação de outras salas.'
  },
  {
    title: '3️⃣ Proibição de Rádios HT e Celulares Próximos ao Artefato',
    desc: 'Não utilize transmissores de rádio (HT) ou aparelhos celulares a menos de 15 metros do objeto suspeito, prevenindo o risco de detonação por energia de radiofrequência.'
  },
  {
    title: '4️⃣ Acionamento Imediato das Autoridades Competentes',
    desc: 'Comunique imediatamente a <strong>Gerência da DNB-IZ, o APOC/Administração Aeroportuária de SBIZ, a Polícia Federal e o Corpo de Bombeiros / Defesa Civil</strong> para isolamento especializado e neutralização.'
  }
];

const ESAB_STEPS_DATA = [
  {
    title: '1️⃣ Aplicação do Anexo G da CIRCEA 100-56/2025',
    desc: 'O <strong>Anexo G da CIRCEA 100-56/2025</strong> estabelece o questionário padrão para coleta máxima de dados do ameaçador: <em>"Onde está a bomba?", "Quando vai explodir?", "Qual o formato/aparência?", "Qual aeronave ou instalação é o alvo?"</em>, além do registro de características da voz, ruídos de fundo e número chamador (BINA).'
  },
  {
    title: '2️⃣ Protocolo de Chamadas na Frequência VHF 125.65 MHz',
    desc: 'Na frequência operacional da Rádio Imperatriz (<strong>VHF 125.65 MHz</strong>), o Operador transmite as informações de segurança e alerta às aeronaves em evolução, orientando eventual aeronave sob ameaça para o Ponto Remoto de Estacionamento e informando restrições de pista/pátio.'
  },
  {
    title: '3️⃣ Acionamento Telefônico: ACC-AZ (via TF-2) e CGNA',
    desc: 'Acionamento imediato do <strong>Centro de Controle de Área Amazônico (ACC-AZ) pelo canal TF-2</strong> e do <strong>CGNA</strong> para coordenação de gerenciamento de fluxo (ATFM), alternados e emissão de NOTAM de contingência.'
  },
  {
    title: '4️⃣ Acionamento do APOC, Polícia Federal e Gerência Local',
    desc: 'Acionamento imediato do <strong>APOC / Administração Aeroportuária de SBIZ</strong>, da <strong>Polícia Federal</strong> (autoridade policial aeroportuária e varredura antibombas) e da Gerência da DNB Imperatriz.'
  }
];

// BANCO DE 10 QUESTÕES DA AVALIAÇÃO FINAL DE CAPACITAÇÃO (MÍNIMO 80% = 8/10)
const FINAL_EXAM_QUESTIONS = [
  {
    id: 'fq1',
    tema: 'Legislação Nacional (PNAVSEC)',
    question: '1. [Legislação AVSEC] Qual ato normativo do Governo Federal institui o Programa Nacional de Segurança da Aviação Civil contra Atos de Interferência Ilícita (PNAVSEC) e qual a principal distinção entre Safety e AVSEC?',
    options: [
      'O Decreto nº 11.195/2022 institui o PNAVSEC; Safety previne acidentes por falhas não intencionais, enquanto AVSEC protege contra atos intencionais e criminosos de interferência ilícita.',
      'A Portaria ANAC nº 1.359 institui o PNAVSEC; Safety e AVSEC tratam exclusivamente de manutenção mecânica de aeronaves.',
      'A CIRCEA 100-56 é o decreto presidencial que trata apenas de meteorologia aeronáutica.',
      'Não existe legislação nacional para AVSEC, cabendo apenas a cada piloto decidir sobre a segurança física dos aeroportos.'
    ],
    correctIndex: 0,
    comment: 'O Decreto Presidencial nº 11.195/2022 institui o PNAVSEC no Brasil. Safety foca em falhas não intencionais; AVSEC protege contra atos intencionais de interferência ilícita [DCA-205-7; ICA-205-48].'
  },
  {
    id: 'fq2',
    tema: 'SeMS e os 4 Pilares (ICA 205-48 / ICA 800-8 / ICA 37-733)',
    question: '2. [Pilares do SeMS] Conforme a ICA 205-48, quais são os 4 Pilares Fundamentais do SeMS na NAV Brasil e qual deles rege especificamente as Auditorias, Vistorias e Exercícios Simulados (ICA 800-8)?',
    options: [
      'Finanças, Compras, Engenharia e Operações; sendo Finanças o responsável pelos simulados.',
      'Diretriz de Segurança AVSEC, Gerenciamento do Risco AVSEC, Garantia da Segurança AVSEC e Promoção da Segurança AVSEC; sendo a Garantia da Segurança AVSEC responsável por auditorias, vistorias e simulados (ICA 800-8).',
      'Patrulhamento, Armamento, Detenção e Inquérito; todos exclusivos da Polícia Federal.',
      'Comunicação, Navegação, Vigilância e Meteorologia; regidos pelo Código de Trânsito.'
    ],
    correctIndex: 1,
    comment: 'Os 4 pilares do SeMS (ICA 205-48) são: Diretriz (DCA 205-7), Gerenciamento do Risco (MCA 205-4/ICA 205-51), Garantia da Segurança (ICA 800-8 — auditorias, vistorias e simulados) e Promoção (ICA 37-733 — treinamentos).'
  },
  {
    id: 'fq3',
    tema: 'As 3 Camadas de Defesa em SBIZ (RDO-IZ)',
    question: '3. [Camadas de Defesa] Na estrutura de defesa em profundidade da DNB Imperatriz (SBIZ / RDO-IZ), a Sala Operacional AFIS, a Sala Técnica e a Estação de Telecomunicações integram qual camada?',
    options: [
      '1ª Camada — Área Pública.',
      '2ª Camada — Área Controlada de livre circulação.',
      '3ª Camada — Área Restrita de Segurança (ARS).',
      'Área Externa Não Delimitada.'
    ],
    correctIndex: 2,
    comment: 'A Sala AFIS, a Sala Técnica e a Estação de Telecomunicações constituem o núcleo crítico da dependência e pertencem à 3ª Camada de Defesa: Área Restrita de Segurança (ARS).'
  },
  {
    id: 'fq4',
    tema: 'Credenciamento (ICA 63-14) e Desafio na ARS',
    question: '4. [Credenciamento e Acesso] Qual publicação do DECEA disciplina as regras de credenciamento no SISCEAB e qual a atitude correta ao visualizar uma pessoa sem crachá visível na ARS da RDO-IZ?',
    options: [
      'ICA 63-14; o colaborador deve abordar com cortesia/desafiar a identificação, impedir permanência desacompanhada e comunicar imediatamente à Gerência/Agente AVSEC.',
      'ICA 100-12; o colaborador deve ignorar a pessoa para não atrasar o serviço.',
      'MCA 105-2; o colaborador deve emprestar seu próprio crachá ao visitante.',
      'FCA 58-1; apenas guardas armados podem pedir identificação dentro da Sala AFIS.'
    ],
    correctIndex: 0,
    comment: 'A ICA 63-14 rege o credenciamento no SISCEAB. Qualquer pessoa sem crachá visível na ARS deve ser abordada cortesmente (procedimento de desafio) e reportada imediatamente à Gerência/AVSEC.'
  },
  {
    id: 'fq5',
    tema: 'Defesa NBQR / BNQR',
    question: '5. [Defesa NBQR/BNQR] Ao identificar um pacote suspeito com indícios de contaminação química, biológica, radiológica ou nuclear (NBQR/BNQR) nas imediações da RDO-IZ, qual a ação primária obrigatória?',
    options: [
      'Abrir o pacote para fotografar o interior e enviar por aplicativo de mensagens.',
      'Não tocar, isolar imediatamente a área (desligando ventilação se aplicável), afastar fontes de radiofrequência e acionar as autoridades competentes.',
      'Carregar o objeto suspeito até a Sala AFIS para analisá-lo na bancada.',
      'Jogar água sobre o pacote e descartá-lo na lixeira externa.'
    ],
    correctIndex: 1,
    comment: 'No protocolo NBQR/BNQR, a regra de ouro primária é NÃO TOCAR, isolar imediatamente o perímetro, evitar uso de rádio/celular próximo e acionar Gerência, APOC, Polícia Federal e Bombeiros.'
  },
  {
    id: 'fq6',
    tema: 'Cibersegurança de Sistemas Críticos (ICA 205-48, Item 8.2)',
    question: '6. [Cibersegurança] Sobre a proteção de Sistemas Críticos de Missão e Cibersegurança na Sala AFIS e Sala Técnica, regulamentada pela ICA 205-48 (Item 8.2), assinale a alternativa CORRETA:',
    options: [
      'É permitido conectar pen drives pessoais e celulares via USB nos consoles operacionais AFIS para carregar bateria.',
      'É estritamente proibido conectar mídias removíveis não autorizadas ou celulares nos consoles/servidores do SISCEAB, prevenindo malware, ransomware e intrusões lógicas.',
      'As senhas operacionais devem ser compartilhadas livremente com prestadores terceirizados.',
      'Ataques cibernéticos não são considerados ameaças AVSEC pela ICA 205-48.'
    ],
    correctIndex: 1,
    comment: 'O Item 8.2 da ICA 205-48 determina rigorosa proteção cibernética aos Sistemas Críticos de Missão do SISCEAB, vedando conexões USB/mídias estranhas e exigindo controle estrito de credenciais lógicas.'
  },
  {
    id: 'fq7',
    tema: 'Ameaças de Drones / UAS em SBIZ',
    question: '7. [Drones / UAS] Como deve ser tratada pelo Operador da RDO-IZ a presença de drones (UAS/RPAS) não autorizados operando na zona de aproximação ou sobre as instalações de SBIZ?',
    options: [
      'Como uma ameaça à segurança operacional (Safety) e física (AVSEC), alertando o tráfego na fonia e reportando imediatamente aos órgãos de controle (ACC-AZ) e ao APOC.',
      'Como atividade recreativa inofensiva que dispensa qualquer comunicação ou registro.',
      'O operador deve sair da Sala AFIS para tentar capturar o drone manualmente.',
      'Apenas aeronaves de grande porte podem reportar drones, sendo proibido ao AFIS informar na frequência.'
    ],
    correctIndex: 0,
    comment: 'Operações não autorizadas de drones/UAS nas proximidades do aeródromo constituem ameaça operacional e AVSEC, exigindo alerta imediato ao tráfego aéreo e reporte aos órgãos de controle e APOC.'
  },
  {
    id: 'fq8',
    tema: 'ESAB (Anexo G da CIRCEA 100-56/2025) e Comunicações',
    question: '8. [ESAB e Acionamentos] Em um Exercício Simulado ou ocorrência real de Ameaça de Bomba (ESAB) na RDO-IZ, qual anexo da CIRCEA 100-56/2025 traz o questionário padrão e quais são os canais de comunicação/acionamento utilizados?',
    options: [
      'Anexo G da CIRCEA 100-56/2025; protocolo na frequência VHF 125.65 MHz e acionamento telefônico imediato do ACC-AZ (TF-2), CGNA, APOC e Polícia Federal.',
      'Anexo A da CIRCEA 100-56/2025; comunicação apenas por e-mail administrativo no dia seguinte.',
      'Anexo C; acionamento exclusivo da torre de controle de outro país.',
      'Não existe formulário padrão na CIRCEA 100-56/2025 para ameaça de bomba.'
    ],
    correctIndex: 0,
    comment: 'O Anexo G da CIRCEA 100-56/2025 estabelece o Questionário Padrão para Registro de Ameaça de Bomba, acompanhado do protocolo em VHF 125.65 MHz e acionamento de ACC-AZ (TF-2), CGNA, APOC e PF.'
  },
  {
    id: 'fq9',
    tema: 'Evacuação AVSEC e Ponto de Encontro (PE)',
    question: '9. [Evacuação e PE] Durante uma evacuação da dependência DNB-IZ por ameaça de bomba (Evacuação AVSEC), para onde a equipe deve se deslocar e qual procedimento de controle de efetivo é obrigatório?',
    options: [
      'Deslocar-se para o Ponto de Encontro (PE) e realizar a contagem nominal (headcount) de todos os empregados, terceirizados e visitantes.',
      'Permanecer dentro da Sala Técnica com as luzes apagadas.',
      'Ir diretamente para casa sem passar pelo ponto de encontro.',
      'Aguardar na calçada colado às janelas de vidro da Sala AFIS.'
    ],
    correctIndex: 0,
    comment: 'Na evacuação, todos os ocupantes deslocam-se pelas rotas seguras até o Ponto de Encontro (PE), onde é executada obrigatoriamente a contagem nominal (headcount).'
  },
  {
    id: 'fq10',
    tema: 'Reassunção do Serviço e RELSEC no Portal SGAVSEC',
    question: '10. [Reassunção e RELSEC] Quais são a condição obrigatória para reentrada na instalação pós-evacuação e o prazo máximo para submissão do RELSEC no portal SGAVSEC?',
    options: [
      'Reentrada somente após declaração formal de "Área Segura" pelas autoridades e autorização da Gerência; submissão do RELSEC no portal SGAVSEC em até 24 horas.',
      'Reentrada automática após 15 minutos; submissão do RELSEC em até 30 dias.',
      'Reentrada a critério individual do operador; sem necessidade de cancelar NOTAM ou enviar RELSEC.',
      'Reentrada autorizada por qualquer motorista de táxi do aeroporto; RELSEC enviado em até 1 ano.'
    ],
    correctIndex: 0,
    comment: 'A reentrada exige declaração formal de "Área Segura" pelas autoridades competentes e autorização da Gerência, seguida de cancelamento de NOTAM e envio do RELSEC no portal SGAVSEC em até 24h.'
  }
];

// ============================================================================
// PORTAL ACADEMIA DNIZ — MOTOR DE PERFIS, SESSÕES, HORAS E NUVEM (SUPABASE/FIREBASE)
// ============================================================================
const PORTAL_DB_KEY = 'ACADEMIA_DNIZ_PORTAL_DB_V2';
const ACTIVE_SESSION_KEY = 'ACADEMIA_DNIZ_ACTIVE_SESSION_V2';

// Catálogo inicial da Academia DNIZ (expansível pelo Gestor)
const DEFAULT_COURSES = [
  {
    id: 'avsec-sbiz',
    code: 'AVSEC-SBIZ-01',
    title: 'Treinamento de Familiarização AVSEC — NAV Brasil (DNB / Rádio Imperatriz - SBIZ)',
    category: 'Segurança da Aviação Civil (AVSEC / SeMS)',
    workloadHours: 4,
    normas: 'Decreto nº 11.195/2022 • DCA 205-7 • ICA 205-48 • ICA 63-14 • CIRCEA 100-56/2025',
    description: 'Capacitação interativa em 4 Módulos Sequenciais com Trava 3/3 nos Quizzes, Simulador ESAB (Anexo G), Defesa NBQR/Cibersegurança, Ponto de Encontro (PE) e Avaliação Final de 10 questões com Certificado Digital.',
    status: 'active',
    hasInteractiveEngine: true
  }
];

// Perfis iniciais pré-configurados (gerenciáveis pelo Gestor)
const DEFAULT_USERS = [
  {
    id: 'usr-gestor',
    username: 'gestor',
    password: 'nav123',
    name: 'Gestor DNB / Rádio Imperatriz (SBIZ)',
    matricula: 'GESTOR-SBIZ',
    cargo: 'Gerência DNB-IZ / Gestor AVSEC',
    role: 'gestor',
    assignedCourses: ['avsec-sbiz'],
    active: true
  },
  {
    id: 'usr-op1',
    username: 'operador1',
    password: '1234',
    name: 'Operador EPTA — Turno Operacional',
    matricula: 'NAV-1001',
    cargo: 'Operador de Estação Aeronáutica (OEA)',
    role: 'colaborador',
    assignedCourses: ['avsec-sbiz'],
    active: true
  },
  {
    id: 'usr-tec1',
    username: 'tecnico1',
    password: '1234',
    name: 'Técnico CNS — Manutenção SBIZ',
    matricula: 'NAV-1002',
    cargo: 'Técnico de Telecomunicações / CNS',
    role: 'colaborador',
    assignedCourses: ['avsec-sbiz'],
    active: true
  }
];

let portalDB = {
  users: [],
  courses: [],
  progressByUser: {}, // { [userId]: { [courseId]: { ...courseProgress } } }
  accessLogs: [],     // [{ sessionId, userId, userName, userMatricula, userCargo, courseId, courseTitle, loginAt, lastActiveAt, durationSeconds, statusSnapshot }]
  cloudConfig: {
    provider: 'firebase', // 'firebase' (Realtime DB REST) ou 'supabase' (REST API)
    firebaseUrl: '',      // ex: https://academia-dniz-default-rtdb.firebaseio.com
    supabaseUrl: '',      // ex: https://xxxx.supabase.co
    supabaseKey: '',
    lastSyncAt: null
  }
};

// Estado de navegação e curso ativo na sessão atual
let appState = {
  currentUserId: null,
  currentSessionId: null,
  portalMode: 'login',       // 'login' | 'portal' | 'course-lobby' | 'course-focus'
  activePortalTab: 'catalog',// 'catalog' | 'myhistory' | 'manager'
  activeManagerSubtab: 'reports', // 'reports' | 'users' | 'courses' | 'cloud'
  activeCourseId: 'avsec-sbiz',
  inspectingUserIdForCert: null, // Permite ao Gestor abrir o certificado de qualquer colaborador
  // Espelho do progresso do usuário logado no curso atual:
  employeeName: '',
  employeeId: '',
  inFocusMode: false,
  currentView: 'module-1',
  activePillByModule: { 1: 0, 2: 0, 3: 0, 4: 0 },
  visitedPills: { 1: [0], 2: [0], 3: [0], 4: [0] },
  completedModules: [],
  finalExamPassed: false,
  finalExamScore: null,
  finalExamAnswers: {},
  completionDate: null,
  validationCode: null
};

let sessionTimerInterval = null;

function createDefaultUserCourseProgress() {
  return {
    status: 'not_started', // 'not_started' | 'in_progress' | 'completed'
    startedAt: null,
    lastAccessAt: null,
    currentView: 'module-1',
    activePillByModule: { 1: 0, 2: 0, 3: 0, 4: 0 },
    visitedPills: { 1: [0], 2: [0], 3: [0], 4: [0] },
    completedModules: [],
    finalExamPassed: false,
    finalExamScore: null,
    finalExamAnswers: {},
    completionDate: null,
    validationCode: null,
    totalSecondsSpent: 0
  };
}

function getUserCourseProgress(userId, courseId = 'avsec-sbiz') {
  if (!portalDB.progressByUser[userId]) {
    portalDB.progressByUser[userId] = {};
  }
  if (!portalDB.progressByUser[userId][courseId]) {
    portalDB.progressByUser[userId][courseId] = createDefaultUserCourseProgress();
  }
  return portalDB.progressByUser[userId][courseId];
}

function getCurrentUser() {
  return portalDB.users.find(u => u.id === appState.currentUserId) || null;
}

function loadState() {
  try {
    const raw = localStorage.getItem(PORTAL_DB_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      portalDB = {
        ...portalDB,
        ...parsed,
        users: Array.isArray(parsed.users) && parsed.users.length ? parsed.users : DEFAULT_USERS,
        courses: Array.isArray(parsed.courses) && parsed.courses.length ? parsed.courses : DEFAULT_COURSES,
        progressByUser: parsed.progressByUser || {},
        accessLogs: Array.isArray(parsed.accessLogs) ? parsed.accessLogs : [],
        cloudConfig: { ...portalDB.cloudConfig, ...(parsed.cloudConfig || {}) }
      };
    } else {
      portalDB.users = JSON.parse(JSON.stringify(DEFAULT_USERS));
      portalDB.courses = JSON.parse(JSON.stringify(DEFAULT_COURSES));
    }

    // Restaura sessão ativa se o usuário recarregou a página
    const activeRaw = sessionStorage.getItem(ACTIVE_SESSION_KEY);
    if (activeRaw) {
      const activeParsed = JSON.parse(activeRaw);
      const existingUser = portalDB.users.find(u => u.id === activeParsed.currentUserId && u.active !== false);
      if (existingUser) {
        appState.currentUserId = existingUser.id;
        appState.currentSessionId = activeParsed.currentSessionId;
        appState.portalMode = activeParsed.portalMode || 'portal';
        appState.activePortalTab = activeParsed.activePortalTab || 'catalog';
        appState.activeManagerSubtab = activeParsed.activeManagerSubtab || 'reports';
        appState.activeCourseId = activeParsed.activeCourseId || 'avsec-sbiz';
        syncAppStateFromUserProgress(existingUser.id, appState.activeCourseId);
        startLiveSessionTimer();
      }
    }
  } catch (e) {
    console.warn('Erro ao carregar banco da Academia DNIZ:', e);
    portalDB.users = JSON.parse(JSON.stringify(DEFAULT_USERS));
    portalDB.courses = JSON.parse(JSON.stringify(DEFAULT_COURSES));
  }
}

function syncAppStateFromUserProgress(userId, courseId = 'avsec-sbiz') {
  const user = portalDB.users.find(u => u.id === userId);
  const prog = getUserCourseProgress(userId, courseId);
  appState.employeeName = user ? user.name : '';
  appState.employeeId = user ? `${user.matricula} • ${user.cargo}` : '';
  appState.currentView = prog.currentView || 'module-1';
  appState.activePillByModule = { 1: 0, 2: 0, 3: 0, 4: 0, ...(prog.activePillByModule || {}) };
  appState.visitedPills = { 1: [0], 2: [0], 3: [0], 4: [0], ...(prog.visitedPills || {}) };
  appState.completedModules = Array.isArray(prog.completedModules) ? [...prog.completedModules] : [];
  appState.finalExamPassed = !!prog.finalExamPassed;
  appState.finalExamScore = prog.finalExamScore ?? null;
  appState.finalExamAnswers = { ...(prog.finalExamAnswers || {}) };
  appState.completionDate = prog.completionDate || null;
  appState.validationCode = prog.validationCode || null;
}

function syncUserProgressFromAppState() {
  if (!appState.currentUserId) return;
  const prog = getUserCourseProgress(appState.currentUserId, appState.activeCourseId);
  prog.currentView = appState.currentView;
  prog.activePillByModule = { ...appState.activePillByModule };
  prog.visitedPills = { ...appState.visitedPills };
  prog.completedModules = [...appState.completedModules];
  prog.finalExamPassed = appState.finalExamPassed;
  prog.finalExamScore = appState.finalExamScore;
  prog.finalExamAnswers = { ...appState.finalExamAnswers };
  prog.completionDate = appState.completionDate;
  prog.validationCode = appState.validationCode;
  prog.lastAccessAt = new Date().toLocaleString('pt-BR');

  if (prog.finalExamPassed) {
    prog.status = 'completed';
  } else if (
    prog.completedModules.length > 0 ||
    prog.startedAt ||
    appState.portalMode === 'course-lobby' ||
    appState.portalMode === 'course-focus'
  ) {
    prog.status = 'in_progress';
    if (!prog.startedAt) {
      prog.startedAt = new Date().toLocaleString('pt-BR');
    }
  }

  updateCurrentAccessLogSnapshot();
}

function saveState(triggerCloud = false) {
  try {
    syncUserProgressFromAppState();
    localStorage.setItem(PORTAL_DB_KEY, JSON.stringify(portalDB));
    if (appState.currentUserId) {
      sessionStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify({
        currentUserId: appState.currentUserId,
        currentSessionId: appState.currentSessionId,
        portalMode: appState.portalMode,
        activePortalTab: appState.activePortalTab,
        activeManagerSubtab: appState.activeManagerSubtab,
        activeCourseId: appState.activeCourseId
      }));
    } else {
      sessionStorage.removeItem(ACTIVE_SESSION_KEY);
    }
    if (triggerCloud) {
      pushDatabaseToCloudSilent();
    }
  } catch (e) {
    console.warn('Erro ao salvar estado:', e);
  }
}

// ============================================================================
// SINCRONIZAÇÃO AUTOMÁTICA COM BANCO EM NUVEM (FIREBASE / SUPABASE)
// ============================================================================
function isCloudConfigured() {
  const cfg = portalDB.cloudConfig || {};
  if (cfg.provider === 'firebase' && cfg.firebaseUrl && cfg.firebaseUrl.startsWith('http')) return true;
  if (cfg.provider === 'supabase' && cfg.supabaseUrl && cfg.supabaseKey) return true;
  return false;
}

async function pushDatabaseToCloudSilent() {
  if (!isCloudConfigured()) return false;
  const cfg = portalDB.cloudConfig;
  try {
    const payload = {
      users: portalDB.users,
      courses: portalDB.courses,
      progressByUser: portalDB.progressByUser,
      accessLogs: portalDB.accessLogs,
      updatedAt: new Date().toISOString()
    };

    if (cfg.provider === 'firebase') {
      const cleanUrl = cfg.firebaseUrl.replace(/\/+$/, '');
      const res = await fetch(`${cleanUrl}/academia_dniz.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        portalDB.cloudConfig.lastSyncAt = new Date().toLocaleString('pt-BR');
        localStorage.setItem(PORTAL_DB_KEY, JSON.stringify(portalDB));
        updateCloudBadgesUI();
        return true;
      }
    } else if (cfg.provider === 'supabase') {
      const cleanUrl = cfg.supabaseUrl.replace(/\/+$/, '');
      const res = await fetch(`${cleanUrl}/rest/v1/academia_dniz_state?id=eq.main`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': cfg.supabaseKey,
          'Authorization': `Bearer ${cfg.supabaseKey}`,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({ id: 'main', payload, updated_at: new Date().toISOString() })
      });
      if (res.ok) {
        portalDB.cloudConfig.lastSyncAt = new Date().toLocaleString('pt-BR');
        localStorage.setItem(PORTAL_DB_KEY, JSON.stringify(portalDB));
        updateCloudBadgesUI();
        return true;
      }
    }
  } catch (e) {
    console.warn('Falha ao sincronizar com a nuvem:', e);
  }
  return false;
}

async function pullDatabaseFromCloudSilent() {
  if (!isCloudConfigured()) return false;
  const cfg = portalDB.cloudConfig;
  try {
    let remoteData = null;
    if (cfg.provider === 'firebase') {
      const cleanUrl = cfg.firebaseUrl.replace(/\/+$/, '');
      const res = await fetch(`${cleanUrl}/academia_dniz.json`);
      if (res.ok) remoteData = await res.json();
    } else if (cfg.provider === 'supabase') {
      const cleanUrl = cfg.supabaseUrl.replace(/\/+$/, '');
      const res = await fetch(`${cleanUrl}/rest/v1/academia_dniz_state?id=eq.main&select=payload`, {
        headers: {
          'apikey': cfg.supabaseKey,
          'Authorization': `Bearer ${cfg.supabaseKey}`
        }
      });
      if (res.ok) {
        const rows = await res.json();
        if (rows && rows[0] && rows[0].payload) remoteData = rows[0].payload;
      }
    }

    if (remoteData && Array.isArray(remoteData.users)) {
      portalDB.users = remoteData.users;
      portalDB.courses = Array.isArray(remoteData.courses) ? remoteData.courses : DEFAULT_COURSES;
      portalDB.progressByUser = remoteData.progressByUser || {};
      portalDB.accessLogs = Array.isArray(remoteData.accessLogs) ? remoteData.accessLogs : [];
      portalDB.cloudConfig.lastSyncAt = new Date().toLocaleString('pt-BR');
      localStorage.setItem(PORTAL_DB_KEY, JSON.stringify(portalDB));
      if (appState.currentUserId) {
        syncAppStateFromUserProgress(appState.currentUserId, appState.activeCourseId);
      }
      renderAll();
      return true;
    }
  } catch (e) {
    console.warn('Falha ao buscar dados da nuvem:', e);
  }
  return false;
}

function updateCloudBadgesUI() {
  const configured = isCloudConfigured();
  const text = configured
    ? `☁️ Nuvem Ativa (${portalDB.cloudConfig.provider.toUpperCase()})`
    : '💾 Banco Local + Exportação/Nuvem';
  const b1 = document.getElementById('cloudStatusBadgeLogin');
  const b2 = document.getElementById('portalCloudIndicator');
  if (b1) b1.textContent = text;
  if (b2) b2.textContent = text;
}

// ============================================================================
// CONTROLE DE ACESSO (LOGIN / LOGOUT) E CRONÔMETRO DE HORAS POR ACESSO
// ============================================================================
function handleLoginSubmit(event) {
  event.preventDefault();
  const uInput = document.getElementById('loginUsername');
  const pInput = document.getElementById('loginPassword');
  const errBox = document.getElementById('loginErrorBox');

  const typedUser = (uInput ? uInput.value : '').trim().toLowerCase();
  const typedPass = (pInput ? pInput.value : '').trim();

  const matched = portalDB.users.find(u =>
    u.active !== false &&
    (u.username.toLowerCase() === typedUser || (u.matricula && u.matricula.toLowerCase() === typedUser)) &&
    u.password === typedPass
  );

  if (!matched) {
    if (errBox) {
      errBox.style.display = 'block';
      errBox.textContent = '❌ Usuário/Matrícula ou senha inválidos. Verifique com o Gestor da Academia DNIZ.';
    }
    return;
  }

  if (errBox) errBox.style.display = 'none';
  loginWithUser(matched);
}

function quickFillLogin(username, password) {
  const uInput = document.getElementById('loginUsername');
  const pInput = document.getElementById('loginPassword');
  if (uInput) uInput.value = username;
  if (pInput) pInput.value = password;
  const matched = portalDB.users.find(u => u.username === username && u.password === password);
  if (matched) loginWithUser(matched);
}

function loginWithUser(user) {
  appState.currentUserId = user.id;
  appState.activeCourseId = 'avsec-sbiz';
  appState.portalMode = 'portal';
  appState.inFocusMode = false;
  appState.activePortalTab = user.role === 'gestor' ? 'manager' : 'catalog';

  syncAppStateFromUserProgress(user.id, appState.activeCourseId);

  // Cria registro de sessão no Histórico de Acessos
  const sessionId = 'SES-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
  appState.currentSessionId = sessionId;

  const nowStr = new Date().toLocaleString('pt-BR');
  portalDB.accessLogs.unshift({
    sessionId,
    userId: user.id,
    userName: user.name,
    userMatricula: user.matricula,
    userCargo: user.cargo,
    courseId: appState.activeCourseId,
    courseTitle: 'Familiarização AVSEC — SBIZ',
    loginAt: nowStr,
    lastActiveAt: nowStr,
    durationSeconds: 0,
    statusSnapshot: getReadableStatusForUser(user.id, appState.activeCourseId)
  });

  startLiveSessionTimer();
  saveState(true);
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleLogout() {
  stopLiveSessionTimer();
  updateCurrentAccessLogSnapshot();
  saveState(true);
  appState.currentUserId = null;
  appState.currentSessionId = null;
  appState.portalMode = 'login';
  appState.inFocusMode = false;
  sessionStorage.removeItem(ACTIVE_SESSION_KEY);
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startLiveSessionTimer() {
  stopLiveSessionTimer();
  sessionTimerInterval = setInterval(() => {
    if (!appState.currentUserId || !appState.currentSessionId) return;

    const logItem = portalDB.accessLogs.find(l => l.sessionId === appState.currentSessionId);
    if (logItem) {
      logItem.durationSeconds = (logItem.durationSeconds || 0) + 1;
      logItem.lastActiveAt = new Date().toLocaleString('pt-BR');
    }

    // Se o usuário estiver dentro de um curso, contabiliza também nas horas daquele curso
    if (appState.portalMode === 'course-lobby' || appState.portalMode === 'course-focus') {
      const prog = getUserCourseProgress(appState.currentUserId, appState.activeCourseId);
      prog.totalSecondsSpent = (prog.totalSecondsSpent || 0) + 1;
      prog.lastAccessAt = new Date().toLocaleString('pt-BR');
    }

    updateLiveSessionTimerDOM();

    // Persiste a cada 10 segundos
    if (logItem && logItem.durationSeconds % 10 === 0) {
      updateCurrentAccessLogSnapshot();
      localStorage.setItem(PORTAL_DB_KEY, JSON.stringify(portalDB));
    }
  }, 1000);
}

function stopLiveSessionTimer() {
  if (sessionTimerInterval) {
    clearInterval(sessionTimerInterval);
    sessionTimerInterval = null;
  }
}

function updateCurrentAccessLogSnapshot() {
  if (!appState.currentUserId || !appState.currentSessionId) return;
  const logItem = portalDB.accessLogs.find(l => l.sessionId === appState.currentSessionId);
  if (logItem) {
    logItem.lastActiveAt = new Date().toLocaleString('pt-BR');
    logItem.statusSnapshot = getReadableStatusForUser(appState.currentUserId, appState.activeCourseId);
  }
}

function updateLiveSessionTimerDOM() {
  const sessionEl = document.getElementById('liveSessionTimer');
  const totalEl = document.getElementById('liveTotalUserTime');
  if (!appState.currentUserId) return;

  const logItem = portalDB.accessLogs.find(l => l.sessionId === appState.currentSessionId);
  const currentSec = logItem ? (logItem.durationSeconds || 0) : 0;
  const totalUserSec = getTotalSecondsByUser(appState.currentUserId);

  if (sessionEl) sessionEl.textContent = formatDurationHMS(currentSec);
  if (totalEl) totalEl.textContent = formatDurationHM(totalUserSec);
}

function getTotalSecondsByUser(userId) {
  const logsSeconds = portalDB.accessLogs
    .filter(l => l.userId === userId)
    .reduce((acc, item) => acc + (item.durationSeconds || 0), 0);
  const prog = getUserCourseProgress(userId, 'avsec-sbiz');
  return Math.max(logsSeconds, prog.totalSecondsSpent || 0);
}

function formatDurationHMS(totalSeconds) {
  const sec = Math.max(0, Math.floor(totalSeconds || 0));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
}

function formatDurationHM(totalSeconds) {
  const sec = Math.max(0, Math.floor(totalSeconds || 0));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h === 0 && m === 0) return `${s}s`;
  return `${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m`;
}

function formatDecimalHours(totalSeconds) {
  const hrs = (Math.max(0, totalSeconds || 0) / 3600).toFixed(2).replace('.', ',');
  return `${hrs} h`;
}

// ============================================================================
// CÁLCULO DE PROGRESSO E PONTO DE RETOMADA ("CONTINUAR DE ONDE PAROU")
// ============================================================================
function calculateUserCoursePercent(userId, courseId = 'avsec-sbiz') {
  const prog = getUserCourseProgress(userId, courseId);
  const modPct = (prog.completedModules ? prog.completedModules.length : 0) * 20;
  const examPct = prog.finalExamPassed ? 20 : 0;
  return Math.min(100, modPct + examPct);
}

function calculateGlobalProgress() {
  const modPct = appState.completedModules.length * 20;
  const examPct = appState.finalExamPassed ? 20 : 0;
  return Math.min(100, modPct + examPct);
}

function getReadableResumePoint(userId, courseId = 'avsec-sbiz') {
  const prog = getUserCourseProgress(userId, courseId);
  if (prog.finalExamPassed) {
    return `Finalizado com Aprovação (${prog.finalExamScore}/10 • ${prog.completionDate || ''})`;
  }
  if (prog.status === 'not_started' && (!prog.completedModules || prog.completedModules.length === 0)) {
    return 'Não iniciado';
  }
  if (prog.currentView === 'final-exam') {
    return 'Etapa atual: Avaliação Final (10 Questões)';
  }
  if (prog.currentView && prog.currentView.startsWith('module-')) {
    const modId = parseInt(prog.currentView.replace('module-', ''), 10) || 1;
    const stepIdx = (prog.activePillByModule && prog.activePillByModule[modId]) ?? 0;
    const stepName = stepIdx === 3 ? 'Quiz (Trava 3/3)' : `Seção ${stepIdx + 1}`;
    return `Parou no Módulo ${modId} • ${stepName}`;
  }
  return 'Em andamento';
}

function getReadableStatusForUser(userId, courseId = 'avsec-sbiz') {
  const pct = calculateUserCoursePercent(userId, courseId);
  const prog = getUserCourseProgress(userId, courseId);
  if (prog.finalExamPassed) {
    return `Concluído (100% • Nota ${prog.finalExamScore}/10)`;
  }
  if (prog.status === 'in_progress' || pct > 0 || prog.startedAt) {
    return `Em Andamento (${pct}% • ${getReadableResumePoint(userId, courseId)})`;
  }
  return 'Não Iniciou (0%)';
}

function isModuleUnlocked(modId) {
  if (modId === 1) return true;
  return appState.completedModules.includes(modId - 1);
}

function isFinalExamUnlocked() {
  return [1, 2, 3, 4].every(id => appState.completedModules.includes(id));
}

function generateValidationCode(name) {
  const clean = (name || 'NAV').replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 4).padEnd(4, 'X');
  const year = new Date().getFullYear();
  const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `NAV-SBIZ-AVSEC-${year}-${clean}-${rand}`;
}

// ============================================================================
// RENDERIZAÇÃO GERAL (LOGIN / PORTAL ACADEMIA DNIZ / CURSO / MODO FOCO)
// ============================================================================
function renderAll() {
  const loginEl = document.getElementById('loginView');
  const portalEl = document.getElementById('portalDashboardView');
  const lobbyEl = document.getElementById('lobbyView');
  const focusEl = document.getElementById('focusModeView');

  updateCloudBadgesUI();

  if (!appState.currentUserId || appState.portalMode === 'login') {
    if (loginEl) loginEl.style.display = 'flex';
    if (portalEl) portalEl.style.display = 'none';
    if (lobbyEl) lobbyEl.style.display = 'none';
    if (focusEl) focusEl.style.display = 'none';
    renderLoginQuickProfiles();
    return;
  }

  if (loginEl) loginEl.style.display = 'none';

  if (appState.portalMode === 'portal') {
    if (portalEl) portalEl.style.display = 'block';
    if (lobbyEl) lobbyEl.style.display = 'none';
    if (focusEl) focusEl.style.display = 'none';
    renderPortalDashboard();
    return;
  }

  // Modo Curso (Lobby do Curso ou Modo Foco Exclusivo)
  if (portalEl) portalEl.style.display = 'none';

  if (appState.inFocusMode) {
    if (lobbyEl) lobbyEl.style.display = 'none';
    if (focusEl) focusEl.style.display = 'flex';
    renderFocusModeStage();
  } else {
    if (lobbyEl) lobbyEl.style.display = 'block';
    if (focusEl) focusEl.style.display = 'none';
    renderHeaderProgress();
    renderEmployeeBar();
    renderLobbyGrid();
  }
}

function renderLoginQuickProfiles() {
  const listEl = document.getElementById('loginQuickProfilesList');
  if (!listEl) return;
  const activeUsers = portalDB.users.filter(u => u.active !== false);
  listEl.innerHTML = activeUsers.map(u => {
    const roleTag = u.role === 'gestor' ? '👑 GESTOR / ADMIN' : '👨‍✈️ COLABORADOR';
    return `
      <button type="button" class="quick-profile-btn" onclick="quickFillLogin('${escapeHtml(u.username)}', '${escapeHtml(u.password)}')">
        <strong>${roleTag}: ${escapeHtml(u.name)}</strong>
        <span>Login: <code>${escapeHtml(u.username)}</code> | Matrícula: ${escapeHtml(u.matricula)}</span>
      </button>
    `;
  }).join('');
}

// ============================================================================
// VISÃO 1: PORTAL ACADEMIA DNIZ (CATÁLOGO, MEU HISTÓRICO E PAINEL DO GESTOR)
// ============================================================================
function switchPortalTab(tabId) {
  appState.activePortalTab = tabId;
  saveState(false);
  renderPortalDashboard();
}

function switchManagerSubtab(subtabId) {
  appState.activeManagerSubtab = subtabId;
  saveState(false);
  renderPortalDashboard();
}

function renderPortalDashboard() {
  const user = getCurrentUser();
  if (!user) return;

  const nameEl = document.getElementById('portalHeaderUserName');
  const roleBadge = document.getElementById('portalUserRoleBadge');
  const managerTabBtn = document.getElementById('tabBtn-manager');

  if (nameEl) nameEl.textContent = `${user.name} (${user.matricula})`;
  if (roleBadge) {
    roleBadge.textContent = user.role === 'gestor' ? '👑 Gestor' : '👨‍✈️ Colaborador';
    roleBadge.className = `role-badge ${user.role === 'gestor' ? 'gestor' : 'colaborador'}`;
  }
  if (managerTabBtn) {
    managerTabBtn.style.display = user.role === 'gestor' ? 'inline-block' : 'none';
  }

  ['catalog', 'myhistory', 'manager'].forEach(t => {
    const btn = document.getElementById(`tabBtn-${t}`);
    if (btn) btn.classList.toggle('active', appState.activePortalTab === t);
  });

  updateLiveSessionTimerDOM();

  const mainEl = document.getElementById('portalMainContainer');
  if (!mainEl) return;

  if (appState.activePortalTab === 'catalog') {
    mainEl.innerHTML = renderCatalogTabHtml(user);
  } else if (appState.activePortalTab === 'myhistory') {
    mainEl.innerHTML = renderMyHistoryTabHtml(user);
  } else if (appState.activePortalTab === 'manager' && user.role === 'gestor') {
    mainEl.innerHTML = renderManagerTabHtml();
  } else {
    mainEl.innerHTML = renderCatalogTabHtml(user);
  }
}

function renderCatalogTabHtml(user) {
  const assignedIds = Array.isArray(user.assignedCourses) && user.assignedCourses.length
    ? user.assignedCourses
    : ['avsec-sbiz'];

  const visibleCourses = portalDB.courses.filter(c => assignedIds.includes(c.id) || user.role === 'gestor');

  const cardsHtml = visibleCourses.map(course => {
    const prog = getUserCourseProgress(user.id, course.id);
    const pct = calculateUserCoursePercent(user.id, course.id);
    const resumeText = getReadableResumePoint(user.id, course.id);
    const userLogsCount = portalDB.accessLogs.filter(l => l.userId === user.id && l.courseId === course.id).length;
    const spentSec = prog.totalSecondsSpent || 0;

    let badgeClass = 'badge-locked';
    let badgeLabel = '⚪ Não Iniciado';
    let btnLabel = '▶ Iniciar Curso Agora';
    let btnClass = 'btn-primary';

    if (prog.finalExamPassed) {
      badgeClass = 'badge-completed';
      badgeLabel = '🟢 Concluído (Aprovado)';
      btnLabel = '🎓 Ver Curso / Emitir Certificado';
      btnClass = 'btn-success';
    } else if (prog.status === 'in_progress' || pct > 0 || prog.startedAt) {
      badgeClass = 'badge-current';
      badgeLabel = `🟡 Em Andamento (${pct}%)`;
      btnLabel = `▶ Continuar de Onde Parei (${resumeText})`;
      btnClass = 'btn-primary';
    }

    return `
      <div class="lobby-module-card ${prog.finalExamPassed ? 'completed' : 'unlocked'}">
        <div>
          <div class="lobby-card-top">
            <span class="lobby-code-tag">${escapeHtml(course.code)} • Carga Prevista: ${course.workloadHours}h</span>
            <span class="status-badge ${badgeClass}">${badgeLabel}</span>
          </div>
          <h4>${escapeHtml(course.title)}</h4>
          <p style="margin-bottom:0.85rem;">${escapeHtml(course.description)}</p>

          <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:10px; padding:0.75rem 0.95rem; margin-bottom:1rem; font-size:0.82rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
              <span>📍 <strong>Andamento:</strong> ${escapeHtml(resumeText)}</span>
              <strong style="color:var(--nav-blue);">${pct}%</strong>
            </div>
            <div class="progress-track" style="width:100%; margin-bottom:0.55rem;">
              <div class="progress-fill" style="width:${pct}%;"></div>
            </div>
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:0.5rem; color:var(--nav-muted); font-size:0.77rem;">
              <span>⏱️ Tempo dedicado: <strong>${formatDurationHM(spentSec)} (${formatDecimalHours(spentSec)})</strong></span>
              <span>🔑 Acessos: <strong>${userLogsCount}</strong></span>
              <span>📅 Último acesso: <strong>${prog.lastAccessAt || '—'}</strong></span>
            </div>
          </div>
        </div>

        <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
          <button type="button" class="btn ${btnClass}" style="flex:1;" onclick="openCourseFromPortal('${course.id}', false)">
            ${btnLabel}
          </button>
          ${prog.finalExamPassed ? `
            <button type="button" class="btn btn-outline" onclick="openCourseCertificateDirect('${user.id}', '${course.id}')">
              🖨️ Certificado
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  const totalSec = getTotalSecondsByUser(user.id);
  const myAccessCount = portalDB.accessLogs.filter(l => l.userId === user.id).length;
  const completedCount = visibleCourses.filter(c => getUserCourseProgress(user.id, c.id).finalExamPassed).length;

  return `
    <div class="kpi-grid">
      <div class="kpi-card">
        <span>Perfil Conectado</span>
        <strong style="font-size:1.15rem;">${escapeHtml(user.name)}</strong>
        <small>Matrícula: ${escapeHtml(user.matricula)} • ${escapeHtml(user.cargo)}</small>
      </div>
      <div class="kpi-card success">
        <span>Cursos Concluídos</span>
        <strong>${completedCount} / ${visibleCourses.length}</strong>
        <small>Certificados digitais habilitados</small>
      </div>
      <div class="kpi-card warning">
        <span>Quantidade de Acessos</span>
        <strong>${myAccessCount}</strong>
        <small>Sessões registradas no seu perfil</small>
      </div>
      <div class="kpi-card gold">
        <span>Horas de Estudo Acumuladas</span>
        <strong>${formatDurationHM(totalSec)}</strong>
        <small>Equivalente a ${formatDecimalHours(totalSec)} registradas</small>
      </div>
    </div>

    <section class="lobby-modules-section">
      <div class="lobby-section-header">
        <h3>📚 Cursos Disponíveis para o Seu Perfil (${visibleCourses.length})</h3>
        <span class="lobby-rule-badge">💾 Você pode entrar, avançar nas seções e pausar para finalizar depois a qualquer momento</span>
      </div>
      <div class="lobby-grid">
        ${cardsHtml}
      </div>
    </section>
  `;
}

function renderMyHistoryTabHtml(user) {
  const myLogs = portalDB.accessLogs.filter(l => l.userId === user.id);
  const totalSec = getTotalSecondsByUser(user.id);
  const prog = getUserCourseProgress(user.id, 'avsec-sbiz');

  const rowsHtml = myLogs.length ? myLogs.map((log, idx) => `
    <tr>
      <td><strong>#${myLogs.length - idx}</strong></td>
      <td>${escapeHtml(log.courseTitle || 'Familiarização AVSEC — SBIZ')}</td>
      <td>${escapeHtml(log.loginAt)}</td>
      <td>${escapeHtml(log.lastActiveAt)}</td>
      <td><strong>${formatDurationHMS(log.durationSeconds)}</strong> <span style="color:var(--nav-muted);">(${formatDecimalHours(log.durationSeconds)})</span></td>
      <td><span class="status-badge ${log.statusSnapshot && log.statusSnapshot.includes('Concluído') ? 'badge-completed' : 'badge-current'}">${escapeHtml(log.statusSnapshot || 'Em andamento')}</span></td>
    </tr>
  `).join('') : `
    <tr>
      <td colspan="6" style="text-align:center; padding:1.5rem; color:var(--nav-muted);">Nenhum acesso registrado ainda.</td>
    </tr>
  `;

  return `
    <div class="portal-panel-card">
      <div class="portal-panel-header">
        <div>
          <h3>🎓 Meus Certificados Emitidos</h3>
          <p style="font-size:0.84rem; color:var(--nav-muted);">Comprovantes digitais oficiais com código de validação da Academia DNIZ (SBIZ).</p>
        </div>
      </div>
      ${prog.finalExamPassed ? `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; background:#ECFDF5; border:1.5px solid #10B981; padding:1rem 1.25rem; border-radius:12px;">
          <div>
            <strong style="color:#065F46; font-size:1rem;">✅ Treinamento de Familiarização AVSEC — NAV Brasil (SBIZ)</strong>
            <div style="font-size:0.83rem; color:#047857; margin-top:0.2rem;">
              Concluído em: <strong>${escapeHtml(prog.completionDate)}</strong> • Nota Final: <strong>${prog.finalExamScore}/10 (${prog.finalExamScore * 10}%)</strong> • Código: <code>${escapeHtml(prog.validationCode)}</code>
            </div>
          </div>
          <button type="button" class="btn btn-success btn-sm" onclick="openCourseCertificateDirect('${user.id}', 'avsec-sbiz')">
            🎓 Visualizar / Imprimir Certificado PDF
          </button>
        </div>
      ` : `
        <p style="font-size:0.88rem; color:var(--nav-muted);">Você ainda não possui certificados emitidos. Conclua os 4 módulos e a Avaliação Final (mínimo 80%) para gerar seu certificado.</p>
      `}
    </div>

    <div class="portal-panel-card">
      <div class="portal-panel-header">
        <div>
          <h3>🕒 Histórico Completo de Acessos e Quantidade de Horas por Acesso</h3>
          <p style="font-size:0.84rem; color:var(--nav-muted);">
            Total acumulado no perfil: <strong>${formatDurationHMS(totalSec)} (${formatDecimalHours(totalSec)})</strong> em <strong>${myLogs.length} acesso(s)</strong>.
          </p>
        </div>
      </div>

      <div class="table-responsive">
        <table class="portal-table">
          <thead>
            <tr>
              <th>Acesso</th>
              <th>Curso</th>
              <th>Início do Acesso</th>
              <th>Última Atividade / Saída</th>
              <th>Horas / Tempo neste Acesso</th>
              <th>Status / Progresso</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ============================================================================
// PAINEL DO GESTOR (RELATÓRIOS POR PERFIL, CONTROLE DE HORAS, USUÁRIOS E NUVEM)
// ============================================================================
function renderManagerTabHtml() {
  const totalUsers = portalDB.users.length;
  let completedUsers = 0;
  let inProgressUsers = 0;
  let notStartedUsers = 0;
  let unitTotalSeconds = 0;

  portalDB.users.forEach(u => {
    const prog = getUserCourseProgress(u.id, 'avsec-sbiz');
    const pct = calculateUserCoursePercent(u.id, 'avsec-sbiz');
    unitTotalSeconds += getTotalSecondsByUser(u.id);
    if (prog.finalExamPassed) completedUsers++;
    else if (prog.status === 'in_progress' || pct > 0 || prog.startedAt) inProgressUsers++;
    else notStartedUsers++;
  });

  const subtab = appState.activeManagerSubtab || 'reports';

  let subtabContent = '';
  if (subtab === 'reports') {
    subtabContent = renderManagerReportsSubtab();
  } else if (subtab === 'users') {
    subtabContent = renderManagerUsersSubtab();
  } else if (subtab === 'courses') {
    subtabContent = renderManagerCoursesSubtab();
  } else if (subtab === 'cloud') {
    subtabContent = renderManagerCloudSubtab();
  }

  return `
    <div class="kpi-grid">
      <div class="kpi-card">
        <span>Perfis Cadastrados</span>
        <strong>${totalUsers}</strong>
        <small>Colaboradores e Gestores na DNB-IZ</small>
      </div>
      <div class="kpi-card success">
        <span>Finalizaram o Curso</span>
        <strong>${completedUsers}</strong>
        <small>Com Certificado AVSEC emitido</small>
      </div>
      <div class="kpi-card warning">
        <span>Em Andamento / Não Iniciaram</span>
        <strong>${inProgressUsers} / ${notStartedUsers}</strong>
        <small>${inProgressUsers} iniciaram • ${notStartedUsers} não iniciaram</small>
      </div>
      <div class="kpi-card gold">
        <span>Carga Horária Total da Unidade</span>
        <strong>${formatDurationHM(unitTotalSeconds)}</strong>
        <small>${formatDecimalHours(unitTotalSeconds)} em ${portalDB.accessLogs.length} acessos</small>
      </div>
    </div>

    <div class="manager-subnav no-print">
      <button type="button" class="manager-subtab-btn ${subtab === 'reports' ? 'active' : ''}" onclick="switchManagerSubtab('reports')">
        📊 Acompanhamento de Progresso, Horas e Certificados
      </button>
      <button type="button" class="manager-subtab-btn ${subtab === 'users' ? 'active' : ''}" onclick="switchManagerSubtab('users')">
        👥 Cadastrar / Gerenciar Perfis de Acesso (${portalDB.users.length})
      </button>
      <button type="button" class="manager-subtab-btn ${subtab === 'courses' ? 'active' : ''}" onclick="switchManagerSubtab('courses')">
        📚 Base de Cursos da Unidade (${portalDB.courses.length})
      </button>
      <button type="button" class="manager-subtab-btn ${subtab === 'cloud' ? 'active' : ''}" onclick="switchManagerSubtab('cloud')">
        ☁️ Sincronização Nuvem (Supabase / Firebase) & Backup
      </button>
    </div>

    ${subtabContent}
  `;
}

function renderManagerReportsSubtab() {
  const rowsHtml = portalDB.users.map(u => {
    const prog = getUserCourseProgress(u.id, 'avsec-sbiz');
    const pct = calculateUserCoursePercent(u.id, 'avsec-sbiz');
    const userLogs = portalDB.accessLogs.filter(l => l.userId === u.id);
    const totalSec = getTotalSecondsByUser(u.id);
    const avgSec = userLogs.length ? Math.round(totalSec / userLogs.length) : 0;
    const resumePoint = getReadableResumePoint(u.id, 'avsec-sbiz');

    let statusBadge = `<span class="status-badge badge-locked">⚪ Não Iniciou</span>`;
    if (prog.finalExamPassed) {
      statusBadge = `<span class="status-badge badge-completed">🟢 Finalizou (${prog.finalExamScore}/10)</span>`;
    } else if (prog.status === 'in_progress' || pct > 0 || prog.startedAt) {
      statusBadge = `<span class="status-badge badge-current">🟡 Iniciou (${pct}%)</span>`;
    }

    return `
      <tr>
        <td>
          <strong>${escapeHtml(u.name)}</strong>
          <div style="font-size:0.75rem; color:var(--nav-muted);">Matrícula: ${escapeHtml(u.matricula)} • Login: <code>${escapeHtml(u.username)}</code></div>
          <div style="font-size:0.74rem; color:var(--nav-blue); font-weight:600;">${escapeHtml(u.cargo)}</div>
        </td>
        <td>${statusBadge}</td>
        <td>
          <div style="font-size:0.8rem; font-weight:700; color:var(--nav-navy);">${escapeHtml(resumePoint)}</div>
          <div class="progress-track" style="width:140px; margin-top:0.3rem;">
            <div class="progress-fill" style="width:${pct}%;"></div>
          </div>
        </td>
        <td>
          <strong>${userLogs.length} acesso(s)</strong>
          <div style="font-size:0.74rem; color:var(--nav-muted);">Último: ${escapeHtml(prog.lastAccessAt || (userLogs[0] ? userLogs[0].lastActiveAt : 'Nunca'))}</div>
        </td>
        <td>
          <strong>${formatDurationHMS(totalSec)}</strong>
          <div style="font-size:0.75rem; color:var(--nav-muted);">Total: ${formatDecimalHours(totalSec)} | Média/acesso: ${formatDurationHM(avgSec)}</div>
        </td>
        <td>
          <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
            <button type="button" class="btn btn-outline btn-sm" onclick="openUserAccessHistoryModal('${u.id}')">
              🕒 Horas por Acesso (${userLogs.length})
            </button>
            ${prog.finalExamPassed ? `
              <button type="button" class="btn btn-success btn-sm" onclick="openCourseCertificateDirect('${u.id}', 'avsec-sbiz')">
                🎓 Certificado
              </button>
            ` : ''}
            <button type="button" class="btn btn-outline btn-sm" onclick="managerResetUserCourse('${u.id}')" title="Zerar andamento deste perfil">
              🔄 Resetar
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  return `
    <div class="portal-panel-card">
      <div class="portal-panel-header">
        <div>
          <h3>📊 Relatório Gerencial de Andamento, Status e Horas por Perfil</h3>
          <p style="font-size:0.84rem; color:var(--nav-muted);">
            Acompanhe quem ainda não iniciou, quem está em andamento (e onde parou) e quem já finalizou com emissão de certificado.
          </p>
        </div>
        <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
          <button type="button" class="btn btn-outline btn-sm" onclick="exportManagerReportCSV()">
            📥 Exportar Planilha (CSV / Excel)
          </button>
          <button type="button" class="btn btn-primary btn-sm" onclick="window.print()">
            🖨️ Imprimir Relatório
          </button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="portal-table">
          <thead>
            <tr>
              <th>Colaborador / Perfil</th>
              <th>Status no Curso</th>
              <th>Progresso / Onde Parou</th>
              <th>Qtd. Acessos</th>
              <th>Horas Acumuladas & Média</th>
              <th>Ações do Gestor</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openUserAccessHistoryModal(userId) {
  const user = portalDB.users.find(u => u.id === userId);
  if (!user) return;
  const userLogs = portalDB.accessLogs.filter(l => l.userId === userId);
  const totalSec = getTotalSecondsByUser(userId);
  const prog = getUserCourseProgress(userId, 'avsec-sbiz');

  const rows = userLogs.length ? userLogs.map((l, i) => `
    <tr>
      <td><strong>#${userLogs.length - i}</strong></td>
      <td>${escapeHtml(l.loginAt)}</td>
      <td>${escapeHtml(l.lastActiveAt)}</td>
      <td><strong>${formatDurationHMS(l.durationSeconds)}</strong> (${formatDecimalHours(l.durationSeconds)})</td>
      <td>${escapeHtml(l.statusSnapshot || '-')}</td>
    </tr>
  `).join('') : `
    <tr><td colspan="5" style="text-align:center; padding:1rem;">Nenhum acesso registrado para este perfil.</td></tr>
  `;

  const cardEl = document.getElementById('modalCardContainer');
  if (cardEl) cardEl.classList.add('wide');

  showModal({
    type: 'success',
    title: `Histórico de Acessos — ${user.name} (${user.matricula})`,
    message: `
      <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-radius:10px; padding:0.85rem 1rem; margin-bottom:1rem; font-size:0.85rem;">
        <div><strong>Cargo/Função:</strong> ${escapeHtml(user.cargo)} | <strong>Status Atual:</strong> ${escapeHtml(getReadableStatusForUser(user.id, 'avsec-sbiz'))}</div>
        <div style="margin-top:0.3rem;">
          <strong>Total de Acessos:</strong> ${userLogs.length} |
          <strong>Tempo Total Registrado:</strong> ${formatDurationHMS(totalSec)} (${formatDecimalHours(totalSec)})
          ${prog.validationCode ? ` | <strong>Certificado:</strong> <code>${escapeHtml(prog.validationCode)}</code>` : ''}
        </div>
      </div>
      <div class="table-responsive" style="max-height:320px; overflow-y:auto;">
        <table class="portal-table">
          <thead>
            <tr>
              <th>Nº</th>
              <th>Entrada</th>
              <th>Saída / Última Ação</th>
              <th>Horas / Duração do Acesso</th>
              <th>Progresso na Sessão</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `,
    buttonText: 'Fechar Histórico',
    onConfirm: () => {
      if (cardEl) cardEl.classList.remove('wide');
    }
  });
}

function renderManagerUsersSubtab() {
  const userRows = portalDB.users.map(u => `
    <tr>
      <td><strong>${escapeHtml(u.name)}</strong></td>
      <td><code>${escapeHtml(u.username)}</code></td>
      <td><code>${escapeHtml(u.password)}</code></td>
      <td>${escapeHtml(u.matricula)}</td>
      <td>${escapeHtml(u.cargo)}</td>
      <td><span class="role-badge ${u.role === 'gestor' ? 'gestor' : 'colaborador'}">${u.role === 'gestor' ? 'Gestor' : 'Colaborador'}</span></td>
      <td>
        <div style="display:flex; gap:0.4rem;">
          <button type="button" class="btn btn-outline btn-sm" onclick="populateUserFormForEdit('${u.id}')">✏️ Editar</button>
          ${u.id !== appState.currentUserId ? `
            <button type="button" class="btn btn-outline btn-sm" style="color:#B91C1C; border-color:#FCA5A5;" onclick="deleteUserProfile('${u.id}')">🗑️ Excluir</button>
          ` : ''}
        </div>
      </td>
    </tr>
  `).join('');

  return `
    <div class="portal-panel-card">
      <div class="portal-panel-header">
        <div>
          <h3 id="userFormHeading">➕ Cadastrar Novo Perfil de Acesso (Definido pelo Gestor)</h3>
          <p style="font-size:0.84rem; color:var(--nav-muted);">Crie logins individuais para os colaboradores da DNB-IZ acompanharem seus cursos e emitirem certificados.</p>
        </div>
      </div>

      <form onsubmit="handleSaveUserProfile(event)">
        <input type="hidden" id="editUserIdInput" value="" />
        <div class="form-grid-2" style="margin-bottom:1rem;">
          <div class="form-group">
            <label>Nome Completo do Empregado *</label>
            <input type="text" id="mgrUserName" class="portal-input" placeholder="Ex: João Silva Santos" required />
          </div>
          <div class="form-group">
            <label>Matrícula / Identificação *</label>
            <input type="text" id="mgrUserMatricula" class="portal-input" placeholder="Ex: NAV-1045" required />
          </div>
          <div class="form-group">
            <label>Cargo / Função na Unidade (SBIZ) *</label>
            <input type="text" id="mgrUserCargo" class="portal-input" placeholder="Ex: Operador de Estação Aeronáutica (OEA)" required />
          </div>
          <div class="form-group">
            <label>Tipo de Perfil *</label>
            <select id="mgrUserRole" class="portal-select">
              <option value="colaborador">👨‍✈️ Colaborador / Treinando (Realiza cursos)</option>
              <option value="gestor">👑 Gestor / Administrador (Acesso total e relatórios)</option>
            </select>
          </div>
          <div class="form-group">
            <label>Usuário de Login *</label>
            <input type="text" id="mgrUserLogin" class="portal-input" placeholder="Ex: joao.silva" required />
          </div>
          <div class="form-group">
            <label>Senha de Acesso *</label>
            <input type="text" id="mgrUserPass" class="portal-input" placeholder="Ex: 1234" required />
          </div>
        </div>
        <div style="display:flex; gap:0.75rem;">
          <button type="submit" class="btn btn-primary">💾 Salvar Perfil de Acesso</button>
          <button type="button" class="btn btn-outline" onclick="clearUserForm()">Limpar Formulário</button>
        </div>
      </form>
    </div>

    <div class="portal-panel-card">
      <div class="portal-panel-header">
        <h3>👥 Perfis Cadastrados na Unidade (${portalDB.users.length})</h3>
      </div>
      <div class="table-responsive">
        <table class="portal-table">
          <thead>
            <tr>
              <th>Nome Completo</th>
              <th>Login</th>
              <th>Senha</th>
              <th>Matrícula</th>
              <th>Cargo / Setor</th>
              <th>Nível</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>${userRows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function handleSaveUserProfile(event) {
  event.preventDefault();
  const editId = document.getElementById('editUserIdInput').value.trim();
  const name = document.getElementById('mgrUserName').value.trim();
  const matricula = document.getElementById('mgrUserMatricula').value.trim();
  const cargo = document.getElementById('mgrUserCargo').value.trim();
  const role = document.getElementById('mgrUserRole').value;
  const username = document.getElementById('mgrUserLogin').value.trim();
  const password = document.getElementById('mgrUserPass').value.trim();

  if (!name || !username || !password) return;

  const duplicate = portalDB.users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.id !== editId);
  if (duplicate) {
    showModal({
      type: 'warning',
      title: 'Login já existente',
      message: `O login <strong>${escapeHtml(username)}</strong> já está sendo utilizado por outro perfil.`,
      buttonText: 'OK'
    });
    return;
  }

  if (editId) {
    const target = portalDB.users.find(u => u.id === editId);
    if (target) {
      target.name = name;
      target.matricula = matricula;
      target.cargo = cargo;
      target.role = role;
      target.username = username;
      target.password = password;
    }
  } else {
    const newId = 'usr-' + Date.now();
    portalDB.users.push({
      id: newId,
      username,
      password,
      name,
      matricula,
      cargo,
      role,
      assignedCourses: portalDB.courses.map(c => c.id),
      active: true
    });
  }

  saveState(true);
  renderPortalDashboard();
  showModal({
    type: 'success',
    title: 'Perfil Salvo com Sucesso!',
    message: `O perfil de <strong>${escapeHtml(name)}</strong> (Login: <code>${escapeHtml(username)}</code> / Senha: <code>${escapeHtml(password)}</code>) já está liberado para acesso na Academia DNIZ.`,
    buttonText: 'Perfeito'
  });
}

function populateUserFormForEdit(userId) {
  const u = portalDB.users.find(item => item.id === userId);
  if (!u) return;
  document.getElementById('editUserIdInput').value = u.id;
  document.getElementById('mgrUserName').value = u.name;
  document.getElementById('mgrUserMatricula').value = u.matricula;
  document.getElementById('mgrUserCargo').value = u.cargo;
  document.getElementById('mgrUserRole').value = u.role;
  document.getElementById('mgrUserLogin').value = u.username;
  document.getElementById('mgrUserPass').value = u.password;
  const heading = document.getElementById('userFormHeading');
  if (heading) heading.textContent = `✏️ Editando Perfil: ${u.name}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function clearUserForm() {
  document.getElementById('editUserIdInput').value = '';
  document.getElementById('mgrUserName').value = '';
  document.getElementById('mgrUserMatricula').value = '';
  document.getElementById('mgrUserCargo').value = '';
  document.getElementById('mgrUserLogin').value = '';
  document.getElementById('mgrUserPass').value = '';
  const heading = document.getElementById('userFormHeading');
  if (heading) heading.textContent = '➕ Cadastrar Novo Perfil de Acesso (Definido pelo Gestor)';
}

function deleteUserProfile(userId) {
  const u = portalDB.users.find(item => item.id === userId);
  if (!u) return;
  if (!confirm(`Deseja realmente excluir o perfil de "${u.name}"?`)) return;
  portalDB.users = portalDB.users.filter(item => item.id !== userId);
  saveState(true);
  renderPortalDashboard();
}

function managerResetUserCourse(userId) {
  const u = portalDB.users.find(item => item.id === userId);
  if (!u) return;
  if (!confirm(`Deseja zerar o progresso do curso de "${u.name}" para nova realização/reciclagem?`)) return;
  portalDB.progressByUser[userId] = { 'avsec-sbiz': createDefaultUserCourseProgress() };
  if (userId === appState.currentUserId) {
    syncAppStateFromUserProgress(userId, 'avsec-sbiz');
  }
  saveState(true);
  renderPortalDashboard();
}

function renderManagerCoursesSubtab() {
  const rows = portalDB.courses.map(c => `
    <tr>
      <td><strong>${escapeHtml(c.code)}</strong></td>
      <td>
        <strong>${escapeHtml(c.title)}</strong>
        <div style="font-size:0.76rem; color:var(--nav-muted);">${escapeHtml(c.normas || '')}</div>
      </td>
      <td>${escapeHtml(c.category || 'Operacional')}</td>
      <td><strong>${c.workloadHours}h</strong></td>
      <td><span class="status-badge badge-completed">Ativo no Catálogo</span></td>
    </tr>
  `).join('');

  return `
    <div class="portal-panel-card">
      <div class="portal-panel-header">
        <div>
          <h3>➕ Adicionar Novo Curso na Base da Academia DNIZ</h3>
          <p style="font-size:0.84rem; color:var(--nav-muted);">Expanda o catálogo da unidade (ex.: SMS/SGSO, Procedimentos AFIS, Manutenção CNS, Fraseologia).</p>
        </div>
      </div>
      <form onsubmit="handleAddCourseCatalog(event)">
        <div class="form-grid-2" style="margin-bottom:1rem;">
          <div class="form-group">
            <label>Título do Treinamento *</label>
            <input type="text" id="newCourseTitle" class="portal-input" placeholder="Ex: Treinamento de Reciclagem SMS / SGSO — SBIZ" required />
          </div>
          <div class="form-group">
            <label>Código do Curso *</label>
            <input type="text" id="newCourseCode" class="portal-input" placeholder="Ex: SMS-SBIZ-02" required />
          </div>
          <div class="form-group">
            <label>Carga Horária Prevista (Horas) *</label>
            <input type="number" id="newCourseHours" class="portal-input" value="4" min="1" required />
          </div>
          <div class="form-group">
            <label>Normas de Referência</label>
            <input type="text" id="newCourseNormas" class="portal-input" placeholder="Ex: DCA 63-3 • ICA 63-33 • Manual SGSO NAV Brasil" />
          </div>
        </div>
        <div class="form-group" style="margin-bottom:1rem;">
          <label>Descrição do Curso *</label>
          <input type="text" id="newCourseDesc" class="portal-input" placeholder="Resumo dos módulos e objetivos de capacitação..." required />
        </div>
        <button type="submit" class="btn btn-primary">📚 Incluir Curso no Catálogo da Unidade</button>
      </form>
    </div>

    <div class="portal-panel-card">
      <div class="portal-panel-header">
        <h3>📚 Cursos Cadastrados na Academia DNIZ (${portalDB.courses.length})</h3>
      </div>
      <div class="table-responsive">
        <table class="portal-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Título e Base Normativa</th>
              <th>Área</th>
              <th>Carga Horária</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function handleAddCourseCatalog(event) {
  event.preventDefault();
  const title = document.getElementById('newCourseTitle').value.trim();
  const code = document.getElementById('newCourseCode').value.trim();
  const workloadHours = parseInt(document.getElementById('newCourseHours').value, 10) || 4;
  const normas = document.getElementById('newCourseNormas').value.trim();
  const description = document.getElementById('newCourseDesc').value.trim();

  if (!title || !code) return;
  const newCourseId = 'course-' + Date.now();
  portalDB.courses.push({
    id: newCourseId,
    code,
    title,
    category: 'Capacitação DNB-IZ',
    workloadHours,
    normas,
    description,
    status: 'active',
    hasInteractiveEngine: true
  });

  portalDB.users.forEach(u => {
    if (!Array.isArray(u.assignedCourses)) u.assignedCourses = [];
    if (!u.assignedCourses.includes(newCourseId)) u.assignedCourses.push(newCourseId);
  });

  saveState(true);
  renderPortalDashboard();
  showModal({
    type: 'success',
    title: 'Curso Adicionado à Academia DNIZ!',
    message: `O curso <strong>${escapeHtml(title)}</strong> foi cadastrado e disponibilizado para os perfis da unidade.`,
    buttonText: 'OK'
  });
}

function renderManagerCloudSubtab() {
  const cfg = portalDB.cloudConfig || {};
  return `
    <div class="portal-panel-card">
      <div class="portal-panel-header">
        <div>
          <h3>☁️ Integração com Banco de Dados em Nuvem Gratuito (Firebase / Supabase)</h3>
          <p style="font-size:0.84rem; color:var(--nav-muted);">
            Configure abaixo para sincronizar automaticamente os acessos, horas de estudo e certificados entre computadores diferentes no GitHub Pages.
          </p>
        </div>
        <span class="status-badge ${isCloudConfigured() ? 'badge-completed' : 'badge-current'}">
          ${isCloudConfigured() ? '✓ Nuvem Conectada' : 'Modo Local + Backup Ativo'}
        </span>
      </div>

      <form onsubmit="handleSaveCloudConfig(event)">
        <div class="form-grid-2" style="margin-bottom:1rem;">
          <div class="form-group">
            <label>Provedor de Nuvem</label>
            <select id="cloudProviderSelect" class="portal-select">
              <option value="firebase" ${cfg.provider === 'firebase' ? 'selected' : ''}>🔥 Google Firebase Realtime Database (Mais Simples — Só 1 URL)</option>
              <option value="supabase" ${cfg.provider === 'supabase' ? 'selected' : ''}>⚡ Supabase PostgreSQL REST API (URL + Anon Key)</option>
            </select>
          </div>
          <div class="form-group">
            <label>URL do Firebase Realtime Database (se usar Firebase)</label>
            <input type="text" id="cloudFirebaseUrl" class="portal-input" placeholder="Ex: https://academia-dniz-default-rtdb.firebaseio.com" value="${escapeHtml(cfg.firebaseUrl || '')}" />
          </div>
          <div class="form-group">
            <label>Supabase Project URL (se usar Supabase)</label>
            <input type="text" id="cloudSupabaseUrl" class="portal-input" placeholder="Ex: https://xyzcompany.supabase.co" value="${escapeHtml(cfg.supabaseUrl || '')}" />
          </div>
          <div class="form-group">
            <label>Supabase Anon Public Key (se usar Supabase)</label>
            <input type="password" id="cloudSupabaseKey" class="portal-input" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI..." value="${escapeHtml(cfg.supabaseKey || '')}" />
          </div>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button type="submit" class="btn btn-primary">☁️ Salvar e Sincronizar com a Nuvem</button>
          <button type="button" class="btn btn-outline" onclick="manualCloudPull()">🔄 Baixar Dados da Nuvem Agora</button>
          <button type="button" class="btn btn-outline" onclick="exportDatabaseJSON()">💾 Exportar Backup Completo (.JSON)</button>
        </div>
      </form>
    </div>
  `;
}

async function handleSaveCloudConfig(event) {
  event.preventDefault();
  portalDB.cloudConfig.provider = document.getElementById('cloudProviderSelect').value;
  portalDB.cloudConfig.firebaseUrl = document.getElementById('cloudFirebaseUrl').value.trim();
  portalDB.cloudConfig.supabaseUrl = document.getElementById('cloudSupabaseUrl').value.trim();
  portalDB.cloudConfig.supabaseKey = document.getElementById('cloudSupabaseKey').value.trim();
  saveState(false);

  if (isCloudConfigured()) {
    const ok = await pushDatabaseToCloudSilent();
    showModal({
      type: ok ? 'success' : 'warning',
      title: ok ? 'Sincronizado com a Nuvem!' : 'Configuração Salva',
      message: ok
        ? 'Os perfis, progresso e histórico de acessos foram sincronizados com sucesso no banco em nuvem!'
        : 'Configuração salva. Verifique se a URL/Chave permite leitura/escrita pública ou tente novamente.',
      buttonText: 'OK'
    });
  } else {
    showModal({
      type: 'success',
      title: 'Modo Local Mantido',
      message: 'Os dados continuam salvos localmente no navegador com opção de exportação CSV/JSON.',
      buttonText: 'OK'
    });
  }
  renderPortalDashboard();
}

async function manualCloudPull() {
  const ok = await pullDatabaseFromCloudSilent();
  showModal({
    type: ok ? 'success' : 'warning',
    title: ok ? 'Dados Atualizados da Nuvem!' : 'Não foi possível buscar da Nuvem',
    message: ok
      ? 'Todos os perfis, históricos de acesso e certificados foram atualizados a partir da nuvem.'
      : 'Verifique se as credenciais da nuvem estão preenchidas corretamente.',
    buttonText: 'OK'
  });
}

function exportDatabaseJSON() {
  const blob = new Blob([JSON.stringify(portalDB, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `backup_academia_dniz_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportManagerReportCSV() {
  const headers = ['Nome', 'Matricula', 'Login', 'Cargo', 'Status_Curso', 'Progresso_Pct', 'Onde_Parou', 'Qtd_Acessos', 'Tempo_Total_HMS', 'Horas_Decimais', 'Nota_Final', 'Data_Conclusao', 'Codigo_Certificado'];
  const lines = [headers.join(';')];

  portalDB.users.forEach(u => {
    const prog = getUserCourseProgress(u.id, 'avsec-sbiz');
    const pct = calculateUserCoursePercent(u.id, 'avsec-sbiz');
    const logsCount = portalDB.accessLogs.filter(l => l.userId === u.id).length;
    const totalSec = getTotalSecondsByUser(u.id);
    const statusStr = prog.finalExamPassed ? 'Finalizado' : (pct > 0 || prog.startedAt ? 'Em Andamento' : 'Nao Iniciou');

    const row = [
      `"${u.name}"`,
      `"${u.matricula}"`,
      `"${u.username}"`,
      `"${u.cargo}"`,
      `"${statusStr}"`,
      `${pct}%`,
      `"${getReadableResumePoint(u.id, 'avsec-sbiz')}"`,
      logsCount,
      `"${formatDurationHMS(totalSec)}"`,
      `"${formatDecimalHours(totalSec)}"`,
      prog.finalExamScore !== null ? `${prog.finalExamScore}/10` : '-',
      `"${prog.completionDate || '-'}"`,
      `"${prog.validationCode || '-'}"`
    ];
    lines.push(row.join(';'));
  });

  const csvContent = '\uFEFF' + lines.join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `relatorio_academia_dniz_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ============================================================================
// TRANSIÇÃO ENTRE PORTAL E CURSO (CONTINUAR DE ONDE PAROU)
// ============================================================================
function openCourseFromPortal(courseId, goStraightToFocus = false) {
  if (!appState.currentUserId) return;
  appState.activeCourseId = courseId || 'avsec-sbiz';
  appState.inspectingUserIdForCert = null;

  const prog = getUserCourseProgress(appState.currentUserId, appState.activeCourseId);
  if (!prog.startedAt) {
    prog.startedAt = new Date().toLocaleString('pt-BR');
  }
  if (prog.status === 'not_started') {
    prog.status = 'in_progress';
  }
  prog.lastAccessAt = new Date().toLocaleString('pt-BR');

  syncAppStateFromUserProgress(appState.currentUserId, appState.activeCourseId);

  appState.portalMode = 'course-lobby';
  appState.inFocusMode = goStraightToFocus;
  saveState(true);
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openCourseCertificateDirect(targetUserId, courseId = 'avsec-sbiz') {
  const prog = getUserCourseProgress(targetUserId, courseId);
  if (!prog.finalExamPassed) return;
  appState.inspectingUserIdForCert = targetUserId;
  appState.activeCourseId = courseId;
  appState.portalMode = 'course-focus';
  appState.currentView = 'certificate';
  appState.inFocusMode = true;
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function returnToPortalCatalog() {
  appState.inspectingUserIdForCert = null;
  appState.inFocusMode = false;
  appState.portalMode = 'portal';
  saveState(true);
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function exitFocusMode() {
  if (appState.inspectingUserIdForCert && appState.inspectingUserIdForCert !== appState.currentUserId) {
    returnToPortalCatalog();
    return;
  }
  appState.inFocusMode = false;
  appState.portalMode = 'course-lobby';
  saveState(true);
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHeaderProgress() {
  const pct = calculateGlobalProgress();
  const fillEl = document.getElementById('globalProgressFill');
  const textEl = document.getElementById('globalProgressText');
  const statusEl = document.getElementById('globalProgressStatus');

  if (fillEl) fillEl.style.width = `${pct}%`;
  if (textEl) textEl.textContent = `${pct}%`;
  if (statusEl) {
    statusEl.textContent = appState.finalExamPassed
      ? 'Capacitação Concluída — Certificado Emitido'
      : `${appState.completedModules.length} de 4 Módulos Concluídos`;
  }
}

function renderEmployeeBar() {
  const user = getCurrentUser();
  const badgeName = document.getElementById('headerUserName');
  const welcomeHeading = document.getElementById('courseWelcomeHeading');
  const resumeHint = document.getElementById('courseResumeHint');
  const resumeActionBox = document.getElementById('courseResumeActionBox');

  if (badgeName && user) {
    badgeName.textContent = `${user.name} (${user.matricula})`;
  }
  if (welcomeHeading && user) {
    welcomeHeading.textContent = `Olá, ${user.name}! Bem-vindo(a) à Trilha Interativa AVSEC (SBIZ)`;
  }
  if (resumeHint && user) {
    const resumeText = getReadableResumePoint(user.id, appState.activeCourseId);
    const spent = getUserCourseProgress(user.id, appState.activeCourseId).totalSecondsSpent || 0;
    resumeHint.innerHTML = `📍 <strong>Status atual:</strong> ${escapeHtml(resumeText)} &nbsp;|&nbsp; ⏱️ <strong>Tempo neste curso:</strong> ${formatDurationHM(spent)} (${formatDecimalHours(spent)}). Você pode sair e continuar depois a qualquer momento.`;
  }
  if (resumeActionBox && user) {
    const prog = getUserCourseProgress(user.id, appState.activeCourseId);
    const targetView = prog.finalExamPassed ? 'certificate' : (prog.currentView || 'module-1');
    const btnLabel = prog.finalExamPassed
      ? '🎓 Abrir Meu Certificado Digital'
      : `▶ Continuar de Onde Parei (${getReadableResumePoint(user.id, appState.activeCourseId)})`;
    resumeActionBox.innerHTML = `
      <button type="button" class="btn btn-primary" onclick="navigateToView('${targetView}')">
        ${btnLabel}
      </button>
    `;
  }
}

function renderLobbyGrid() {
  const gridEl = document.getElementById('lobbyModulesGrid');
  if (!gridEl) return;

  let html = '';

  COURSE_MODULES.forEach((mod) => {
    const completed = appState.completedModules.includes(mod.id);
    const unlocked = isModuleUnlocked(mod.id);
    const cardState = completed ? 'completed' : (unlocked ? 'unlocked' : 'locked');
    const badgeClass = completed ? 'badge-completed' : (unlocked ? 'badge-current' : 'badge-locked');
    const badgeText = completed ? '✓ Concluído (100%)' : (unlocked ? '▶ Liberado' : '🔒 Bloqueado');
    const savedStep = (appState.activePillByModule && appState.activePillByModule[mod.id]) || 0;
    const btnText = completed
      ? 'Revisar Seções / Quiz'
      : (unlocked ? (savedStep > 0 ? `Continuar ${mod.code} (Seção ${Math.min(savedStep + 1, 3)}) →` : `Iniciar ${mod.code} (Modo Foco) →`) : 'Conclua o módulo anterior');

    html += `
      <div class="lobby-module-card ${cardState}">
        <div>
          <div class="lobby-card-top">
            <span class="lobby-code-tag">${mod.code} • ⏱️ ${mod.duration}</span>
            <span class="status-badge ${badgeClass}">${badgeText}</span>
          </div>
          <h4>${mod.shortTitle}</h4>
          <p>${mod.subtitle}</p>
        </div>
        <button
          type="button"
          class="btn ${completed ? 'btn-outline' : (unlocked ? 'btn-primary' : 'btn-outline')}"
          style="width: 100%;"
          ${!unlocked ? 'disabled' : ''}
          onclick="navigateToView('module-${mod.id}')"
        >
          ${btnText}
        </button>
      </div>
    `;
  });

  // Card da Avaliação Final (10 Questões)
  const examUnlocked = isFinalExamUnlocked();
  const examCompleted = appState.finalExamPassed;
  const examCardState = examCompleted ? 'completed' : (examUnlocked ? 'unlocked' : 'locked');

  html += `
    <div class="lobby-module-card ${examCardState}">
      <div>
        <div class="lobby-card-top">
          <span class="lobby-code-tag">ETAPA FINAL • 10 QUESTÕES</span>
          <span class="status-badge ${examCompleted ? 'badge-completed' : (examUnlocked ? 'badge-current' : 'badge-locked')}">
            ${examCompleted ? '✓ Aprovado' : (examUnlocked ? '📝 Liberada' : '🔒 Bloqueado')}
          </span>
        </div>
        <h4>Avaliação Final de Capacitação AVSEC</h4>
        <p>10 questões gerais integrando os 4 módulos. Nota mínima para aprovação: 80% (8/10) com Gabarito Comentado.</p>
      </div>
      <button
        type="button"
        class="btn ${examCompleted ? 'btn-outline' : (examUnlocked ? 'btn-primary' : 'btn-outline')}"
        style="width: 100%;"
        ${!examUnlocked ? 'disabled' : ''}
        onclick="navigateToView('final-exam')"
      >
        ${examCompleted ? 'Revisar Avaliação / Gabarito' : (examUnlocked ? 'Iniciar Avaliação Final →' : 'Conclua os 4 módulos primeiro')}
      </button>
    </div>
  `;

  // Card do Certificado Digital
  const certUnlocked = appState.finalExamPassed;
  html += `
    <div class="lobby-module-card ${certUnlocked ? 'completed' : 'locked'}">
      <div>
        <div class="lobby-card-top">
          <span class="lobby-code-tag">COMPROVANTE OFICIAL</span>
          <span class="status-badge ${certUnlocked ? 'badge-completed' : 'badge-locked'}">
            ${certUnlocked ? '🎓 Disponível' : '🔒 Bloqueado'}
          </span>
        </div>
        <h4>Certificado Digital de Conclusão</h4>
        <p>Emissão oficial com Nome do Empregado, Data, Nota Final, Código de Validação e impressão em PDF.</p>
      </div>
      <button
        type="button"
        class="btn ${certUnlocked ? 'btn-success' : 'btn-outline'}"
        style="width: 100%;"
        ${!certUnlocked ? 'disabled' : ''}
        onclick="navigateToView('certificate')"
      >
        ${certUnlocked ? '🎓 Abrir / Imprimir Certificado' : 'Aprovação na Avaliação necessária'}
      </button>
    </div>
  `;

  gridEl.innerHTML = html;
}

function navigateToView(viewId) {
  if (viewId.startsWith('module-')) {
    const modId = parseInt(viewId.replace('module-', ''), 10);
    if (!isModuleUnlocked(modId)) {
      showModal({
        type: 'warning',
        title: 'Módulo Bloqueado (Bloqueio Sequencial)',
        message: `O <strong>Módulo ${modId}</strong> só é liberado após a aprovação com <strong>100% (3/3)</strong> no Quiz do <strong>Módulo ${modId - 1}</strong>.`,
        buttonText: 'Entendi'
      });
      return;
    }
  } else if (viewId === 'final-exam' && !isFinalExamUnlocked()) {
    showModal({
      type: 'warning',
      title: 'Avaliação Final Bloqueada',
      message: 'Conclua todos os 4 Módulos Sequenciais com 100% de acerto nos Quizzes para desbloquear a Avaliação Final.',
      buttonText: 'Entendi'
    });
    return;
  } else if (viewId === 'certificate' && !appState.finalExamPassed) {
    showModal({
      type: 'warning',
      title: 'Certificado Bloqueado',
      message: 'Alcance nota mínima de 80% (8/10) na Avaliação Final para emitir seu Certificado Digital.',
      buttonText: 'Entendi'
    });
    return;
  }

  appState.currentView = viewId;
  appState.portalMode = 'course-focus';
  appState.inFocusMode = true; // Entra na Tela Exclusiva de Imersão sem distrações!
  saveState(true);
  renderAll();
  scrollToModuleTop();
}

function scrollToModuleTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectModulePill(modId, pillIdx) {
  appState.activePillByModule[modId] = pillIdx;
  if (!appState.visitedPills[modId]) appState.visitedPills[modId] = [];
  if (!appState.visitedPills[modId].includes(pillIdx)) {
    appState.visitedPills[modId].push(pillIdx);
  }
  appState.portalMode = 'course-focus';
  appState.inFocusMode = true;
  saveState(false);
  renderFocusModeStage();
  scrollToModuleTop();
}

// ============================================================================
// RENDERIZAÇÃO DO MODO FOCO (TELA EXCLUSIVA PARA A SEÇÃO OU QUIZ)
// ============================================================================
function renderFocusModeStage() {
  const topbarEl = document.getElementById('focusTopbar');
  const container = document.getElementById('focusStageContent');
  if (!container || !topbarEl) return;

  if (appState.currentView.startsWith('module-')) {
    const modId = parseInt(appState.currentView.replace('module-', ''), 10);
    const mod = COURSE_MODULES.find(m => m.id === modId) || COURSE_MODULES[0];
    renderModuleFocusView(topbarEl, container, mod);
  } else if (appState.currentView === 'final-exam') {
    renderFinalExamFocusView(topbarEl, container);
  } else if (appState.currentView === 'certificate') {
    renderCertificateFocusView(topbarEl, container);
  }
}

function renderModuleFocusView(topbarEl, container, mod) {
  const isCompleted = appState.completedModules.includes(mod.id);
  const activeIdx = appState.activePillByModule[mod.id] ?? 0;
  const visited = appState.visitedPills[mod.id] || [0];

  // Barra superior minimalista do Modo Foco
  const dotsHtml = [
    { label: 'Seção 1', idx: 0 },
    { label: 'Seção 2', idx: 1 },
    { label: 'Seção 3', idx: 2 },
    { label: '🧠 Quiz (3/3)', idx: 3 }
  ].map(item => {
    const isCurrent = activeIdx === item.idx;
    const isDone = (item.idx < 3 && visited.includes(item.idx) && !isCurrent) || (item.idx === 3 && isCompleted && !isCurrent);
    return `
      <button
        type="button"
        class="focus-step-dot ${isCurrent ? 'active' : ''} ${isDone ? 'done' : ''}"
        onclick="selectModulePill(${mod.id}, ${item.idx})"
      >
        ${isDone ? '✓ ' : ''}${item.label}
      </button>
    `;
  }).join('');

  topbarEl.innerHTML = `
    <div class="focus-topbar-inner">
      <div style="display:flex; gap:0.5rem;">
        <button type="button" class="focus-exit-btn" onclick="exitFocusMode()">
          ← Módulos do Curso
        </button>
        <button type="button" class="focus-exit-btn" onclick="returnToPortalCatalog()" title="Salvar onde parou e voltar ao Portal Academia DNIZ">
          ⏸️ Pausar e Continuar Depois
        </button>
      </div>
      <div class="focus-pills-nav" aria-label="Etapas do módulo atual">
        ${dotsHtml}
      </div>
      <div class="focus-module-indicator">
        ${mod.code} • Etapa ${activeIdx + 1}/4
      </div>
    </div>
  `;

  // Conteúdo exclusivo apenas da Seção ativa ou do Quiz
  if (activeIdx < 3) {
    const currentPill = mod.pills[activeIdx];
    const prevBtn = activeIdx > 0
      ? `<button type="button" class="btn btn-outline" onclick="selectModulePill(${mod.id}, ${activeIdx - 1})">← Seção ${activeIdx}</button>`
      : `<button type="button" class="btn btn-outline" onclick="exitFocusMode()">← Voltar aos Módulos</button>`;
    const nextBtn = activeIdx < 2
      ? `<button type="button" class="btn btn-primary" onclick="selectModulePill(${mod.id}, ${activeIdx + 1})">Avançar para Seção ${activeIdx + 2} →</button>`
      : `<button type="button" class="btn btn-primary" onclick="selectModulePill(${mod.id}, 3)">Ir para o 🧠 Quiz do ${mod.code} (Trava 3/3) →</button>`;

    container.innerHTML = `
      <div class="pill-header-banner">
        <div>
          <span style="font-size:0.74rem; font-weight:800; color:var(--nav-blue); text-transform:uppercase; letter-spacing:0.05em;">
            ${mod.title}
          </span>
          <h3>${currentPill.title}</h3>
        </div>
        <span class="status-badge badge-current">Seção ${activeIdx + 1} de 3</span>
      </div>

      ${currentPill.renderHtml()}

      <div class="pill-footer-nav">
        ${prevBtn}
        ${nextBtn}
      </div>
    `;
  } else {
    // TELA EXCLUSIVA DO QUIZ DO MÓDULO (TRAVA 3/3)
    const quizQuestionsHtml = mod.quiz.map((q) => {
      const optionsHtml = q.options.map((optText, optIdx) => {
        const letter = ['A', 'B', 'C', 'D'][optIdx];
        return `
          <label class="option-label" id="label-${q.id}-${optIdx}">
            <input
              type="radio"
              name="quiz-${q.id}"
              value="${optIdx}"
              onchange="handleOptionHighlight('${q.id}', ${optIdx})"
            />
            <span><strong>${letter})</strong> ${optText}</span>
          </label>
        `;
      }).join('');

      return `
        <div class="question-card" id="qcard-${q.id}">
          <div class="question-title">${q.question}</div>
          <div class="options-list">
            ${optionsHtml}
          </div>
        </div>
      `;
    }).join('');

    let modGabaritoHtml = '';
    if (isCompleted) {
      const gabItems = mod.quiz.map(q => {
        const letter = ['A', 'B', 'C', 'D'][q.correctIndex];
        return `
          <div class="gabarito-item">
            <strong style="color:var(--nav-navy); display:block; margin-bottom:0.25rem;">${q.question}</strong>
            <p style="font-size:0.86rem; color:#065F46; margin-bottom:0.25rem;">
              <strong>✓ Alternativa Correta (${letter}):</strong> ${q.options[q.correctIndex]}
            </p>
            <p style="font-size:0.84rem; color:#334155;">
              <strong>📖 Gabarito Comentado:</strong> ${q.comment}
            </p>
          </div>
        `;
      }).join('');

      modGabaritoHtml = `
        <div class="gabarito-box">
          <h4 style="color:var(--nav-navy); font-size:1.05rem; margin-bottom:0.85rem;">
            ✅ Gabarito Comentado (${mod.code} Concluído com 100%)
          </h4>
          ${gabItems}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="pill-header-banner">
        <div>
          <span style="font-size:0.74rem; font-weight:800; color:var(--nav-blue); text-transform:uppercase; letter-spacing:0.05em;">
            ${mod.title}
          </span>
          <h3>🧠 QUIZ DE VALIDAÇÃO DO ${mod.code} (Trava 3/3)</h3>
        </div>
        <span class="status-badge badge-current">Exigência: 100% (3/3)</span>
      </div>

      <div class="quiz-rule-banner">
        ⚠️ <strong>Regra do Treinamento:</strong> Para avançar ao próximo módulo, você deve acertar <strong>todas as 3 questões (100% de aproveitamento)</strong>. Caso erre qualquer resposta, o sistema acionará um alerta, zerará o quiz e redirecionará automaticamente para a <strong>Seção 1 do ${mod.code}</strong>.
      </div>

      <form id="moduleQuizForm-${mod.id}" onsubmit="submitModuleQuiz(event, ${mod.id})">
        ${quizQuestionsHtml}

        <div class="pill-footer-nav">
          <button type="button" class="btn btn-outline" onclick="selectModulePill(${mod.id}, 2)">
            ← Voltar para a Seção 3
          </button>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            ${isCompleted ? `
              <button type="button" class="btn btn-success" onclick="advanceAfterModule(${mod.id})">
                Avançar para a Próxima Etapa →
              </button>
            ` : ''}
            <button type="submit" class="btn btn-primary">
              Validar Respostas (Trava 3/3)
            </button>
          </div>
        </div>
      </form>

      ${modGabaritoHtml}
    `;
  }
}

// ============================================================================
// FUNÇÕES DE INTERATIVIDADE NAS PÍLULAS (DESAFIOS, ÁRVORE, MITO/FATO, PILARES)
// ============================================================================

function answerWorkbench(modKey, choiceLetter, isCorrect) {
  const btnA = document.getElementById(`wb-${modKey}-btn-A`);
  const btnB = document.getElementById(`wb-${modKey}-btn-B`);
  const fb = document.getElementById(`wb-${modKey}-feedback`);
  if (!fb) return;

  if (btnA) btnA.classList.remove('picked-correct', 'picked-wrong');
  if (btnB) btnB.classList.remove('picked-correct', 'picked-wrong');

  const pickedBtn = choiceLetter === 'A' ? btnA : btnB;
  if (pickedBtn) {
    pickedBtn.classList.add(isCorrect ? 'picked-correct' : 'picked-wrong');
  }

  fb.className = `workbench-feedback show ${isCorrect ? 'correct' : 'wrong'}`;

  if (modKey === 'm1') {
    if (isCorrect) {
      fb.innerHTML = `
        <strong>✅ Resposta Exata: Situação B!</strong><br>
        A invasão patrimonial e a ameaça física a um ponto sensível do tráfego aéreo constituem <strong>ato ilícito intencional</strong>, exigindo pronta resposta AVSEC conforme a <strong>ICA 205-48</strong>
        <span class="ref-citation">ICA-205-48, p. 18</span> <span class="ref-citation">ICA-205-51, p. 30, 46</span>.
        Já a Situação A (desgaste de bateria de nobreak) é uma falha técnica não intencional tratada no escopo de <em>Safety</em> / Manutenção.
      `;
    } else {
      fb.innerHTML = `
        <strong>❌ Quase lá! Analise novamente:</strong><br>
        A Situação A (falha elétrica por desgaste de bateria do nobreak) é um evento técnico involuntário (<strong>Safety</strong>). Clique na <strong>Situação B</strong> para ver a ocorrência estritamente <strong>AVSEC</strong>!
      `;
    }
  } else if (modKey === 'm2') {
    if (isCorrect) {
      fb.innerHTML = `
        <strong>✅ Decisão Operacional Correta (Situação B)!</strong><br>
        Na 3ª Camada (ARS), nenhuma pessoa pode circular sem crachá visível ou desacompanhada. O colaborador aplica imediatamente o <strong>Procedimento de Desafio (abordagem cortês)</strong> e aciona a Gerência / Agente AVSEC conforme a <strong>ICA 63-14</strong>.
      `;
    } else {
      fb.innerHTML = `
        <strong>❌ Atenção!</strong> Omitir-se diante de pessoa não identificada na Sala Técnica/AFIS compromete a 3ª Camada de Defesa (ARS). Selecione a <strong>Situação B</strong>!
      `;
    }
  } else if (modKey === 'm3') {
    if (isCorrect) {
      fb.innerHTML = `
        <strong>✅ Conduta Correta (Situação B)!</strong><br>
        Conforme o <strong>Item 8.2 da ICA 205-48</strong>, é proibido conectar dispositivos USB particulares ou mídias não homologadas nos consoles operacionais e servidores do SISCEAB, protegendo os Sistemas Críticos de Missão contra ataques cibernéticos.
      `;
    } else {
      fb.innerHTML = `
        <strong>❌ Risco Crítico Cibernético!</strong> Conectar celulares ou pen drives pessoais em consoles operacionais viola o Item 8.2 da ICA 205-48. Clique na <strong>Situação B</strong>!
      `;
    }
  } else if (modKey === 'm4') {
    if (isCorrect) {
      fb.innerHTML = `
        <strong>✅ Protocolo Perfeito (Situação B)!</strong><br>
        A reentrada para reassunção operacional só ocorre após a <strong>declaração formal de "Área Segura" pelas autoridades competentes e autorização da Gerência</strong>, seguida de cancelamento do NOTAM e submissão do <strong>RELSEC no portal SGAVSEC em até 24 horas</strong>.
      `;
    } else {
      fb.innerHTML = `
        <strong>❌ Proibido Reentrar sem Autorização!</strong> Jamais retorne à edificação evacuando por ameaça de bomba sem a declaração formal de "Área Segura". Clique na <strong>Situação B</strong>!
      `;
    }
  }
}

function selectNormNode(idx) {
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`tree-btn-${i}`);
    if (btn) btn.classList.toggle('active', i === idx);
  }
  const box = document.getElementById('normTreeDetailBox');
  const item = NORMATIVE_TREE_DATA[idx];
  if (box && item) {
    const refsHtml = item.refs.map(r => `<span class="ref-citation">${r}</span>`).join(' ');
    box.innerHTML = `
      <h4>${item.title}</h4>
      <p style="font-size:0.9rem; color:#1E293B; margin-bottom:0.75rem;">${item.desc}</p>
      <div>${refsHtml}</div>
    `;
  }
}

function revealMythFact(modKey, clickedMyth) {
  const box = document.getElementById(`myth-reveal-${modKey}`);
  if (!box) return;
  box.classList.add('show');

  if (modKey === 'm1') {
    box.innerHTML = `
      <strong style="color:${clickedMyth ? '#047857' : '#B91C1C'};">
        ${clickedMyth ? '🎯 Você acertou! Essa afirmação é um MITO!' : '⚠️ Atenção: Essa afirmação é um MITO!'}
      </strong><br>
      <strong>❌ MITO:</strong> "Segurança AVSEC é dever exclusivo da Polícia Federal e da Guarda Patrimonial do Aeroporto."<br>
      <strong>✅ FATO:</strong> No âmbito do SISCEAB e da NAV Brasil, <strong>cada colaborador (operadores, técnicos e administrativos) é um elo ativo do SeMS</strong>
      <span class="ref-citation">DCA-205-7, p. 12</span> <span class="ref-citation">ICA-205-48, p. 17, 22</span>. A identificação de vulnerabilidades e o reporte preventivo cabem a todo o efetivo.
    `;
  } else if (modKey === 'm2') {
    box.innerHTML = `
      <strong style="color:${clickedMyth ? '#047857' : '#B91C1C'};">
        ${clickedMyth ? '🎯 Você acertou! Isso é um MITO!' : '⚠️ Atenção: Isso é um MITO!'}
      </strong><br>
      <strong>✅ FATO (ICA 63-14):</strong> Nenhum prestador terceirizado ou visitante pode permanecer na 3ª Camada (ARS — Sala Técnica / Sala AFIS) sem credencial visível e sem o acompanhamento presencial (escolta) de um empregado credenciado da NAV Brasil.
    `;
  } else if (modKey === 'm3') {
    box.innerHTML = `
      <strong style="color:${clickedMyth ? '#047857' : '#B91C1C'};">
        ${clickedMyth ? '🎯 Você acertou! Isso é um MITO!' : '⚠️ Atenção: Isso é um MITO!'}
      </strong><br>
      <strong>✅ FATO:</strong> Qualquer drone não autorizado na zona de aproximação de SBIZ representa grave ameaça operacional e AVSEC, devendo ser reportado imediatamente às aeronaves na frequência, ao controle (ACC-AZ) e ao APOC.
    `;
  }
}

function selectSemsPillar(idx) {
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`pillar-btn-${i}`);
    if (btn) {
      btn.classList.toggle('active', i === idx);
      if (i === idx) btn.classList.add('explored');
    }
  }
  const spot = document.getElementById('semsPillarSpotlight');
  const item = SEMS_PILLARS_DATA[idx];
  if (spot && item) {
    const refsHtml = item.refs.map(r => `<span class="ref-citation">${r}</span>`).join(' ');
    spot.innerHTML = `
      <h4 style="color:var(--nav-navy); font-size:1.1rem; margin-bottom:0.45rem;">${item.title}</h4>
      <p style="font-size:0.93rem; color:#1E293B; margin-bottom:0.65rem;">${item.desc}</p>
      <div>${refsHtml}</div>
    `;
  }
}

function selectDefenseLayer(idx) {
  for (let i = 0; i < 3; i++) {
    const btn = document.getElementById(`layer-btn-${i}`);
    if (btn) {
      btn.classList.toggle('active', i === idx);
      if (i === idx) btn.classList.add('explored');
    }
  }
  const spot = document.getElementById('defenseLayerSpotlight');
  const item = DEFENSE_LAYERS_DATA[idx];
  if (spot && item) {
    spot.innerHTML = `
      <h4 style="color:var(--nav-navy); font-size:1.08rem; margin-bottom:0.45rem;">${item.title}</h4>
      <p style="font-size:0.92rem; color:#1E293B;">${item.desc}</p>
    `;
  }
}

function selectNbqrStep(idx) {
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`nbqr-btn-${i}`);
    if (btn) {
      btn.classList.toggle('active', i === idx);
      if (i === idx) btn.classList.add('explored');
    }
  }
  const spot = document.getElementById('nbqrSpotlight');
  const item = NBQR_STEPS_DATA[idx];
  if (spot && item) {
    spot.innerHTML = `
      <h4 style="color:var(--nav-navy); font-size:1.08rem; margin-bottom:0.45rem;">${item.title}</h4>
      <p style="font-size:0.92rem; color:#1E293B;">${item.desc}</p>
    `;
  }
}

function selectEsabStep(idx) {
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`esab-btn-${i}`);
    if (btn) {
      btn.classList.toggle('active', i === idx);
      if (i === idx) btn.classList.add('explored');
    }
  }
  const spot = document.getElementById('esabSpotlight');
  const item = ESAB_STEPS_DATA[idx];
  if (spot && item) {
    spot.innerHTML = `
      <h4 style="color:var(--nav-navy); font-size:1.08rem; margin-bottom:0.45rem;">${item.title}</h4>
      <p style="font-size:0.92rem; color:#1E293B;">${item.desc}</p>
    `;
  }
}

function handleOptionHighlight(questionId, selectedIdx) {
  for (let i = 0; i < 4; i++) {
    const lbl = document.getElementById(`label-${questionId}-${i}`);
    if (lbl) lbl.classList.toggle('selected', i === selectedIdx);
  }
}

// ============================================================================
// VALIDAÇÃO DO QUIZ DO MÓDULO (TRAVA 3/3 + REDIRECIONAMENTO À PÍLULA 1)
// ============================================================================
function submitModuleQuiz(event, modId) {
  event.preventDefault();
  const mod = COURSE_MODULES.find(m => m.id === modId);
  if (!mod) return;

  const userAnswers = [];
  let allAnswered = true;

  mod.quiz.forEach(q => {
    const checked = document.querySelector(`input[name="quiz-${q.id}"]:checked`);
    if (!checked) {
      allAnswered = false;
    } else {
      userAnswers.push(parseInt(checked.value, 10));
    }
  });

  if (!allAnswered) {
    showModal({
      type: 'warning',
      title: 'Questões Pendentes no Quiz',
      message: 'Selecione uma alternativa para todas as <strong>3 questões</strong> antes de validar o módulo.',
      buttonText: 'Voltar ao Quiz'
    });
    return;
  }

  let correctCount = 0;
  mod.quiz.forEach((q, idx) => {
    if (userAnswers[idx] === q.correctIndex) correctCount++;
  });

  if (correctCount === 3) {
    // APROVADO 3/3 (100%)
    if (!appState.completedModules.includes(modId)) {
      appState.completedModules.push(modId);
      appState.completedModules.sort((a, b) => a - b);
      saveState(true);
    }
    renderAll();

    const gabSummary = mod.quiz.map((q, i) => {
      const letter = ['A', 'B', 'C', 'D'][q.correctIndex];
      return `<p style="font-size:0.84rem; background:#ECFDF5; padding:0.55rem 0.75rem; border-radius:6px; border-left:4px solid #10B981;"><strong>Q${i + 1} (${letter}):</strong> ${q.comment}</p>`;
    }).join('');

    const nextLabel = modId < 4
      ? `Avançar para o Módulo ${modId + 1} →`
      : 'Ir para a Avaliação Final (10 Questões) →';

    showModal({
      type: 'success',
      title: `Aprovado com 100% (3/3) no ${mod.code}!`,
      message: `
        <p>Excelente! Você acertou <strong>3 de 3 questões</strong> e desbloqueou a próxima etapa.</p>
        ${gabSummary}
      `,
      buttonText: nextLabel,
      secondaryButtonText: 'Permanecer neste Módulo',
      onConfirm: () => {
        advanceAfterModule(modId);
      }
    });
  } else {
    // ERROU QUALQUER QUESTÃO: ZERA O QUIZ E REDIRECIONA PARA O TOPO DO MÓDULO (SEÇÃO 1)
    appState.activePillByModule[modId] = 0; // Redireciona automaticamente para a Seção 1 (início do módulo)
    saveState(true);
    renderAll();
    scrollToModuleTop();

    showModal({
      type: 'error',
      title: `Trava 3/3 Acionada: Você acertou ${correctCount} de 3 questões`,
      message: `
        <p>⚠️ <strong>Regra de Eliminação do Treinamento:</strong> Para avançar ao próximo módulo, é obrigatório acertar <strong>todas as 3 questões (100% de aproveitamento)</strong>.</p>
        <p>Suas respostas do quiz foram <strong>zeradas</strong> e você foi <strong>redirecionado automaticamente para o início do ${mod.code} (📌 Seção 1)</strong> para releitura das seções antes de tentar novamente.</p>
      `,
      buttonText: `Reler ${mod.code} desde a Seção 1`,
      onConfirm: () => {
        scrollToModuleTop();
      }
    });
  }
}

function advanceAfterModule(modId) {
  if (modId < 4) {
    navigateToView(`module-${modId + 1}`);
  } else {
    navigateToView('final-exam');
  }
}

// ============================================================================
// AVALIAÇÃO FINAL DE CAPACITAÇÃO (MODO FOCO EXCLUSIVO — 10 QUESTÕES)
// ============================================================================
function renderFinalExamFocusView(topbarEl, container) {
  topbarEl.innerHTML = `
    <div class="focus-topbar-inner">
      <button type="button" class="focus-exit-btn" onclick="exitFocusMode()">
        ← Painel dos Módulos
      </button>
      <div class="focus-pills-nav">
        <span class="focus-step-dot active">📝 Avaliação Final (10 Questões)</span>
      </div>
      <div class="focus-module-indicator">
        Nota Mínima: 80% (8/10)
      </div>
    </div>
  `;

  const questionsHtml = FINAL_EXAM_QUESTIONS.map((q) => {
    const savedAns = appState.finalExamAnswers[q.id];
    const optionsHtml = q.options.map((optText, optIdx) => {
      const letter = ['A', 'B', 'C', 'D'][optIdx];
      const isChecked = savedAns === optIdx;
      return `
        <label class="option-label ${isChecked ? 'selected' : ''}" id="label-${q.id}-${optIdx}">
          <input
            type="radio"
            name="quiz-${q.id}"
            value="${optIdx}"
            ${isChecked ? 'checked' : ''}
            onchange="handleOptionHighlight('${q.id}', ${optIdx})"
          />
          <span><strong>${letter})</strong> ${optText}</span>
        </label>
      `;
    }).join('');

    return `
      <div class="question-card" id="qcard-${q.id}">
        <div style="font-size:0.74rem; font-weight:800; color:var(--nav-blue); text-transform:uppercase; margin-bottom:0.25rem;">
          Tema: ${q.tema}
        </div>
        <div class="question-title">${q.question}</div>
        <div class="options-list">
          ${optionsHtml}
        </div>
      </div>
    `;
  }).join('');

  let gabaritoHtml = '';
  if (appState.finalExamScore !== null) {
    const pct = Math.round((appState.finalExamScore / FINAL_EXAM_QUESTIONS.length) * 100);
    const itemsHtml = FINAL_EXAM_QUESTIONS.map((q) => {
      const userAns = appState.finalExamAnswers[q.id];
      const isCorrect = userAns === q.correctIndex;
      const correctLetter = ['A', 'B', 'C', 'D'][q.correctIndex];
      const userLetter = userAns !== undefined ? ['A', 'B', 'C', 'D'][userAns] : '-';
      return `
        <div class="gabarito-item ${isCorrect ? '' : 'wrong'}">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; flex-wrap:wrap; margin-bottom:0.3rem;">
            <strong style="color:var(--nav-navy);">${q.question}</strong>
            <span class="status-badge ${isCorrect ? 'badge-completed' : 'badge-locked'}">
              ${isCorrect ? '✓ Acertou' : '✗ Incorreta'} (Sua resposta: ${userLetter} | Gabarito: ${correctLetter})
            </span>
          </div>
          <p style="font-size:0.86rem; color:#1E293B; margin-bottom:0.25rem;">
            <strong>Gabarito (${correctLetter}):</strong> ${q.options[q.correctIndex]}
          </p>
          <p style="font-size:0.84rem; color:#475569;">
            <strong>📖 Comentário Normativo:</strong> ${q.comment}
          </p>
        </div>
      `;
    }).join('');

    gabaritoHtml = `
      <div class="gabarito-box" id="gabaritoComentadoSection">
        <h3 style="color:var(--nav-navy); margin-bottom:0.85rem;">
          📋 Gabarito Comentado da Avaliação Final — Nota: ${appState.finalExamScore}/10 (${pct}%)
        </h3>
        ${itemsHtml}
      </div>
    `;
  }

  container.innerHTML = `
    <div class="pill-header-banner">
      <div>
        <span style="font-size:0.74rem; font-weight:800; color:var(--nav-blue); text-transform:uppercase; letter-spacing:0.05em;">
          ETAPA FINAL DE CAPACITAÇÃO • NAV BRASIL (SBIZ)
        </span>
        <h3>📝 Avaliação Final de Capacitação AVSEC (10 Questões)</h3>
      </div>
      <span class="status-badge badge-current">Mínimo: 80% (8/10)</span>
    </div>

    <div class="quiz-rule-banner" style="display:flex; flex-wrap:wrap; gap:0.75rem; align-items:center; justify-content:space-between;">
      <div>
        <strong>👤 Identificação para o Certificado:</strong> Informe seu Nome Completo caso ainda não tenha preenchido no painel inicial.
      </div>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        <input
          type="text"
          id="focusEmployeeNameInput"
          class="employee-input"
          style="min-width:220px; background:#FFF;"
          placeholder="Seu Nome Completo..."
          value="${escapeHtml(appState.employeeName)}"
          oninput="appState.employeeName = this.value; saveState();"
        />
        <input
          type="text"
          id="focusEmployeeIdInput"
          class="employee-input"
          style="min-width:160px; background:#FFF;"
          placeholder="Matrícula / Função"
          value="${escapeHtml(appState.employeeId)}"
          oninput="appState.employeeId = this.value; saveState();"
        />
      </div>
    </div>

    <form id="finalExamForm" onsubmit="submitFinalExam(event)">
      ${questionsHtml}

      <div class="pill-footer-nav">
        <button type="button" class="btn btn-outline" onclick="exitFocusMode()">
          ← Voltar ao Painel dos Módulos
        </button>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          ${appState.finalExamPassed ? `
            <button type="button" class="btn btn-success" onclick="navigateToView('certificate')">
              🎓 Visualizar / Imprimir Certificado Digital →
            </button>
          ` : ''}
          <button type="submit" class="btn btn-primary">
            Corrigir Avaliação Final (10 Questões)
          </button>
        </div>
      </div>
    </form>

    ${gabaritoHtml}
  `;
}

function submitFinalExam(event) {
  event.preventDefault();

  const focusName = document.getElementById('focusEmployeeNameInput');
  const focusId = document.getElementById('focusEmployeeIdInput');
  if (focusName) appState.employeeName = focusName.value.trim();
  if (focusId) appState.employeeId = focusId.value.trim();

  if (!appState.employeeName) {
    showModal({
      type: 'warning',
      title: 'Informe o Nome do Empregado',
      message: 'Por favor, preencha seu <strong>Nome Completo</strong> no campo de identificação acima para emitir o Certificado Digital de Conclusão.',
      buttonText: 'Preencher Nome',
      onConfirm: () => {
        if (focusName) focusName.focus();
      }
    });
    return;
  }

  const currentAnswers = {};
  let allAnswered = true;

  FINAL_EXAM_QUESTIONS.forEach(q => {
    const checked = document.querySelector(`input[name="quiz-${q.id}"]:checked`);
    if (!checked) {
      allAnswered = false;
    } else {
      currentAnswers[q.id] = parseInt(checked.value, 10);
    }
  });

  if (!allAnswered) {
    showModal({
      type: 'warning',
      title: 'Questões Pendentes',
      message: 'Por favor, responda todas as <strong>10 questões</strong> da Avaliação Final antes de finalizar.',
      buttonText: 'Continuar'
    });
    return;
  }

  let score = 0;
  FINAL_EXAM_QUESTIONS.forEach(q => {
    if (currentAnswers[q.id] === q.correctIndex) score++;
  });

  const percentage = Math.round((score / FINAL_EXAM_QUESTIONS.length) * 100);
  appState.finalExamAnswers = currentAnswers;
  appState.finalExamScore = score;

  if (score >= 8) {
    appState.finalExamPassed = true;
    if (!appState.completionDate) {
      appState.completionDate = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
      });
    }
    if (!appState.validationCode) {
      appState.validationCode = generateValidationCode(appState.employeeName);
    }
    saveState(true);
    renderAll();

    showModal({
      type: 'success',
      title: `Parabéns! Aprovado com ${score}/10 (${percentage}%)`,
      message: `
        <p>Colaborador(a) <strong>${escapeHtml(appState.employeeName)}</strong>, você atingiu <strong>${percentage}% de aproveitamento</strong> (mínimo exigido: 80%).</p>
        <p>Seu <strong>Certificado Digital de Conclusão AVSEC</strong> e o <strong>Gabarito Comentado</strong> já estão disponíveis!</p>
      `,
      buttonText: 'Abrir Certificado Digital 🎓',
      secondaryButtonText: 'Ver Gabarito Comentado',
      onConfirm: () => navigateToView('certificate'),
      onSecondary: () => {
        const gab = document.getElementById('gabaritoComentadoSection');
        if (gab) gab.scrollIntoView({ behavior: 'smooth' });
      }
    });
  } else {
    appState.finalExamPassed = false;
    saveState(true);
    renderAll();

    showModal({
      type: 'error',
      title: `Aproveitamento: ${score}/10 (${percentage}%) — Mínimo: 80%`,
      message: `
        <p>Você acertou <strong>${score} de 10 questões (${percentage}%)</strong>. Para aprovação final, são necessários no mínimo <strong>8 acertos (80%)</strong>.</p>
        <p>Consulte o <strong>Gabarito Comentado</strong> abaixo e realize uma nova tentativa.</p>
      `,
      buttonText: 'Ver Gabarito Comentado',
      onConfirm: () => {
        const gab = document.getElementById('gabaritoComentadoSection');
        if (gab) gab.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// ============================================================================
// CERTIFICADO DIGITAL DE CONCLUSÃO (MODO FOCO EXCLUSIVO + INSPEÇÃO DO GESTOR)
// ============================================================================
function renderCertificateFocusView(topbarEl, container) {
  const targetUserId = appState.inspectingUserIdForCert || appState.currentUserId;
  const targetUser = portalDB.users.find(u => u.id === targetUserId) || getCurrentUser();
  const targetProg = targetUser ? getUserCourseProgress(targetUser.id, appState.activeCourseId) : null;

  const scoreVal = targetProg && targetProg.finalExamScore !== null ? targetProg.finalExamScore : (appState.finalExamScore || 10);
  const pct = Math.round((scoreVal / 10) * 100);
  const empName = targetUser ? targetUser.name : (appState.employeeName || 'Empregado NAV Brasil');
  const empId = targetUser
    ? `Matrícula: ${escapeHtml(targetUser.matricula)} • Cargo: ${escapeHtml(targetUser.cargo)}`
    : (appState.employeeId ? `Matrícula / Cargo: ${escapeHtml(appState.employeeId)}` : 'Lotação: DNB / Rádio Imperatriz (SBIZ)');
  const dateStr = (targetProg && targetProg.completionDate) || appState.completionDate || new Date().toLocaleDateString('pt-BR');
  const codeStr = (targetProg && targetProg.validationCode) || appState.validationCode || generateValidationCode(empName);
  const totalSec = targetUser ? getTotalSecondsByUser(targetUser.id) : 0;

  topbarEl.innerHTML = `
    <div class="focus-topbar-inner">
      <div style="display:flex; gap:0.5rem;">
        <button type="button" class="focus-exit-btn" onclick="returnToPortalCatalog()">
          ← Voltar ao Portal Academia DNIZ
        </button>
        <button type="button" class="focus-exit-btn" onclick="exitFocusMode()">
          📚 Módulos do Curso
        </button>
      </div>
      <div class="focus-pills-nav">
        <span class="focus-step-dot active">🎓 Certificado Digital de Conclusão</span>
      </div>
      <div class="focus-module-indicator">
        ${codeStr}
      </div>
    </div>
  `;

  container.innerHTML = `
    <div class="no-print" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.5rem;">
      <button type="button" class="btn btn-outline" onclick="returnToPortalCatalog()">
        ← Voltar ao Portal Academia DNIZ
      </button>
      <button type="button" class="btn btn-primary" onclick="window.print()">
        🖨️ Imprimir / Baixar Certificado em PDF
      </button>
    </div>

    <div class="certificate-wrapper" id="printableCertificate">
      <div class="cert-top-bar">
        <div class="cert-org">
          NAV BRASIL SERVIÇOS DE NAVEGAÇÃO AÉREA S.A.
          <span>Academia DNIZ • Dependência de Navegação Aérea de Imperatriz (SBIZ / RDO-IZ)</span>
          <span>Sistema de Gestão da Segurança da Aviação Civil contra Atos de Interferência Ilícita (SeMS • ICA 205-48)</span>
        </div>
        <div class="cert-badge-seal">
          AVSEC / SeMS<br>SBIZ • SISCEAB
        </div>
      </div>

      <div class="cert-title">Certificado de Conclusão</div>
      <div class="cert-subtitle">Treinamento de Familiarização AVSEC — NAV Brasil (DNB / Rádio Imperatriz - SBIZ)</div>

      <p style="font-size:0.95rem; color:#334155;">Certificamos que o(a) colaborador(a):</p>

      <div class="cert-recipient-name">${escapeHtml(empName)}</div>
      <div style="font-size:0.85rem; color:var(--nav-muted); margin-bottom:1rem;">${empId}</div>

      <p style="font-size:0.91rem; color:#334155; max-width:780px; margin:0 auto;">
        concluiu com aprovação integral os <strong>4 Módulos Sequenciais (100% de aproveitamento nos Quizzes de Módulo)</strong> e a <strong>Avaliação Final de Capacitação AVSEC</strong> na plataforma <strong>Academia DNIZ</strong>, atendendo aos requisitos do Decreto nº 11.195/2022 (PNAVSEC), DCA 205-7, ICA 205-48 (SeMS), ICA 800-8, ICA 37-733, ICA 63-14, Defesa NBQR/BNQR, Cibersegurança, CIRCEA 100-56/2025 (Anexo G — ESAB) e PES-AVSEC SBIZ.
      </p>

      <div class="cert-details-grid">
        <div class="cert-detail-item">
          <span>Dependência Operacional</span>
          <strong>DNB Imperatriz (SBIZ / RDO-IZ)</strong>
        </div>
        <div class="cert-detail-item">
          <span>Quizzes de Módulo (1 a 4)</span>
          <strong>100% (Trava 3/3 Cumprida)</strong>
        </div>
        <div class="cert-detail-item">
          <span>Nota da Avaliação Final</span>
          <strong>${scoreVal}/10 (${pct}% — Aprovado)</strong>
        </div>
        <div class="cert-detail-item">
          <span>Data de Conclusão</span>
          <strong>${dateStr}</strong>
        </div>
        <div class="cert-detail-item">
          <span>Tempo Registrado no Perfil</span>
          <strong>${formatDurationHM(totalSec)} (${formatDecimalHours(totalSec)})</strong>
        </div>
        <div class="cert-detail-item">
          <span>Código de Validação Digital</span>
          <strong style="font-family: monospace; font-size:0.95rem; color:var(--nav-blue);">${codeStr}</strong>
        </div>
      </div>

      <div class="cert-signatures">
        <div class="sig-line">
          ${escapeHtml(empName)}
          <span>Empregado(a) Concluinte — NAV Brasil</span>
        </div>
        <div class="sig-line">
          Gestão Local AVSEC / SeMS — Academia DNIZ
          <span>Rádio Imperatriz (SBIZ) • NAV Brasil</span>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// MODAL & UTILITÁRIOS
// ============================================================================
let currentModalCallbacks = { onConfirm: null, onSecondary: null };

function showModal({ type = 'warning', title, message, buttonText = 'OK', secondaryButtonText = null, onConfirm = null, onSecondary = null }) {
  const backdrop = document.getElementById('feedbackModal');
  const header = document.getElementById('modalHeader');
  const icon = document.getElementById('modalIcon');
  const titleEl = document.getElementById('modalTitle');
  const bodyEl = document.getElementById('modalBody');
  const primaryBtn = document.getElementById('modalPrimaryBtn');
  const secondaryBtn = document.getElementById('modalSecondaryBtn');

  if (!backdrop) return;

  header.className = `modal-header ${type}`;
  icon.textContent = type === 'success' ? '✅' : (type === 'error' ? '🚨' : '⚠️');
  titleEl.textContent = title;
  bodyEl.innerHTML = message;
  primaryBtn.textContent = buttonText;

  if (secondaryButtonText) {
    secondaryBtn.style.display = 'inline-flex';
    secondaryBtn.textContent = secondaryButtonText;
  } else {
    secondaryBtn.style.display = 'none';
  }

  currentModalCallbacks.onConfirm = onConfirm;
  currentModalCallbacks.onSecondary = onSecondary;
  backdrop.classList.add('open');
}

function closeModal(triggerType) {
  const backdrop = document.getElementById('feedbackModal');
  const cardEl = document.getElementById('modalCardContainer');
  if (backdrop) backdrop.classList.remove('open');
  if (cardEl) cardEl.classList.remove('wide');

  if (triggerType === 'primary' && typeof currentModalCallbacks.onConfirm === 'function') {
    const fn = currentModalCallbacks.onConfirm;
    currentModalCallbacks.onConfirm = null;
    fn();
  } else if (triggerType === 'secondary' && typeof currentModalCallbacks.onSecondary === 'function') {
    const fn = currentModalCallbacks.onSecondary;
    currentModalCallbacks.onSecondary = null;
    fn();
  }
}

function updateEmployeeInfo() {
  const nameInput = document.getElementById('employeeNameInput');
  const idInput = document.getElementById('employeeIdInput');
  if (nameInput) appState.employeeName = nameInput.value;
  if (idInput) appState.employeeId = idInput.value;
  saveState(false);
  renderEmployeeBar();
}

function resetFullTraining() {
  if (!confirm('Deseja reiniciar o progresso deste curso para o seu perfil?')) return;
  if (appState.currentUserId) {
    portalDB.progressByUser[appState.currentUserId] = {
      [appState.activeCourseId]: createDefaultUserCourseProgress()
    };
    syncAppStateFromUserProgress(appState.currentUserId, appState.activeCourseId);
  }
  saveState(true);
  renderAll();
  scrollToModuleTop();
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

window.addEventListener('beforeunload', () => {
  if (appState.currentUserId) {
    updateCurrentAccessLogSnapshot();
    saveState(false);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderAll();
  pullDatabaseFromCloudSilent();
});
