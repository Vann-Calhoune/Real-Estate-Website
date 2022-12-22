import '../styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { Poppins } from '@next/font/google'
import Contact from '../components/Contact';


const ashkash = Poppins({ 
  subsets: ['latin'],
  weight: '400'
});

function MyApp({ Component, pageProps }) {
 return (
 <>
 <main className={ashkash.className}>
   <Contact />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
 </main>
 </> 
 )
}

export default MyApp
