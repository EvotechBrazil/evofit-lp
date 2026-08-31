'use client';

import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import type { ChatMsg } from '@/content/site';

export type ChatTheme = {
  bg: string;
  headerBg: string;
  headerText: string;
  inBg: string;
  inText: string;
  outBg: string;
  outText: string;
  metaText: string;
};

const TICK_BLUE = '#53bdeb';

function typingDuration(text: string, from: ChatMsg['from']): number {
  const base = from === 'ia' ? 720 : 420;
  const cap = from === 'ia' ? 2100 : 1100;
  return Math.min(cap, base + text.length * 14);
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

function TypingDots({ color }: { color: string }) {
  return (
    <>
      {[0, 1, 2].map((d) => (
        <span
          key={d}
          className="typing-dot h-1.5 w-1.5 rounded-full"
          style={{ background: color, animationDelay: `${d * 0.18}s` }}
        />
      ))}
    </>
  );
}

function Checks({ level, color }: { level: 0 | 1 | 2; color: string }) {
  if (level < 1) return null;
  const fill = level === 2 ? TICK_BLUE : color;
  return (
    <span className="ml-0.5 tracking-tighter" style={{ color: fill }}>
      {level === 1 ? '✓' : '✓✓'}
    </span>
  );
}

/**
 * Conversa estilo WhatsApp ao vivo: digitando → bolha → ✓ → ✓✓ → loop.
 * `prefers-reduced-motion`: mostra o roteiro inteiro parado.
 */
export function ChatMock({
  messages,
  theme,
  title,
  subtitle = 'online',
  startDelay = 500,
  step = 0.55,
  className = '',
  onProgress,
}: {
  messages: ChatMsg[];
  theme: ChatTheme;
  title: string;
  subtitle?: string;
  startDelay?: number;
  step?: number;
  className?: string;
  onProgress?: (visibleCount: number) => void;
}) {
  const reduced = usePrefersReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(reduced ? messages.length : 0);
  const [typing, setTyping] = useState<ChatMsg['from'] | null>(null);
  const [ticks, setTicks] = useState<Record<number, 1 | 2>>({});

  useEffect(() => {
    onProgress?.(visible);
  }, [visible, onProgress]);

  useEffect(() => {
    if (reduced) {
      setVisible(messages.length);
      setTyping(null);
      setTicks(Object.fromEntries(messages.map((_, i) => [i, 2 as const])));
      return;
    }

    if (visible >= messages.length) {
      const loop = window.setTimeout(() => {
        setVisible(0);
        setTyping(null);
        setTicks({});
      }, 4800);
      return () => window.clearTimeout(loop);
    }

    const msg = messages[visible];
    const pause = (visible === 0 ? startDelay : 380 + step * 420) + (msg.from === 'ia' ? 180 : 0);
    const typeFor = typingDuration(msg.text, msg.from);

    let tTick: number | undefined;
    const tType = window.setTimeout(() => setTyping(msg.from), pause);
    const tShow = window.setTimeout(() => {
      setTyping(null);
      setVisible((n) => n + 1);
      if (msg.from === 'ia') {
        setTicks((prev) => ({ ...prev, [visible]: 1 }));
        tTick = window.setTimeout(() => {
          setTicks((prev) => ({ ...prev, [visible]: 2 }));
        }, 380);
      }
    }, pause + typeFor);

    return () => {
      window.clearTimeout(tType);
      window.clearTimeout(tShow);
      if (tTick !== undefined) window.clearTimeout(tTick);
    };
  }, [visible, messages, reduced, startDelay, step]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: reduced ? 'auto' : 'smooth',
    });
  }, [visible, typing, reduced]);

  const headerStatus =
    typing === 'ia' ? 'digitando…' : visible >= messages.length && !reduced ? 'online' : subtitle;

  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden ${className}`}
      style={{ background: theme.bg }}
    >
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
          <p className="flex items-center gap-1 text-[11px] opacity-70">
            {typing !== 'ia' && (
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            )}
            {headerStatus}
          </p>
        </div>
      </div>

      <div ref={scroller} className="flex flex-1 flex-col gap-2 overflow-y-auto p-3.5">
        {messages.slice(0, visible).map((m, i) => {
          const mine = m.from === 'ia';
          return (
            <div
              key={`${i}-${m.text.slice(0, 12)}`}
              className={`chat-in max-w-[85%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug shadow-sm ${
                mine ? 'self-end rounded-br-md' : 'self-start rounded-bl-md'
              }`}
              style={{
                background: mine ? theme.outBg : theme.inBg,
                color: mine ? theme.outText : theme.inText,
              }}
            >
              {m.text}
              <span
                className="mt-0.5 block text-right text-[9.5px]"
                style={{ color: theme.metaText }}
              >
                {`19:${String(2 + i).padStart(2, '0')}`}
                {mine && <Checks level={ticks[i] ?? (reduced ? 2 : 1)} color={theme.metaText} />}
              </span>
            </div>
          );
        })}

        {typing && (
          <div
            className={`chat-in flex items-center gap-1 rounded-2xl px-3.5 py-2.5 ${
              typing === 'ia' ? 'self-end rounded-br-md' : 'self-start rounded-bl-md'
            }`}
            style={{
              background: typing === 'ia' ? theme.outBg : theme.inBg,
            }}
          >
            <TypingDots color={typing === 'ia' ? theme.outText : theme.inText} />
          </div>
        )}
      </div>

      <div
        className="flex items-center gap-2 px-2.5 py-2"
        style={{ background: theme.headerBg }}
      >
        <div
          className="flex-1 truncate rounded-full px-3 py-1.5 text-[11.5px]"
          style={{ background: theme.bg, color: theme.metaText }}
        >
          Mensagem
        </div>
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
          style={{ background: theme.outBg, color: theme.outText }}
          aria-hidden
        >
          <Send size={12} strokeWidth={2.4} />
        </span>
      </div>
    </div>
  );
}
