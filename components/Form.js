import styled from "styled-components";

const ContactForm = styled.form`
display: grid;
gap: 14px;
width: min(100%, 520px);
padding: 22px;
border: 1px solid rgba(255, 255, 255, 0.65);
border-radius: var(--radius);
background: rgba(255, 255, 255, 0.95);
box-shadow: var(--shadow);
color: var(--ink);
backdrop-filter: blur(8px);
`

const FormHead = styled.h3`
font-size: clamp(22px, 3vw, 30px);
line-height: 1.1;
text-align: center;
margin: 0;
color: var(--brand-dark);
`

const FormIntro = styled.p`
margin: 0 0 4px;
text-align: center;
color: var(--muted);
line-height: 1.5;
`

const FieldGrid = styled.div`
display: grid;
gap: 12px;

@media (min-width: 700px) {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
`

const Field = styled.label`
display: grid;
gap: 6px;
font-size: 14px;
font-weight: 700;
color: var(--brand-dark);
`

const InputStyles = `
width: 100%;
min-height: 46px;
border: 1px solid var(--border);
border-radius: var(--radius);
padding: 10px 12px;
background: #fff;
color: var(--ink);
outline: none;
transition: border-color 0.2s ease, box-shadow 0.2s ease;

&::placeholder {
  color: #94a3b8;
}

&:focus {
  border-color: var(--brand-light);
  box-shadow: 0 0 0 4px rgba(56, 182, 255, 0.18);
}
`

const Finput = styled.input`
${InputStyles}
`

const FTextArea = styled.textarea`
${InputStyles}
min-height: 90px;
resize: vertical;
`

const FullField = styled(Field)`
@media (min-width: 700px) {
  grid-column: 1 / -1;
}
`

const HoneypotField = styled.label`
position: absolute;
left: -9999px;
width: 1px;
height: 1px;
overflow: hidden;
`

const CaptchaSlot = styled.div`
display: flex;
justify-content: center;
min-height: 78px;
`

const Fbutton = styled.button`
width: 100%;
min-height: 48px;
border: 0;
border-radius: var(--radius);
background: var(--brand);
color: white;
font-weight: 800;
cursor: pointer;
box-shadow: 0 12px 22px rgba(0, 74, 173, 0.2);
transition: transform 0.2s ease, background 0.2s ease;

&:hover,
&:focus-visible {
  background: var(--brand-dark);
  transform: translateY(-1px);
}
`

function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      window.location.href = "/success";
    } catch {
      window.alert("Sorry, your request could not be sent. Please try again or call 913-777-4972.");
    }
  };

  return (
    <ContactForm
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <HoneypotField>
        Do not fill this out if you are human:
        <input type="text" name="bot-field" tabIndex="-1" autoComplete="off" />
      </HoneypotField>
      <FormHead>Request a cash offer</FormHead>
      <FormIntro>Tell us about the property. We will follow up quickly with next steps.</FormIntro>
      <FieldGrid>
        <Field>
          Name
          <Finput required type="text" id="name" name="name" placeholder="Your name" />
        </Field>
        <Field>
          Phone
          <Finput required type="tel" id="phoneNumber" name="phoneNumber" placeholder="913-555-1234" />
        </Field>
        <FullField>
          Street Address
          <Finput required type="text" id="address" name="address" placeholder="123 Main St" />
        </FullField>
        <Field>
          City
          <Finput required type="text" id="city" name="city" placeholder="Kansas City" />
        </Field>
        <Field>
          State
          <Finput required type="text" id="state" name="state" placeholder="MO" />
        </Field>
        <FullField>
          Why are you selling?
          <FTextArea id="whySell" name="whySell" placeholder="Share anything helpful about your situation." />
        </FullField>
        <FullField>
          Additional comments
          <FTextArea id="comments" name="comments" placeholder="Repairs, timeline, best time to call, etc." />
        </FullField>
      </FieldGrid>
      <CaptchaSlot data-netlify-recaptcha="true" />
      <Fbutton type="submit">Request a Cash Offer</Fbutton>
    </ContactForm>
  )
}

export default Form
