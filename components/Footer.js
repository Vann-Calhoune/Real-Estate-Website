import styled from "styled-components"

const Feet = styled.footer`
position: absolute;
width: 100%;
height: 2.5rem;
`
const Button = styled.button`

`

function Footer() {
  return (
    <Feet>
        <Button>Contact Us</Button>
    </Feet>
  )
}

export default Footer