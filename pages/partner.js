import styled from "styled-components"
import Image from "next/image"
import money from '../public/money.jpg'
import sale from '../public/sale.jpg'
import sold from '../public/sold.jpg'

const Heading = styled.div`
text-align: center;
> h1 {
  color: #004aad;
  
}
> p {
  font-size: 22px;
  
}
margin: 20px;
margin-top: 50px;
// border: 1px solid black;
`

const Offer = styled.div`
margin: 20px;
> p {
  text-align: center;
}
> h3 {
  text-align: center;
}
`
const Process = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
gap: 20px;
margin: 50px 0;
// border: 1px solid black;
height: 100vh;

`
const Steps = styled.div`
display: flex;
flex-direction: row;
// border: 1px solid black;
justify-content: space-between;
text-align: center;
align-items: center;
width: 75vw;
height: 100vh;
max-height: 170px;
gap: 5px;
border-radius: 10px;
// background-color: #38B6FF;
// margin: 0 10px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
> p {
  font-size: 20px;
}
padding: 5px;


`

const picStyle = {
 borderRadius: '10px 0 0 10px',
//  padding: '15px'
};

const picStyle2 = {
  borderRadius: '0 10px 10px 0',
 //  padding: '15px'
 };

function partner() {
  return (
    <>
      <Heading>
        <h1>Do you know someone looking to sell their home?</h1>
        <p>Refer them to us and receive up to $1000! Here's how:</p>
      </Heading>
      <Offer>
        <Process>
          <Steps>
            <Image src={sale} alt="for sale sign" width={150} height={170} style={picStyle}/>
            <p>
              Refer someone looking to sell their house.
            </p>
          </Steps>
          <Steps>
          <p>
              We purchase the property.
            </p>
            <Image src={sold} alt="for sale sign" width={150} height={170} style={picStyle2}/>
           
          </Steps>
          <Steps>
            <Image src={money} alt="for sale sign" width={150} height={170} style={picStyle}/>
            <p>
              You get paid up to $1000 after closing!
            </p>
          </Steps>
        </Process>
        <h3>Contact us for more info</h3>
      </Offer>
    </>  
  )
}

export default partner