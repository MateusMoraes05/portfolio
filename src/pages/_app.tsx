import '@/styles/globals.css'
import { JetBrains_Mono } from '@next/font/google'
import type { AppProps } from 'next/app'


const jetBrains_mono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['200', '400', '800']
})


export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={jetBrains_mono.className}>
    <Component {...pageProps} />
  </main>
  )
}
