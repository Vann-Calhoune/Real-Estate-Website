import styled from "styled-components";
import Image from "next/image";
import money from '../public/money.jpg';
import sale from '../public/sale.jpg';
import sold from '../public/sold.jpg';

const Page = styled.div`
  width: min(100% - 32px, var(--max-width));
  margin: 0 auto;
  padding: 64px 0 0;
`;

const Heading = styled.section`
  max-width: 850px;
  margin: 0 auto 34px;
  text-align: center;

  h1 {
    margin: 0;
    color: var(--brand-dark);
    font-size: clamp(36px, 6vw, 58px);
    line-height: 1.05;
  }

  p {
    margin: 16px 0 0;
    color: var(--muted);
    font-size: 20px;
    line-height: 1.6;
  }
`;

const Process = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 860px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Step = styled.article`
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
    padding: 22px;
  }

  span {
    color: var(--brand);
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 8px 0;
    color: var(--brand-dark);
    font-size: 24px;
  }

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
  }
`;

const ContactBox = styled.section`
  margin-top: 34px;
  padding: 30px;
  border-radius: var(--radius);
  background: var(--surface-soft);
  text-align: center;

  h2 {
    margin: 0 0 10px;
    color: var(--brand-dark);
  }

  p {
    margin: 0 0 20px;
    color: var(--muted);
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 18px;
    border-radius: var(--radius);
    background: var(--brand);
    color: white;
    font-weight: 800;
    text-decoration: none;
  }
`;

const referralSteps = [
  {
    image: sale,
    alt: "For sale sign in front of a house",
    label: "Step 1",
    title: "Send us the referral",
    text: "Refer someone who is looking to sell a house in Kansas City or the surrounding area.",
  },
  {
    image: sold,
    alt: "Sold sign in front of a house",
    label: "Step 2",
    title: "We buy the property",
    text: "If we purchase the property, we handle the sale directly with the homeowner.",
  },
  {
    image: money,
    alt: "Cash referral reward",
    label: "Step 3",
    title: "You get paid",
    text: "Receive up to $1,000 after closing for a successful referral.",
  },
];

function Partner() {
  return (
    <Page>
      <Heading>
        <h1>Know someone who needs to sell their home?</h1>
        <p>Refer them to us and receive up to $1,000 after closing. The process is simple.</p>
      </Heading>
      <Process>
        {referralSteps.map((step) => (
          <Step key={step.title}>
            <Image src={step.image} alt={step.alt} width={360} height={240} />
            <div>
              <span>{step.label}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </Step>
        ))}
      </Process>
      <ContactBox>
        <h2>Have a referral?</h2>
        <p>Call or text us and we will walk you through the details.</p>
        <a href="tel:9137774972">Call 913-777-4972</a>
      </ContactBox>
    </Page>
  );
}

export default Partner;
