import React from "react";
import styled from "styled-components";
import Form from "../components/Form";
import Image from "next/image";
import kcPic from "../public/kcDowntown.jpg";
import contact from "../public/contactUs.jpg";
import inspect from "../public/inspect.jpg";
import deal from "../public/deal.jpg";
import time from '../public/clock.png';
import fee from '../public/no-fee.png';
import problem from '../public/problem.png';
import repair from '../public/repair.png';

const Hero = styled.section`
  position: relative;
  min-height: calc(100vh - 126px);
  overflow: hidden;
  isolation: isolate;
`;

const heroImageStyle = {
  objectFit: 'cover',
  objectPosition: 'center',
};

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(7, 48, 111, 0.92), rgba(7, 48, 111, 0.62) 48%, rgba(7, 48, 111, 0.24)),
    linear-gradient(180deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.42));
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  gap: 32px;
  width: min(100% - 32px, var(--max-width));
  margin: 0 auto;
  padding: 54px 0;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1fr) 520px;
    align-items: center;
    padding: 74px 0;
  }
`;

const HeroCopy = styled.div`
  color: white;

  h1 {
    max-width: 680px;
    margin: 0;
    font-size: clamp(42px, 7vw, 72px);
    line-height: 0.98;
    letter-spacing: 0;
  }

  p {
    max-width: 620px;
    margin: 20px 0 0;
    color: rgba(255, 255, 255, 0.86);
    font-size: clamp(18px, 2.2vw, 23px);
    line-height: 1.55;
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
`;

const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 18px;
  border-radius: var(--radius);
  background: white;
  color: var(--brand-dark);
  font-weight: 800;
  text-decoration: none;

  &.secondary {
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.12);
    color: white;
  }
`;

const TrustBar = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 30px;

  @media (min-width: 680px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const TrustItem = styled.div`
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.11);
  color: rgba(255, 255, 255, 0.88);
  font-weight: 700;
`;

const Section = styled.section`
  width: min(100% - 32px, var(--max-width));
  margin: 0 auto;
  padding: 72px 0 0;
`;

const SectionHeader = styled.div`
  max-width: 740px;
  margin: 0 auto 30px;
  text-align: center;

  h2 {
    margin: 0;
    color: var(--brand-dark);
    font-size: clamp(32px, 5vw, 48px);
    line-height: 1.05;
  }

  p {
    margin: 12px 0 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.6;
  }
`;

const CardGrid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 860px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const StepCard = styled.article`
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: white;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);

  img {
    width: 100%;
    object-fit: cover;
  }

  div {
    padding: 20px;
  }

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    margin-bottom: 12px;
    border-radius: 999px;
    background: var(--brand);
    color: white;
    font-weight: 800;
  }

  h3 {
    margin: 0 0 8px;
    color: var(--brand-dark);
    font-size: 22px;
  }

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
  }
`;

const WhySection = styled(Section)`
  width: 100%;
  max-width: none;
  margin-top: 72px;
  padding: 72px 16px;
  background: var(--surface-soft);
`;

const WhyGrid = styled.div`
  display: grid;
  gap: 16px;
  width: min(100%, var(--max-width));
  margin: 0 auto;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const WhyCard = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: start;
  padding: 22px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: white;

  img {
    width: 48px;
    height: 48px;
  }

  h3 {
    margin: 0 0 6px;
    color: var(--brand-dark);
    font-size: 22px;
  }

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
  }
`;

const FinalCta = styled.section`
  width: min(100% - 32px, var(--max-width));
  margin: 72px auto 0;
  padding: 34px;
  border-radius: var(--radius);
  background: var(--brand);
  color: white;
  text-align: center;

  h2 {
    margin: 0;
    font-size: clamp(28px, 4vw, 40px);
  }

  p {
    max-width: 660px;
    margin: 12px auto 22px;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.6;
  }
`;

const steps = [
  {
    image: contact,
    alt: "Woman using a phone and computer",
    title: "Tell us about the house",
    text: "Submit the form or call us. We will learn about the property, your timeline, and what you need next.",
  },
  {
    image: inspect,
    alt: "House exterior",
    title: "We take a quick look",
    text: "We set up a convenient time to view the property and understand its current condition.",
  },
  {
    image: deal,
    alt: "Handshake after an agreement",
    title: "Choose your closing date",
    text: "You get a no-obligation cash offer and can close in as little as 1-3 weeks.",
  },
];

const reasons = [
  {
    icon: time,
    alt: "Clock icon",
    title: "Fast closing times",
    text: "Close on your timeline, typically within 1-3 weeks.",
  },
  {
    icon: fee,
    alt: "No fee icon",
    title: "No closing costs",
    text: "No real estate commissions, agent fees, or hidden costs.",
  },
  {
    icon: repair,
    alt: "Repair icon",
    title: "No repairs needed",
    text: "Sell the property as-is. You do not need to clean it up or fix anything.",
  },
  {
    icon: problem,
    alt: "Problem solving icon",
    title: "Problem solvers",
    text: "We help with inherited homes, liens, repairs, relocation, tired rentals, and more.",
  },
];

function Home() {
  return (
    <>
      <Hero>
        <Image
          priority
          src={kcPic}
          fill
          alt="Downtown Kansas City skyline"
          style={heroImageStyle}
        />
        <HeroOverlay />
        <HeroInner>
          <HeroCopy>
            <h1>Sell your Kansas City house fast for cash.</h1>
            <p>Skip repairs, showings, commissions, and months of uncertainty. We buy houses in any condition and make the process simple.</p>
            <HeroActions>
              <ButtonLink href="#contact-form">Request a Cash Offer</ButtonLink>
              <ButtonLink className="secondary" href="tel:9137774972">Call 913-777-4972</ButtonLink>
            </HeroActions>
            <TrustBar>
              <TrustItem>No repairs needed</TrustItem>
              <TrustItem>No agent commissions</TrustItem>
              <TrustItem>Close in 1-3 weeks</TrustItem>
            </TrustBar>
          </HeroCopy>
          <div id="contact-form">
            <Form />
          </div>
        </HeroInner>
      </Hero>

      <Section>
        <SectionHeader>
          <h2>How it works</h2>
          <p>A straightforward process built around your situation and your timeline.</p>
        </SectionHeader>
        <CardGrid>
          {steps.map((step, index) => (
            <StepCard key={step.title}>
              <Image src={step.image} alt={step.alt} width={360} height={240} />
              <div>
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </StepCard>
          ))}
        </CardGrid>
      </Section>

      <WhySection>
        <SectionHeader>
          <h2>Why choose us</h2>
          <p>We focus on clear communication, flexible timelines, and real estate solutions that remove pressure from the sale.</p>
        </SectionHeader>
        <WhyGrid>
          {reasons.map((reason) => (
            <WhyCard key={reason.title}>
              <Image src={reason.icon} alt={reason.alt} width={48} height={48} />
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </WhyCard>
          ))}
        </WhyGrid>
      </WhySection>

      <FinalCta>
        <h2>Ready to talk through your options?</h2>
        <p>Send us the property details and we will reach out with a clear next step. There is no obligation to accept an offer.</p>
        <ButtonLink href="#contact-form">Start Now</ButtonLink>
      </FinalCta>
    </>
  );
}

export default Home;
