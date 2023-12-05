export default function AboutUsSection() {
  return (
    <div className="container py-16 px-6 sm:px-12 md:px-24 lg:px-32">
      <div className="rounded-xl bg-white shadow-lg flex flex-col sm:flex-row p-6 items-center gap-6 border-2 border-indianred md:gap-8 sm:p-8 md:p-12">
        <img
          className="rounded-full max-w-full h-auto md:w-96 mb-8 sm:mb-0"
          alt="About Us"
          src="/img2@2x.png"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl mb-6 font-semibold">About Job Agent Japan</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Job Agent Japan was born out of the challenging experience of
            navigating the complexities of job hunting, especially in a foreign
            land. In a country as uniquely diverse as Japan, the task becomes
            even more daunting. Our mission is to provide the simplest path to
            pursuing your dream role in the country of your aspirations. Our
            streamlined one-way application process offers an effortless way to
            apply for your desired positions.
          </p>
          <p className="text-lg leading-relaxed">
            With a commitment to offering the most straightforward job search
            experience, we envision a platform that simplifies the pursuit of
            your ideal career. Our roadmap includes expanding our job listings
            to encompass a variety of industries, accompanied by an array of
            filters to aid you in finding the perfect fit. Gone are the days of
            relying on agents with uncertain outcomes; we empower you to take
            control of your job search journey. Join us as we pave the way for a
            new era in job seeking, one that prioritizes transparency,
            accessibility, and your aspirations.
          </p>
        </div>
      </div>
    </div>
  );
}
