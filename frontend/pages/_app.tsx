import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amiri } from '@next/font/google';

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={amiri.className}>
      <Component {...pageProps} />
    </main>
  ) 
}