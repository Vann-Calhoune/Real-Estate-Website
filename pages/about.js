import styled from "styled-components";
import Image from "next/image";
import headShot from "../public/headclose.png"

const Bio = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;

// border: 1px solid black;
> h2 {
  font-size: 45px;
  color: #004aad
}

`
const BioText = styled.div`
display: flex;
flex-direction: column;
// border: 1px solid black;
> p {
  font-size: 20px;
}
margin: 0 20px;

`
const Mission = styled.div`
display: flex;
flex-direction: column;
align-items: center;
> h2 {
  text-align: center;
  font-size: 45px;
  color: #004aad;
}
> p {
  font-size: 20px;
  margin: 0 20px;
}
margin: 20px 20px;
`
const HouseGrid = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 8px;
font-size: 20px;
text-align: center;
// border: 1px solid black;
list-style: none;

> li {
  background-color: #38B6FF;
  border-radius: 10px;
  padding: 10px
  
}


`
const headStyles = {
  // border: ' 1px solid black',
 
  
};

function about() {
  return (
    <>
      
      <Bio>
        <h2>About Us</h2>
        <Image  src={headShot} alt="man in suit" width={400} height={400} style={headStyles}/>
        <BioText>
          
          
          <p>
            My name is Vann Calhoune. I'm a real estate investor born and raised in Kansas City. I am part of a team of experienced investors. I have a degree in business administration and years of real estate experience. Raised by a single mother with 4 siblings, I learned the keys to a successful life include working hard, being kind to one another and keeping your word. These principles are what this firm is built on. We buy houses cash in the Kansas City metro and surrounding areas. If you are looking to sell your house fast for cash, you have come to the right place!
          </p>
        </BioText>
        
      </Bio>
      <Mission>
        <h2>Mission</h2>
            <p>
              Help people overcome the many challenges that real estate can present. Whether you are in a financial bind and need to sell, you are looking to relocate, inherited a property you don't want, or whatever the case may be, we are here for you! We want to alleviate the stress and anxiety these situations can cause. We work hard to solve your problems and approach every situation with empathy and compassion. We want every deal we make to be a win-win for all parties!
            </p>
          <h2>We buy any house!</h2> 
          <HouseGrid>
            <li>Ugly homes</li>
            <li>New homes</li>
            <li>Foreclosure homes</li>
            <li>Probate homes</li>
            <li>Tax delinquent homes</li>
            <li>Tired landlord homes</li>
            <li>Homes needing major repairs</li>
            <li>And many more!</li>
          </HouseGrid>
        </Mission>    
    </>
  )
}

export default about; 