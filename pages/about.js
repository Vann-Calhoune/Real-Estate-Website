/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Image from "next/image";
import headShot from "../public/headclose.png";

const Page = styled.div`
  background: linear-gradient(180deg, var(--surface-soft), white 360px);
`;

const Hero = styled.section`
  display: grid;
  gap: 34px;
  width: min(100% - 32px, var(--max-width));
  margin: 0 auto;
  padding: 64px 0 34px;

  @media (min-width: 860px) {
    grid-template-columns: 420px 1fr;
    align-items: center;
  }
`;

const ImageFrame = styled.div`
  overflow: hidden;
  border-radius: var(--radius);
  background: white;
  box-shadow: var(--shadow);

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const Copy = styled.div`
  h1 {
    margin: 0 0 16px;
    color: var(--brand-dark);
    font-size: clamp(38px, 6vw, 58px);
    line-height: 1;
  }

  p {
    margin: 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.75;
  }
`;

const Mission = styled.section`
  width: min(100% - 32px, var(--max-width));
  margin: 0 auto;
  padding: 42px 0 0;

  h2 {
    margin: 0 0 14px;
    color: var(--brand-dark);
    font-size: clamp(30px, 4vw, 44px);
  }

  p {
    max-width: 900px;
    margin: 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.75;
  }
`;

const HouseGrid = styled.ul`
  display: grid;
  gap: 12px;
  list-style: none;
  margin: 26px 0 0;
  padding: 0;

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  li {
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: white;
    color: var(--brand-dark);
    font-weight: 800;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
  }
`;

const houseTypes = [
  "Ugly homes",
  "New homes",
  "Foreclosure homes",
  "Probate homes",
  "Tax delinquent homes",
  "Tired landlord homes",
  "Homes needing major repairs",
  "And many more",
];

function About() {
  return (
    <Page>
      <Hero>
        <ImageFrame>
          <Image src={headShot} alt="Vann Calhoune" priority />
        </ImageFrame>
        <Copy>
          <h1>About Vann Buys Houses</h1>
          <p>
            My name is Vann Calhoune. I'm a real estate investor born and raised in Kansas City. I am part of a team of experienced investors. I have a degree in business administration and years of real estate experience. Raised by a single mother with 4 siblings, I learned the keys to a successful life include working hard, being kind to one another and keeping your word. These principles are what this firm is built on. We buy houses cash in the Kansas City metro and surrounding areas. If you are looking to sell your house fast for cash, you have come to the right place.
          </p>
        </Copy>
      </Hero>
      <Mission>
        <h2>Mission</h2>
        <p>
          Help people overcome the many challenges that real estate can present. Whether you are in a financial bind and need to sell, you are looking to relocate, inherited a property you don't want, or whatever the case may be, we are here for you. We work hard to solve problems with empathy, clear communication, and a goal of creating a win-win for all parties.
        </p>
      </Mission>
      <Mission>
        <h2>We buy any house</h2>
        <HouseGrid>
          {houseTypes.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </HouseGrid>
      </Mission>
    </Page>
  );
}

export default About;
