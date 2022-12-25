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
font-size: 30px;
margin: 10px 15px;
padding-top: 10px;
@media (min-width: 800px) {
  font-size: 36px;
}

`
const ContentDiv = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
  opacity: .8,
  objectFit: 'cover',
  objectPosition: "center"
}

const Step = styled.div`
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
margin: 5px 15px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
> div {
  border-radius: 10px 10px 10px 10px;
}
@media (min-width: 800px) {
  flex-direction: row;
  width: 800px;
  font-size: 24px;
}


`
const WhyHead = styled.h1`
text-align: center;
font-size: 36px;
color: #004aad;
@media (min-width: 800px) {
  font-size: 46px;
}
`
const WhyList = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
// border: 1px solid black;
align-content: flex-start;
justify-content: flex-start;
margin: 0 10px;
font-size: 24px;


> p {
  font-size: 18px;
  // border: 1px solid black;
  
}
> div {
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  gap: 10px;
  // border: 1px solid black;
  margin-left: 0;
   
}
@media (min-width: 800px) {
  >p {
    font-size: 24px;
  }
  > div {
    font-size: 30px;
  }
}
`
const WhyContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px 10px;
border-radius: 10px;

`

const HowWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px 30px;
padding: 10px; 
border-radius: 10px;

`
const WhyWrapper = styled.div`
display: flex;
`





function index() {
  return( 
  <>
      <FirstDiv>
        <SecDiv>
          <Image
            priority
            src={kcPic}
            fill='true'
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
              <div>
                <Image src={contact} alt="woman with phone and computer" width={250} height={200} />
              </div>
              <p>Contact us or submit a contact form and we will discuss your property. </p>
            </Step>
            <Step>
              <Image src={inspect} alt="house" width={250} height={200} />
                <p>We set up a time to come and take a look at your home.</p>
            </Step>
            <Step >
              <Image src={deal} alt="handshake" width={250} height={200} />
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
              <p>We buy the property as-is.</p>
              <div>
                <Image src={problem} alt='clock' height={50} width={50}/>
                <li>Problem solvers</li>
              </div>
              <p>We specialize in real estate solutions. Whatever your situation may be, we are here to help.</p>
            </WhyList>
          </WhyWrapper>
        </WhyContent>
     
   
  </>)
}

export default index;