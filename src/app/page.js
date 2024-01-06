import { Navbar } from "@/pages/navbar";
import logo from './../images/logo.svg'
import { Footer } from "@/pages/footer";


export default function Home() {
  return (
    <>
      <Navbar logo={logo}/>
      <Footer logo={logo}/>
    </>
  )
}
