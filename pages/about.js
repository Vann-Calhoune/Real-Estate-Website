import styled from "styled-components";
import Image from "next/image";
import headShot from "../public/headShot.png"

const Bio = styled.div`
display: flex;
justify-content: space-around;
height: 75vh;
margin-top: 20px;
padding: 20px;

`
const BioText = styled.div`
width: 30vw;

`
const Mission = styled.div`
> h2 {
  text-align: center;
}
margin: 0 30px;
`
const HouseGrid = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
list-style: none;
gap: 8px;

`

function about() {
  return (
    <>
      
      <Bio>
        <Image  src={headShot} alt="man in suit" width={300} height={400}/>
        <BioText>
          <h2>About Me</h2>
          <p>
            My name is Vann Calhoune. I'm a 26 year old real estate investor born and raised in Kansas City. I am part of a team of experienced investors. I have a degree in business administration and years of real estate experience.
          </p>
        </BioText>
      </Bio>
      <Mission>
      <h2>Mission</h2>
          <p>
            Help people overcome the many challenges that real estate can present. Whether you are in a financial bind and need to sell, you are looking to relocate, inherited a property you don't want, or whatever the case may be, we are here for you! We want to alleviate the stress and anxiety these situations can cause. 
          </p>
        <h2>We buy any house!</h2> 
        <HouseGrid>
          <li>Ugly homes</li>
          <li>New homes</li>
          <li>Foreclosure homes</li>
          <li>Probate homes</li>
          <li>Tax delinquent homes</li>
          <li>Tired landlord homes</li>
          <li>Need a lot of repairs homes</li>
        </HouseGrid>
      </Mission>    
    </>
  )
}

export default about; 