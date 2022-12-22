import styled from "styled-components"
import Image from "next/image"
import call from '../public/telephone.png'
import email from '../public/email.png'
import logo from '../public/logo.png'
import facebook from '../public/facebook.png'
import gram from '../public/instagram.png'
import Link from "next/link"

const Feet = styled.footer`
width: 100%;
height: 11rem;
display: flex;

justify-content: space-around;
// border: 1px solid black;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 8px 0px;





`
const Contact = styled.div`
display: flex;
flex-direction: column;
> div {
  display: flex;
  gap: 10px;
  font-size: 18px;
}
> ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  position: relative;
  right: 40px;
  margin-bottom: 3px;
}
// border: 1px solid black;
padding-right: 0px;

`
const imageStyle = {
  // border: '1px solid black'
}

const linkStyle = {
  textDecoration: 'none',
  color: 'black'
}

function Footer() {
  return (
    <Feet>
        <Image src={logo} alt='vann buys houses logo' width={150} height={150} style={imageStyle} />
        <Contact>
          <ul>
            <li>Contact us:</li>
            <li>816-945-2250</li>
          </ul>
          <div>
            <Image src={facebook} alt='facebook logo' width={35} height={35}/>
            <Image src={gram} alt='instagram logo' width={35} height={35}/>
            <Image src={call} alt='phone' width={35} height={35}/>
            <Image src={email} alt='envelope' width={35} height={35} />
          </div>
          <div>
            <Link style={linkStyle} href='/privacy'>Privacy Policy</Link>
          </div>
          <div>
            Vann Buy's Houses, LLC
          </div>
        </Contact>
    </Feet>
  )
}

export default Footer