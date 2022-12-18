import React from "react";
import styled from "styled-components";
import Form from "../components/Form";
import Image from "next/image"; 
import kcPic from "../public/kcDowntown.jpg"
import contact from "../public/contactUs.jpg"
import inspect from "../public/inspect.jpg"
import deal from "../public/deal.jpg"
import styles from "../styles/index.module.css"


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
z-index: -1;
`

const HowContent = styled.div`
height: 45vh;
max-width: 100vw;
display: flex;
flex direction: row;
gap: 5px;
margin: 5px;
justify-content: center;
`

const imageStyle = {
  opacity: .65
}

const Step = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
height: 35vh;
align-items: center;
font-size: 18px;


`
const WhyHead = styled.h2`
text-align: center;
font-size: 30px;
`
const WhyList = styled.ul`
list-style: none;
> li {
  font-size: 18px;
  font-style: bold;
}
`
const WhyContent = styled.div`
border: 1px solid black;
margin: 0 30px;
border-radius: 10px;

`

const HowWrapper = styled.div`
border: 1px solid black;
margin: 20px 30px;
padding: 10px; 
border-radius: 10px;
`





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
          <h2 className={styles.how}>How it works</h2>
          <HowContent>
            
            <Step>
            <Image src={contact} alt="woman with phone and computer" width={200} height={200}/>
            <p>Contact us and we will discuss your property. </p>
              
            </Step>
            <Step>
            <Image src={inspect} alt="house" width={200} height={200}/>
              <p>We set up a time to come and take a look at your home.</p>
              
            </Step>
            <Step >
            <Image src={deal} alt="handshake" width={200} height={200}/>
            <p>We give you a no-obligation offer and can close in 1-3 weeks.</p>
              
            </Step>
          </HowContent>
        </HowWrapper>
        <WhyContent>
          <WhyHead>Why you should choose us</WhyHead>
          <WhyList>
            <li>Fast closing times</li>
            <p>Typically within 1-3 weeks.</p>
            <li>No closing costs</li>
            <p>No real estate commissions or agent fees.</p>
            <li>No repairs needed.</li>
            <p>We buy the property as-is</p>
            <li>Problem solvers</li>
            <p>Times are tough. Whatever your situation may be we are here to help.</p>
          </WhyList>
        </WhyContent>
     
   
  </>)
}

export default index;