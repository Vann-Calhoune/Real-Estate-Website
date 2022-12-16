import styled from "styled-components"

const Feet = styled.footer`
position: absolute;
width: 100%;
height: 2.5rem;
`

function Footer() {
  return (
    <Feet>
        <p>Footer</p>
    </Feet>
  )
}

export default Footer