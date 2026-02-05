import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'Tyler Cyert — ERP Solutions Engineer & Systems Architect',
  description: 'Tyler Cyert — ERP Solutions Engineer specializing in ERP implementations, systems integrations, workflow automation, and business process optimization. Experience designing Acumatica and Shopify integrations, CRM pipelines, and cloud infrastructure to enable operational excellence.',
  keywords: ['Tyler Cyert', 'ERP', 'Solutions Engineer', 'Systems Engineer', 'Business Systems', 'Integrations', 'Workflow Automation', 'Acumatica', 'Shopify', 'CRM', 'Cloud Architecture', 'Process Optimization'],
  authors: [{ name: 'Tyler Cyert' }],
  creator: 'Tyler Cyert',
  publisher: 'Tyler Cyert',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tylercyert.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tylercyert.com',
    title: 'Tyler Cyert — ERP Solutions Engineer & Systems Architect',
    description: 'Portfolio highlighting ERP implementations, integrations, process automation, and systems architecture focused on business outcomes.',
    siteName: 'Tyler Cyert Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tyler Cyert - Professional Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyler Cyert — ERP Solutions Engineer & Systems Architect',
    description: 'Portfolio highlighting ERP implementations, integrations, process automation, and systems architecture focused on business outcomes.',
    images: ['/og-image.jpg'],
    creator: '@tylercyert',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
