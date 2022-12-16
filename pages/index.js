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
height: 75vh;
`

const P1 = styled.p`
text-align: center;

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

const HomeContent = styled.div`
height: 75vh;
max-width: 100vw;
display: flex;
flex direction: row;
gap: 5px;
margin: 5px;
`

const imageStyle = {
  opacity: .65
}

const Step = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid black;
height: 30vh;
align-items: center;


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
      <h2 className={styles.how}>How it Works</h2>
      <HomeContent>
        
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
      </HomeContent>
   
  </>)
}

export default index;