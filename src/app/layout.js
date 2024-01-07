import { Inter, Montserrat } from 'next/font/google'
import './../styles/globals.css'
import { Navbar } from "@/components/navbar";
import logo from './../images/logo.svg'
import { Footer } from "@/components/footer";

const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'The Accessibility Blog',
  description: 'The voice of the excluded',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar logo={logo}/>
        {children}
        <Footer logo={logo}/>
        </body>
    </html>
  )
}
