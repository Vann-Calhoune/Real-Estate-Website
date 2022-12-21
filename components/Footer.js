import styled from "styled-components"
import Image from "next/image"
import call from '../public/telephone.png'
import email from '../public/email.png'
import logo from '../public/logo.png'
import facebook from '../public/facebook.png'
import gram from '../public/instagram.png'


const Feet = styled.footer`
position: absolute;
width: 100vw;
height: 10.5rem;
display: flex;
justify-content: space-around;
// border: 1px solid black;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;





`
const Contact = styled.div`
display: flex;
flex-direction: column;
> div {
  display: flex;
  gap: 10px;
  padding-bottom: 30px;
}
> ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  position: relative;
  right: 40px;
}
// border: 1px solid black;
padding-right: 0px;

`
const imageStyle = {
  // border: '1px solid black'
}

function Footer() {
  return (
    <Feet>
        <Image src={logo} alt='vann buys houses logo' width={150} height={150} style={imageStyle} />
        <Contact>
          <ul>
            <li>Contact us:</li>
            <li>816-111-1111</li>
          </ul>
          <div>
            <Image src={facebook} alt='facebook logo' width={35} height={35}/>
            <Image src={gram} alt='instagram logo' width={35} height={35}/>
            <Image src={call} alt='phone' width={35} height={35}/>
            <Image src={email} alt='envelope' width={35} height={35} />
          </div>
        </Contact>
    </Feet>
  )
}

export default Footer