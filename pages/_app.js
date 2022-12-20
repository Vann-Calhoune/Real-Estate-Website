import '../styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { Akshar } from '@next/font/google'


const ashkash = Akshar({ subsets: ['latin']});

function MyApp({ Component, pageProps }) {
 return (
 <>
 <main className={ashkash.className}>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
 </main>
 </> 
 )
}

export default MyApp
