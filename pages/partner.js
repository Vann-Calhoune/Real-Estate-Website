import styled from "styled-components"
import Image from "next/image"
import money from '../public/money.jpg'
import sale from '../public/sale.jpg'
import sold from '../public/sold.jpg'

const Heading = styled.div`
text-align: center;
`

const Offer = styled.div`
> p {
  text-align: center;
}
`
const Process = styled.div`
display: flex;
justify-content: center;
gap: 5px;
border: 1px solid black;
height: 60vh;

`
const Steps = styled.div`
display: flex;
flex-direction: column;
// border: 1px solid black;
justify-content: center;
text-align: center;
align-items: center;

`

function partner() {
  return (
    <>
      <Heading>
        <h1>Do you know someone looking to sell their home?</h1>
        <h2>Become a partner today!</h2>

      </Heading>
      <Offer>
        <p>We are always looking to partner with ambitious, hard working individuals. Our partner program is simple:</p>
        <Process>
          <Steps>
            <Image src={sale} alt="for sale sign" width={200} height={200}/>
            <p>
              Refer someone to us that is looking to sell their house.
            </p>
          </Steps>
          <Steps>
            <Image src={sold} alt="for sale sign" width={200} height={200}/>
            <p>
              We purchase the property.
            </p>
          </Steps>
          <Steps>
            <Image src={money} alt="for sale sign" width={200} height={200}/>
            <p>
              You get paid up to $1000 after closing!
            </p>
          </Steps>

        </Process>
      </Offer>
    </>  
  )
}

export default partner