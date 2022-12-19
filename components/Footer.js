import styled from "styled-components"
import Image from "next/image"
import call from '../public/call.png'
import email from '../public/email.png'

const Feet = styled.footer`
position: absolute;
width: 100%;
height: 2.5rem;
border-top: 1px solid #38b6ff;

`
const Contact = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
> div {
  display: flex;
  list-style: none;
  gap: 10px;


}
`


function Footer() {
  return (
    <Feet>
        <Contact>
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