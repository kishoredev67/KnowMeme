import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import * as stylex from '@stylexjs/stylex';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { darkClass } from '@/src/lib/theme';
import { styles } from './layout.stylex';
import { Providers } from './providers';

const chivo = localFont({
   src: '../fonts/Chivo-VariableFont_wght.ttf',
   variable: '--font-auth',
   weight: '100 900',
   display: 'swap',
});

export const metadata: Metadata = {
   title: {
      default: 'KnowMeme | AI-Powered Digital Trust',
      template: '%s | KnowMeme',
   },
   description:
      'KnowMeme is the next-generation social platform designed around authentic connections, creator verification, and digital trust.',
   applicationName: 'KnowMeme',
   icons: {
      icon: '/knowmeme-logo.png',
      apple: '/knowmeme-logo.png',
   },
   openGraph: {
      title: 'KnowMeme | AI-Powered Digital Trust',
      description:
         'Next-generation social platform centered on digital trust, authentic connections, and verified creators.',
      siteName: 'KnowMeme',
      images: [
         {
            url: '/knowmeme-banner.png',
            width: 1024,
            height: 571,
            alt: 'KnowMeme — AI-Powered Digital Trust',
         },
      ],
      type: 'website',
   },
   twitter: {
      card: 'summary_large_image',
      title: 'KnowMeme | AI-Powered Digital Trust',
      description:
         'Next-generation social platform centered on digital trust, authentic connections, and verified creators.',
      images: ['/knowmeme-banner.png'],
   },
};

export const viewport = {
   width: 'device-width',
   initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <>
         {process.env.VERCEL ? <SpeedInsights /> : null}
         <html lang="en" className={`${chivo.variable} ${darkClass}`}>
            <body {...stylex.props(styles.body)}>
               <script
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for blocking theme script before first paint
                  dangerouslySetInnerHTML={{
                     __html: `
                        (function() {
                           const theme = document.cookie.match(/theme=(dark|light)/)?.[1];
                           const isDark = theme === 'dark' || theme === undefined;
                           const classes = '${darkClass.replace(/'/g, "\\'")}'.split(' ');
                           classes.forEach(function(c) {
                              if (c) document.documentElement.classList.toggle(c, isDark);
                           });
                        })();
                     `,
                  }}
               />
               <Providers>{children}</Providers>
            </body>
         </html>
      </>
   );
}
