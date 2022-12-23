import styled from "styled-components";

const ContactForm = styled.form`
display: flex;
flex-direction: column;
padding: 20px;
margin: 10px;
margin-bottom: 30px;
border-radius: 10px;
background-color: #ffffff80;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
gap: 10px;
`

const FormHead = styled.h3`
font-size: 22px;
text-align: center;
`

const Finput = styled.input`
border-radius: 3px;
width: 60vw;
margin: 0 auto;
height: 4vh;
border: 1px solid #38B6FF;
::placeholder {
  font-style: bold;
  font-family: roboto;
  font-size: 16px;
}
@media (min-width: 800px) {
  width: 40vw;
}
`

const Fbutton = styled.button`
margin: 0 auto;
margin-top: 5px;
width: 30%;
background-color: #38B6FF;
color: white;
border-radius: 5px;
height: 30px;
`

const FTextArea = styled.textarea`
border-radius: 3px;
width: 60vw;
margin: 0 auto;
height: 5vh;
border: 1px solid #38B6FF;
::placeholder {
  font-style: bold;
  font-family: roboto;
  font-size: 16px;
}
@media (min-width: 800px) {
  width: 40vw;
  height: 8vh;
}
`

function Form() {
  return (
    <ContactForm name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <FormHead>Submit this form and we will reach out to you!</FormHead>
        
          <Finput required="true" type="text" id="name" name="name" placeholder="Name"></Finput>
          
          <Finput required="true" type="text" id="address" name="address" placeholder="Street Address"></Finput>
          <Finput required="true" type="text" id="city" name="city" placeholder="City"></Finput>
          <Finput required="true" type="text" id="state" name="state" placeholder="State"></Finput>
          
          <Finput required="true" type="number" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"></Finput>

          <FTextArea type="text" id="comments" name="comments" placeholder="Why are you selling?"></FTextArea>
          
          <FTextArea type="text" id="comments" name="comments" placeholder="Additional comments"></FTextArea>
          <Fbutton>Submit</Fbutton>
        

    </ContactForm>
  )
}

export default Form