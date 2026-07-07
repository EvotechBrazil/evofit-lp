import type { ChatMsg } from '@/content/site';

export type ChatTheme = {
  /** fundo da área de mensagens */
  bg: string;
  /** header do chat */
  headerBg: string;
  headerText: string;
  /** bolha recebida (lead) */
  inBg: string;
  inText: string;
  /** bolha enviada (IA) */
  outBg: string;
  outText: string;
  metaText: string;
};

/**
 * Tela de conversa estilo WhatsApp — conteúdo compartilhado, pele por design system.
 * Mensagens entram em cascata (CSS puro, respeita prefers-reduced-motion).
 */
export function ChatMock({
  messages,
  theme,
  title,
  subtitle = 'online',
  startDelay = 0.3,
  step = 0.55,
  className = '',
}: {
  messages: ChatMsg[];
  theme: ChatTheme;
  title: string;
  subtitle?: string;
  startDelay?: number;
  step?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden ${className}`}
      style={{ background: theme.bg }}
    >
      {/* header */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: theme.headerBg, color: theme.headerText }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-bold"
          style={{ background: '#ffffff22' }}
        >
          {title.charAt(0)}
        </div>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[13.5px] font-semibold">{title}</p>
          <p className="text-[11px] opacity-70">{subtitle}</p>
        </div>
      </div>

      {/* mensagens */}
      <div className="flex flex-1 flex-col gap-2 overflow-hidden p-3.5">
        {messages.map((m, i) => {
          const mine = m.from === 'ia';
          return (
            <div
              key={i}
              className={`chat-in max-w-[85%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug shadow-sm ${
                mine ? 'self-end rounded-br-md' : 'self-start rounded-bl-md'
              }`}
              style={{
                background: mine ? theme.outBg : theme.inBg,
                color: mine ? theme.outText : theme.inText,
                animationDelay: `${startDelay + i * step}s`,
              }}
            >
              {m.text}
              <span
                className="mt-0.5 block text-right text-[9.5px]"
                style={{ color: theme.metaText }}
              >
                {`19:${String(2 + i).padStart(2, '0')}`}
                {mine ? ' ✓✓' : ''}
              </span>
            </div>
          );
        })}

        {/* indicador de digitação */}
        <div
          className="chat-in flex items-center gap-1 self-end rounded-2xl rounded-br-md px-3.5 py-2.5"
          style={{
            background: theme.outBg,
            animationDelay: `${startDelay + messages.length * step}s`,
          }}
        >
          {[0, 1, 2].map((d) => (
            <span
              key={d}
              className="typing-dot h-1.5 w-1.5 rounded-full"
              style={{ background: theme.outText, animationDelay: `${d * 0.18}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
