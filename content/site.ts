import {
  Bot,
  CalendarCheck,
  FileSignature,
  HeartPulse,
  MessageCircle,
  ScanFace,
  Trophy,
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
