import styled from "styled-components"
import call from '../public/telephone.png'
import email from '../public/email.png'
import facebook from '../public/facebook.png'
import gram from '../public/instagram.png'
import Image from "next/image"

const HeadBar = styled.div`
display: flex;
gap: 10px;
background-color: #38b6ff;
width: 100vw;
color: white;
font-size: 18px;
justify-content: center;
padding: 5px 0px;

`
function Contact() {
  return (
    <HeadBar>
        <div>Call us today: 816-945-2250</div>
        <Image src={facebook} alt='facebook logo' width={25} height={25}/>
            <Image src={gram} alt='instagram logo' width={25} height={25}/>
            <Image src={call} alt='phone' width={25} height={25}/>
            <Image src={email} alt='envelope' width={25} height={25} />
    </HeadBar>
  )
}

export default Contact