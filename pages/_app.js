import '../styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { Roboto } from '@next/font/google'
import { Unbounded } from '@next/font/google'
import { Akshar } from '@next/font/google'

const roboto = Roboto({ weight: '400' });
const unbound = Unbounded({ weight: '400'})
const ashkash = Akshar({weigth:'400'});

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
