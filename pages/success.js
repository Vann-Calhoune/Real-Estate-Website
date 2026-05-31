import styled from "styled-components"

const SuccessMessage = styled.div`
text-align: center;
min-height: 58vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: min(100% - 32px, 760px);
margin: 0 auto;
color: var(--brand-dark);
> h1 {
  font-size: clamp(34px, 6vw, 54px);
  margin: 0 0 12px;
}
> p {
  font-size: 20px;
  color: var(--muted);
  margin: 0;
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
