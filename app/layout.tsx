import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://evofit.tech'),
  title: {
    default: 'EvoFit — Sistema de gestão para academias com IA',
    template: '%s | EvoFit',
  },
  description:
    'A evolução em sistemas de gerenciamento para academias: IA de vendas no WhatsApp, agenda, financeiro, portal do aluno, catraca facial e muito mais — num só lugar.',
  icons: { icon: '/logos/evofit_logo_clean.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
