import { Navigation } from "./components/Navigation";


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>my app</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
