import React from "react";
import styled from "styled-components";
import Form from "../components/Form";

const LandingContainer = styled.div`

`
const FirstDiv = styled.div`
display: flex;
justify-content: center;
border: 1px solid black;
padding: 10px;
height: 90vh;
`

const P1 = styled.p`
text-align: center;

`

function index() {
  return( 
  <>
    <LandingContainer>
      <FirstDiv>
        <P1>Get a cash offer for your house today!
        </P1>
        <Form/>
      </FirstDiv>
    </LandingContainer>
  </>)
}

export default index;