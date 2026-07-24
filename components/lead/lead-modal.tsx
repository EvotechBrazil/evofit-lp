'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, Loader2, X } from 'lucide-react';
import { P, black, body } from '@/components/fusion/theme';

/** Nº do WhatsApp comercial da Evotech. */
const WHATSAPP_NUMBER = '5543999744359';

interface LeadModalContextType {
  openLeadModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType>({ openLeadModal: () => {} });

export const useLeadModal = () => useContext(LeadModalContext);

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)})${digits.slice(2)}`;
  return `(${digits.slice(0, 2)})${digits.slice(2, 3)}.${digits.slice(3, 7)}-${digits.slice(7)}`;
};

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  /** Honeypot anti-bot — deve permanecer vazio. */
  const [website, setWebsite] = useState('');

  const openLeadModal = useCallback(() => {
    setError('');
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError('Preencha todos os campos.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('E-mail inválido.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setError('Telefone incompleto.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: name.trim(),
          telefone: phone.trim(),
          email: email.trim(),
          website,
          origem: window.location.origin,
        }),
      });

      let data: { ok?: boolean; error?: string } = {};
      try {
        data = await res.json();
      } catch {
        /* ignore */
      }

      if (!res.ok || !data.ok) {
        if (res.status === 429) {
          setError('Muitas tentativas — aguarde um minuto e tente de novo.');
        } else if (res.status === 503 || res.status === 502) {
          setError('Serviço temporariamente indisponível — tente em alguns minutos.');
        } else if (res.status === 403) {
          setError('Envio bloqueado. Atualize a página e tente de novo.');
        } else {
          setError('Erro ao enviar — tente de novo em instantes.');
        }
        return;
      }

      setOpen(false);
      setName('');
      setPhone('');
      setEmail('');
      setWebsite('');

      const message = encodeURIComponent(
        `Olá! Meu nome é ${name.trim()}, quero conhecer o EvoFit para a minha academia.`,
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
    } catch {
      setError('Erro ao enviar — tente de novo em instantes.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LeadModalContext.Provider value={{ openLeadModal }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Agendar demonstração"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
          <div
            className="chat-in relative w-full max-w-md bg-white p-7 shadow-2xl"
            style={{ borderTop: `5px solid ${P.orange}`, ...body }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-4 top-4 cursor-pointer p-1 transition-opacity hover:opacity-60"
              style={{ color: P.muted }}
            >
              <X size={18} />
            </button>

            <h2 className="text-2xl italic uppercase leading-tight" style={{ ...black, color: P.blue }}>
              Agendar demonstração
            </h2>
            <p className="mt-2 text-[13.5px]" style={{ color: P.muted }}>
              Preencha seus dados e você será direcionado ao nosso WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Honeypot — oculto de humanos (CSS + aria/tabIndex) */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-10000px',
                  top: 'auto',
                  width: 1,
                  height: 1,
                  overflow: 'hidden',
                }}
              >
                <label htmlFor="lead-website">Website</label>
                <input
                  id="lead-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="lead-name" className="mb-1.5 block text-[13px] font-semibold" style={{ color: P.ink }}>
                  Nome completo
                </label>
                <input
                  id="lead-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  maxLength={100}
                  required
                  className="h-12 w-full border-2 px-3.5 text-[14px] outline-none transition-colors focus:border-[#152238]"
                  style={{ borderColor: '#e2e6ec', color: P.ink }}
                />
              </div>
              <div>
                <label htmlFor="lead-phone" className="mb-1.5 block text-[13px] font-semibold" style={{ color: P.ink }}>
                  WhatsApp
                </label>
                <input
                  id="lead-phone"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  placeholder="(00)0.0000-0000"
                  inputMode="tel"
                  required
                  className="h-12 w-full border-2 px-3.5 text-[14px] outline-none transition-colors focus:border-[#152238]"
                  style={{ borderColor: '#e2e6ec', color: P.ink }}
                />
              </div>
              <div>
                <label htmlFor="lead-email" className="mb-1.5 block text-[13px] font-semibold" style={{ color: P.ink }}>
                  E-mail
                </label>
                <input
                  id="lead-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  maxLength={255}
                  required
                  className="h-12 w-full border-2 px-3.5 text-[14px] outline-none transition-colors focus:border-[#152238]"
                  style={{ borderColor: '#e2e6ec', color: P.ink }}
                />
              </div>

              {error && (
                <p className="text-[13px] font-semibold" style={{ color: '#c62828' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="flex h-14 w-full cursor-pointer items-center justify-center gap-2.5 text-[15px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-70"
                style={{ background: P.blue, boxShadow: `5px 5px 0 ${P.orange}` }}
              >
                {isLoading ? (
                  <Loader2 size={19} className="animate-spin" />
                ) : (
                  <>
                    Continuar para o WhatsApp
                    <ArrowRight size={17} strokeWidth={2.4} />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] leading-relaxed" style={{ color: P.muted }}>
                Ao enviar, você concorda com a nossa{' '}
                <a href="/politica-de-privacidade" className="underline" style={{ color: P.blue }}>
                  política de privacidade
                </a>{' '}
                e os{' '}
                <a href="/termos-de-uso" className="underline" style={{ color: P.blue }}>
                  termos de uso
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      )}
    </LeadModalContext.Provider>
  );
}
