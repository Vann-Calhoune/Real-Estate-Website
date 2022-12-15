import styled from "styled-components";

const ContactForm = styled.form`
display: flex;
flex-direction: column;
padding: 20px;
margin: 10px;

`

const FormHead = styled.h3`

`
const Flabel = styled.label`

`

const Finput = styled.input`

`
const Fbutton = styled.button`

`

function Form() {
  return (
    <ContactForm>
        <FormHead>Get a free, no-obligation quote</FormHead>
        <Flabel for="firstName">First Name</Flabel>
        <Finput></Finput>
        <Flabel for="lastName">Last Name</Flabel>
        <Finput></Finput>
        <Flabel for="address">Address</Flabel>
        <Finput></Finput>
        <Flabel for="city">City</Flabel>
        <Finput></Finput>
        <Flabel for="state">State</Flabel>
        <Finput></Finput>
        <Flabel for="name">Phone Number</Flabel>
        <Finput></Finput>
        <Flabel for="name">Name</Flabel>
        <Finput></Finput>
        <Fbutton>Submit</Fbutton>

    </ContactForm>
  )
}

export default Form