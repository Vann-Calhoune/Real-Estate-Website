import '../styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { Poppins } from '@next/font/google'
import Contact from '../components/Contact'
import Head from 'next/head'
  

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: '400'
});

function MyApp({ Component, pageProps }) {
 return (
 <>
  <Head>
    <title>We Buy Houses Cash Kansas City! | We Want To Solve Your Real Estate Problems!</title>
    <meta name="description" content="We make the process of selling your home fast and easy. We serve Kansas City and the surrounding areas. Submit a contact form or reach out to us today."></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href="https://www.vannbuyshouses.com/" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0000"/>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#ffffff"/>
   
 </Head>
 <main className={poppins.className}>
   <Contact />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
 </main>
 </> 
 )
}

export default MyApp
