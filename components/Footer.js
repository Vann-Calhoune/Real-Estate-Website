import styled from "styled-components"
import Image from "next/image"
import call from '../public/call.png'
import email from '../public/email.png'
import logo from '../public/logo.png'


const Feet = styled.footer`
position: absolute;
width: 100%;
height: 10rem;
// border-top: 1px solid #38b6ff;
display: flex;
justify-content: center;
// border: 1px solid black;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;





`
const Contact = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
> div {
  display: flex;
  list-style: none;
  gap: 10px;
}
// border: 1px solid black;
`
const imageStyle = {
  // border: '1px solid black'
}

function Footer() {
  return (
    <Feet>
        <Image src={logo} alt='vann buys houses logo' width={150} height={150} style={imageStyle} />
        <Contact>
          <p>Contact us:</p>
          <div>
            <Image src={call} alt='phone' width={30} height={30}/>
            <li>816-111-1111</li>
          </div>
          <div>
            <Image src={email} alt='envelope' width={30} height={30} />
            <li>vannlee@vannbuyshouses.com</li>
          </div>
        </Contact>
    </Feet>
  )
}

export default Footer