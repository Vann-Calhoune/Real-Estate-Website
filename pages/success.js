import styled from "styled-components"

const SuccessMessage = styled.div`
text-align: center;
height: 75vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #004aad;
> h1 {
  font-size: 40px;
}
> p {
  font-size: 24px;
}
`

function success() {
  return (
    <SuccessMessage>
      <h1>Thank you for your submission!</h1>
      <p>We will be reaching out to you shortly.</p>

    </SuccessMessage>
  )
}

export default success