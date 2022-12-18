import styled from "styled-components";

const ContactForm = styled.form`
display: flex;
flex-direction: column;
padding: 20px;
margin: 10px;

border-radius: 10px;
// background-color: rgba(220, 220, 220, 0.7);
font-family: roboto;
gap: 10px;


`

const FormHead = styled.h3`
font-size: 25px;
`

const Finput = styled.input`
border-radius: 3px;
width: 75%;
margin: 0 auto;
height: 4vh;

`
const Fbutton = styled.button`
margin: 0 auto;
width: 30vw;
margin-top: 5px;
width: 30%;
`
const FTextArea = styled.textarea`
border-radius: 3px;
width: 75%;
margin: 0 auto;
height: 4vh;
`

function Form() {
  return (
    <ContactForm>
        <FormHead>Get a free, no-obligation cash offer</FormHead>
        <Finput type="text" id="firstName" name="firstName" placeholder="First Name"></Finput>
        <Finput type="text" id="lastName" name="lastName" placeholder="Last Name"></Finput>
        <Finput type="text" id="address" name="address" placeholder="Address"></Finput>
        <Finput type="text" id="city" name="city" placeholder="City"></Finput>
        <Finput type="text" id="state" name="state" placeholder="State"></Finput>
        <Finput type="number" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"></Finput>
        <FTextArea type="text" id="comments" name="comments" placeholder="Additional comments"></FTextArea>
        <Fbutton>Submit</Fbutton>

    </ContactForm>
  )
}

export default Form