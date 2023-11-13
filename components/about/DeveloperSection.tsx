import Image from "next/image";

export default async function DeveloperSection() {
  return (
    <div className="self-stretch bg-darkslategray-200 flex flex-col py-[125px] px-[150px] items-center justify-center text-center font-inter md:pl-[50px] md:pr-[50px] md:box-border sm:pl-[50px] sm:box-border">
      <div className="self-stretch rounded-xl shadow-lg flex flex-col p-[50px] items-center justify-center space-y-6">
        <h2 className="text-29xl text-pink leading-tight md:text-17xl sm:text-13xl">
          Product by
        </h2>

        <div className="relative w-[250px] h-[250px] md:w-[150px] md:h-[150px] sm:w-[100px] sm:h-[100px]">
          <Image
            src="/tabicon-1@2x.png"
            alt="Omnilabs Digital Logo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <h3 className="text-29xl leading-tight md:text-17xl sm:text-13xl">
          Omnilabs Digital
        </h3>

        <a
          href="https://omnilabs.digital"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-rosybrown hover:underline"
        >
          Visit us at: omnilabs.digital
        </a>
      </div>
    </div>
  );
}
