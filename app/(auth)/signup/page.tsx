import HeroPages from "@/components/heroes/HeroPages";
import SignupContainer from "@/components/signup/SignupContainer";

export default async function Signup() {
  return (
    <>
      <HeroPages
        bgImg="/signup_hero.jpg"
        bgColor="bg-headergray"
        title="Signup"
        subtitle="Become a free member"
      />
      <SignupContainer />
    </>
  );
}
