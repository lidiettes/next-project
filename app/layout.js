import { Navigation } from "../components/Navigation";
import {Space_Grotesk } from '@next/font/google'


const font = Space_Grotesk({
  weight:['400','700'],
  subsets: ['latin-ext']
})

export default function RootLayout({ children }) {
  return (

    <html>
      <head>
        <title>APP NEXT Y MUI</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
