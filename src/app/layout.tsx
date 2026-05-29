import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tanishq Saxena | AI/ML Engineer & Backend Developer',
  description: 'Portfolio of Tanishq Saxena — AI/ML Engineer & Backend Developer specializing in Deep Learning, Reinforcement Learning, NLP, and scalable backend systems. Building intelligent systems that scale.',
  keywords: ['AI Engineer', 'ML Engineer', 'Backend Developer', 'Deep Learning', 'Python', 'Portfolio', 'Tanishq Saxena'],
  authors: [{ name: 'Tanishq Saxena' }],
  openGraph: {
    title: 'Tanishq Saxena | AI/ML Engineer & Backend Developer',
    description: 'Building intelligent systems that scale.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
