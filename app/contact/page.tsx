import HeroPages from "@/components/heroes/HeroPages";
import ContactFormSection from "@/components/landing/ContactFormSection";

export default async function Contact() {
  return (
    <>
      <HeroPages
        bgImg="/contact_hero.jpg"
        bgColor="bg-headergreen"
        title="Contact"
        subtitle="We always have an open ear!"
      />
      <ContactFormSection />
      <div className="container text-center ">
        <p className="text-2xl font-bold text-muted-foreground tracking-wide px-4 md:px-12 lg:px-24">
          <span className="text-secondary text-4xl">" </span>We typically
          respond to urgent issues or requests within 24 hours. If you haven't
          heard from us within that time frame, please feel free to submit
          another form. We are working on providing a live chat feature for more
          immediate assistance soon!
          <span className="text-secondary text-4xl">" </span>
        </p>
      </div>
    </>
  );
}
