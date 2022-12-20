import React from "react";
import styled from "styled-components";
import Form from "../components/Form";
import Image from "next/image"; 
import kcPic from "../public/kcDowntown.jpg"
import contact from "../public/contactUs.jpg"
import inspect from "../public/inspect.jpg"
import deal from "../public/deal.jpg"
import styles from "../styles/index.module.css"
import time from '../public/clock.png'
import fee from '../public/no-fee.png'
import problem from '../public/problem.png'
import repair from '../public/repair.png'



const FirstDiv = styled.div`
position: relative;
width: 100vw;
height: 90vh;
`

const P1 = styled.p`
text-align: center;
font-size: 35px;

`
const ContentDiv = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
color: white;
`
const SecDiv = styled.div`
// z-index: -1;
`

const HowContent = styled.div`
// height: 100vh;
// max-width: 100vw;
display: flex;
flex-direction: column;
gap: 10px;
margin: 5px;
justify-content: center;

`

const imageStyle = {
  opacity: .8
}

const Step = styled.div`
padding: 10px;
display: grid;
grid-template-columns: 1fr 1fr;
// height: 25vh;
// width: 250px;
align-items: center;
justify-content: center;
font-size: 18px;
border-radius: 20px;
// background-color: #38b6ff;
background-color: #ffffff20;
margin: 0 20px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


`
const WhyHead = styled.h1`
text-align: center;
font-size: 36px;
color: #004aad;
`
const WhyList = styled.ul`
list-style: none;
> p {
  font-size: 28px;
  
}
> div {
  display: flex;
  align-items: center;
  justify-content: ;
  font-size: 25px;
  font-weight: bold;
  gap: 10px;
  
  
}
`
const WhyContent = styled.div`
margin: 0 30px;
border-radius: 10px;

`

const HowWrapper = styled.div`
margin: 20px 30px;
padding: 10px; 
border-radius: 10px;

`
const WhyWrapper = styled.div`
display: flex;
`
const picStyle = {
  borderRadius: '20px'
};




function index() {
  return( 
  <>
   
      <FirstDiv>
        <SecDiv>
          <Image
            priority
            src={kcPic}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="downtown kansas city"
            style={imageStyle}
          />
        </SecDiv>
        <ContentDiv>
        <P1>We buy houses in any condition!
          </P1>
          <Form/>
        </ContentDiv>
      </FirstDiv>
        <HowWrapper>
          <h1 className={styles.how}>How it works</h1>
          <HowContent>
            <Step>
              <Image src={contact} alt="woman with phone and computer" width={150} height={150} style={picStyle}/>
              <p>Contact us or submit a contact form and we will discuss your property. </p>
            </Step>
            <Step>
              <Image src={inspect} alt="house" width={150} height={150} style={picStyle}/>
                <p>We set up a time to come and take a look at your home.</p>
            </Step>
            <Step >
              <Image src={deal} alt="handshake" width={150} height={150} style={picStyle}/>
              <p>We give you a no-obligation offer and can close in 1-3 weeks.</p>
            </Step>
          </HowContent>
        </HowWrapper>
        <WhyContent>
          <WhyHead>Why you should choose us</WhyHead>
          <WhyWrapper>
            <WhyList>
              <div>
              <Image src={time} alt='clock' height={50} width={50}/>
              <li>Fast closing times</li>
              </div>
              <p>Typically within 1-3 weeks.</p>
              <div>
              <Image src={fee} alt='clock' height={50} width={50}/>
              <li>No closing costs</li>
              </div>
              <p>No real estate commissions or agent fees.</p>
              <div>
              <Image src={repair} alt='clock' height={50} width={50}/>  
              <li>No repairs needed.</li>
              </div>
              <p>We buy the property as-is</p>
              <div>
              <Image src={problem} alt='clock' height={50} width={50}/>
              <li>Problem solvers</li>
              </div>
              <p>Times are tough. Whatever your situation may be, we are here to help.</p>
            </WhyList>
            {/* <Image
            src={logo}
            alt="vann buys houses logo" 
            height={200}/> */}
          </WhyWrapper>
        </WhyContent>
     
   
  </>)
}

export default index;