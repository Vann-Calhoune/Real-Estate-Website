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
  font-style: italic;
  
}
@media (min-width: 800px) {
  > p {
    font-size: 26px;
  }
  > h1 {
    font-size: 46px;
  }
}
margin: 20px;
margin-top: 50px;
// border: 1px solid black;
`

const Offer = styled.div`
margin: 20px;
> p {
  text-align: center;
  font-style: italic;
}
> h3 {
  text-align: center;
  margin: 50px;
}
@media (min-width: 800px) {
  > h3 {
    font-size: 22px;
  }
}
`
const Process = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
// border: 1px solid black;
@media (min-width: 800px) {
  flex-direction: row;
  gap: 30px;
}
`
const Steps = styled.div`
padding: 10px;
width: 250px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 20px;
text-align: center;
border-radius: 20px;
background-color: #ffffff20;
// margin: 5px 15px;
margin-top: 20px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
> div {
  border-radius: 20px;
}

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
            <div>
              <Image src={sale} alt="for sale sign" width={250} height={200} />
            </div>
            <p>
              Refer someone looking to sell their house.
            </p>
          </Steps>
          <Steps>
            <div>
              <Image src={sold} alt="for sale sign" width={250} height={200} />
            </div>
             <p>
              We purchase the property.
            </p>
          </Steps>
          <Steps>
            <div>
              <Image src={money} alt="for sale sign" width={250} height={200} />
            </div>
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