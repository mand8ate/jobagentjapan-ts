import SectionContainer from "./SectionContainer";
import ContactForm from "../forms/ContactForm";

export default async function ContactFormSection() {
  return (
    <SectionContainer title="Contact Us" color="redGradient-bg">
      <ContactForm />
    </SectionContainer>
  );
}
