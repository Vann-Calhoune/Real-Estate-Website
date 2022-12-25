import styled from "styled-components"
import call from '../public/telephone.png'
import email from '../public/email.png'
import facebook from '../public/facebook.png'
import gram from '../public/instagram.png'
import Image from "next/image"

const HeadBar = styled.div`
display: flex;
gap: 10px;
background-color: #004aad;
width: 100vw;
color: white;
font-size: 14px;
justify-content: center;
align-items: center;
padding: 5px 0px;
@media (min-width: 800px) {
  font-size: 20px;
}

`
function Contact() {
  return (
    <HeadBar>
        <div>Contact us today: 816-945-2250</div>
        <a href="https://www.facebook.com/profile.php?id=100089139481574" target="_blank" rel="noreferrer"><Image src={facebook} alt='facebook logo' width={25} height={25}/></a>
        <a href="https://www.instagram.com/vannbuyshouses/" target="_blank" rel="noreferrer"><Image src={gram} alt='instagram logo' width={25} height={25}/></a>
        <a href="tel:8169452250"><Image src={call} alt='phone' width={25} height={25}/></a>
        <a href="mailto: vann.calhoune@vannbuyshouses.com"><Image src={email} alt='envelope' width={25} height={25} /></a>
    </HeadBar>
  )
}

export default Contact