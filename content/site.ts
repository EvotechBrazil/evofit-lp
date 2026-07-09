import {
  AtSign,
  Bot,
  CalendarCheck,
  CreditCard,
  Database,
  FileSignature,
  Fingerprint,
  HeartPulse,
  KeyRound,
  Link2,
  Lock,
  MessageCircle,
  ScanFace,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserCheck,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

/* ── Copy central do site (itere aqui sem tocar em layout) ── */

export const LEMA = 'A evolução em sistemas de gerenciamento para academias';

export const SUB =
  'Uma plataforma. Todos os seus alunos, treinos, cobranças e atendimento com IA — num só lugar.';

export const PROVA = 'Rodando em produção em academias reais — construído dentro de uma delas.';

export const CTA_PRIMARY = 'Agendar demonstração';
export const CTA_SECONDARY = 'Ver a IA vendendo';

/* ── Conversa da IA de vendas (funil EVOLEAD) ── */
export type ChatMsg = { from: 'lead' | 'ia'; text: string };

export const CHAT_VENDAS: ChatMsg[] = [
  { from: 'lead', text: 'Oi! Quanto custa o plano de vocês?' },
  {
    from: 'ia',
    text: 'Oi, Ana! 😊 Que bom te ver por aqui. Antes de falar de valores, me conta: você já treinou antes ou tá começando agora?',
  },
  { from: 'lead', text: 'Já treinei, mas parei faz 1 ano…' },
  {
    from: 'ia',
    text: 'Acontece com todo mundo! E qual o objetivo agora — voltar ao ritmo, perder peso, ganhar força?',
  },
  { from: 'lead', text: 'Perder uns 8kg e voltar ao condicionamento' },
  {
    from: 'ia',
    text: 'Perfeito 💪 Pelo seu perfil, o plano de 3 vezes por semana encaixa bem: R$ 297 por mês. Quer agendar uma aula experimental gratuita pra sentir o treino?',
  },
  { from: 'lead', text: 'Quero! Pode ser quinta às 19h?' },
  {
    from: 'ia',
    text: 'Fechado ✅ Quinta às 19h — aula experimental confirmada. Te mando um lembrete 2h antes. Bora!',
  },
];

/* ── Conversa do Murph (secretário IA do dono) ── */
export const CHAT_MURPH: ChatMsg[] = [
  { from: 'lead', text: 'Murph, quem tá inadimplente há mais de 7 dias?' },
  {
    from: 'ia',
    text: 'Encontrei 4 alunos: João (12 dias, R$ 297), Maria (9 dias, R$ 197), Pedro e Carla. Quer que eu envie a cobrança com link de pagamento? (S/N)',
  },
  { from: 'lead', text: 'S' },
  { from: 'ia', text: '✅ Cobranças enviadas pelos 4. Te aviso assim que pagarem.' },
];

/* ── Módulos (bento) ── */
export type Module = {
  title: string;
  desc: string;
  icon: LucideIcon;
  badge?: string;
};

export const MODULES: Module[] = [
  {
    title: 'IA de vendas no WhatsApp',
    desc: 'Conversa de verdade, não robô de botões: qualifica o lead, cota o plano ideal e agenda a aula experimental — 24/7.',
    icon: MessageCircle,
  },
  {
    title: 'Murph, o secretário do dono',
    desc: '"Cobra os inadimplentes acima de 7 dias" — mais de 40 ações reais no sistema, com aprovação S/N no WhatsApp.',
    icon: Bot,
  },
  {
    title: 'Financeiro completo',
    desc: 'Pix, boleto e cartão + contas a pagar: tire foto do cupom e a IA lança a despesa pra você.',
    icon: Wallet,
  },
  {
    title: 'Agenda inteligente',
    desc: 'Grade por programa, vagas sem overbooking, lista de espera automática e ocupação em tempo real.',
    icon: CalendarCheck,
  },
  {
    title: 'Portal do Aluno gamificado',
    desc: 'WOD do dia, PRs, sequências, ranking e check-in — direto no celular do aluno.',
    icon: Trophy,
  },
  {
    title: 'Catraca com reconhecimento facial',
    desc: 'ControlID/iDFace rodando na sua recepção — sem IP fixo, com bloqueio de inadimplente.',
    icon: ScanFace,
  },
  {
    title: 'Contratos digitais',
    desc: 'Assinatura pelo WhatsApp com prova criptográfica SHA-256 e registro imutável.',
    icon: FileSignature,
  },
  {
    title: 'Retenção preditiva',
    desc: 'O churn score prevê quem vai cancelar antes de cancelar; NPS alto vira review no Google.',
    icon: HeartPulse,
  },
  {
    title: 'Estúdio de Criação',
    desc: 'Posts e carrosséis gerados com IA, com a sua marca, publicados no Instagram e Facebook.',
    icon: Sparkles,
    badge: 'EM ATIVAÇÃO',
  },
];

/* ── Números honestos ── */
export const STATS = [
  { value: '24/7', label: 'atendimento por IA no WhatsApp' },
  { value: '40+', label: 'ações executadas pelo Murph' },
  { value: '2.000+', label: 'alunos geridos em produção' },
  { value: '100%', label: 'com a marca da sua academia' },
];

/* ── Diferenciais canônicos ── */
export const DIFERENCIAIS = [
  'Cobrança automática com IA que negocia — de D-3 a D+30',
  'Anti-churn preditivo: prevê quem vai sair pelo padrão de presença',
  'Marketing automático com IA — um social media 24/7',
  'Zero lead perdido: funil EVOLEAD automático no WhatsApp',
  'NPS integrado que transforma nota 10 em review no Google',
  'Recompensa de indicação automática: indicou, ganhou na hora',
  'Multi-sistema: não troque o que você já usa — adicione a camada de IA',
];

/* ── Funil EVOLEAD (seção IA de vendas) ── */
export const EVOLEAD_STEPS = [
  { title: 'Escuta', desc: 'Acolhe o lead e entende o momento dele — sem script engessado.' },
  { title: 'Qualifica', desc: 'Coleta objetivo, experiência e rotina com o funil EVOLEAD.' },
  { title: 'Cota', desc: 'Sugere 2-3 planos certos pro perfil, com valor mensal claro.' },
  { title: 'Agenda', desc: 'Marca a aula experimental na grade real — e lembra 2h antes.' },
];

export const CADENCIAS = [
  '30min, 1, 7 e 15 dias sem resposta',
  'Resgate de no-show',
  'Pós-aula com NPS e proposta',
  'Aniversário do aluno',
];

export const MURPH_BULLETS = [
  'Permissão por papel: dono, gerente, recepção, coach',
  'Aprovação S/N antes de qualquer ação sensível',
  'Responde com dados reais do sistema, na hora',
];

/* ── Integrações ── */
export type Integration = {
  name: string;
  desc: string;
  icon: LucideIcon;
  badge: 'EM PRODUÇÃO' | 'EM ATIVAÇÃO';
};

export const INTEGRACOES: Integration[] = [
  {
    name: 'NextFit',
    desc: 'Sincronização automática de alunos, planos, matrículas e pagamentos — a IA por cima do sistema que você já usa.',
    icon: Link2,
    badge: 'EM PRODUÇÃO',
  },
  {
    name: 'WhatsApp',
    desc: 'O canal onde a IA vende, o Murph trabalha e o aluno assina contrato e manda comprovante.',
    icon: MessageCircle,
    badge: 'EM PRODUÇÃO',
  },
  {
    name: 'Catraca ControlID / iDFace',
    desc: 'Reconhecimento facial na entrada, direto da sua recepção — sem precisar de IP fixo.',
    icon: Fingerprint,
    badge: 'EM PRODUÇÃO',
  },
  {
    name: 'Asaas (pagamentos)',
    desc: 'Pix, boleto e cartão com cobrança recorrente, retentativa e baixa automática.',
    icon: CreditCard,
    badge: 'EM PRODUÇÃO',
  },
  {
    name: 'Instagram',
    desc: 'Directs atendidos pela mesma IA e publicação de conteúdo do Estúdio.',
    icon: AtSign,
    badge: 'EM ATIVAÇÃO',
  },
  {
    name: 'Telegram e Webchat',
    desc: 'Mais canais na mesma caixa de entrada, com o mesmo histórico do aluno.',
    icon: Send,
    badge: 'EM ATIVAÇÃO',
  },
];

/* ── Segurança & LGPD ── */
export const SEGURANCA = [
  {
    title: 'LGPD de verdade',
    desc: 'Direitos do titular self-service com verificação por código: acesso, correção, exclusão e portabilidade.',
    icon: ShieldCheck,
  },
  {
    title: 'Criptografia',
    desc: 'Credenciais e integrações criptografadas com AES-256 no banco.',
    icon: Lock,
  },
  {
    title: 'Trilha de auditoria imutável',
    desc: 'Cada ação registrada em log que não pode ser alterado nem apagado.',
    icon: Database,
  },
  {
    title: 'Acesso por papéis + 2FA',
    desc: 'Dono, gerente, recepção e coach veem só o que devem — com dupla verificação opcional.',
    icon: KeyRound,
  },
  {
    title: 'Contratos com prova',
    desc: 'Assinatura com hash SHA-256, IP e horário — não-repúdio verificável.',
    icon: FileSignature,
  },
  {
    title: 'IA com aprovação humana',
    desc: 'Ação sensível só executa depois do S/N do responsável. Sempre.',
    icon: UserCheck,
  },
];

/* ── White-label ── */
export const WHITELABEL_TEMAS = [
  { nome: 'Iron Box', cor: '#f08020' },
  { nome: 'Flow Pilates', cor: '#2bb673' },
  { nome: 'Prime Fit', cor: '#7c5cff' },
];

/* ── FAQ ── */
export const FAQ = [
  {
    q: 'Preciso trocar meu sistema atual?',
    a: 'Não. O EvoFit funciona como camada de gestão e IA por cima do que você já usa — a integração com NextFit roda em produção com sincronização automática de alunos, planos e pagamentos. E se quiser migrar de vez, o caminho fica pronto.',
  },
  {
    q: 'A IA parece robô?',
    a: 'Não é chatbot de botões: é uma IA que conversa de verdade, com o nome e o jeito da sua academia. Ela escuta antes de vender, sabe a hora de chamar sua equipe (handoff) e faz follow-up sem virar spam.',
  },
  {
    q: 'Serve para box de CrossFit, studio ou academia convencional?',
    a: 'Sim. Programas, grade de horários e persona da IA são configuráveis por academia. Pra box, tem WOD, PRs, benchmarks e ranking nativos; pra studios e academias, agenda, planos e financeiro completos.',
  },
  {
    q: 'Como funciona a implantação?',
    a: 'Onboarding guiado: sua marca (cor e logo), seus programas e horários, e o WhatsApp conectado por QR code. Nossa equipe acompanha do primeiro acesso ao primeiro lead respondido pela IA.',
  },
  {
    q: 'Meus dados e os dos meus alunos estão seguros?',
    a: 'Sim: criptografia de credenciais, trilha de auditoria imutável, acesso por papéis com 2FA e ferramentas LGPD self-service para os titulares. Ações sensíveis da IA exigem aprovação humana.',
  },
  {
    q: 'A IA atende só no WhatsApp?',
    a: 'O WhatsApp é o canal principal e está em produção. Instagram, Telegram e webchat do seu site estão em ativação — tudo na mesma caixa de entrada, com o mesmo histórico.',
  },
  {
    q: 'Quanto custa?',
    a: 'O EvoFit é dimensionado para a realidade de cada academia — sem limite de alunos por plano. Agende uma demonstração e receba uma proposta sob medida.',
  },
];

/* ── Prova social ── */
export const PROVA_SOCIAL = {
  titulo: 'Nascido dentro de uma academia de verdade.',
  texto:
    'Projetado para a operação real de academias, centros de treinamento, Studios... testado e validado em ambiente real. Cada funcionalidade nasceu de um problema real de gestão: o lead que chegava de madrugada, a notinha do mercado perdida, o aluno que sumia sem ninguém perceber.',
};

