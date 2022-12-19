import styled from "styled-components"
import Image from "next/image"
import money from '../public/money.jpg'
import sale from '../public/sale.jpg'
import sold from '../public/sold.jpg'

const Heading = styled.div`
text-align: center;
> p {
  font-size: 20px;
}
`

const Offer = styled.div`
> p {
  text-align: center;
}
> h3 {
  text-align: center;
}
`
const Process = styled.div`
display: flex;
justify-content: center;
gap: 5px;
// border: 1px solid black;
height: 60vh;
`
const Steps = styled.div`
display: flex;
flex-direction: column;
// border: 1px solid black;
justify-content: center;
text-align: center;
align-items: center;
width: 35vw;

`

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
            <Image src={sale} alt="for sale sign" width={150} height={150}/>
            <p>
              Refer someone looking to sell their house.
            </p>
          </Steps>
          <Steps>
            <Image src={sold} alt="for sale sign" width={150} height={150}/>
            <p>
              We purchase the property.
            </p>
          </Steps>
          <Steps>
            <Image src={money} alt="for sale sign" width={150} height={150}/>
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