import Image from "next/image";
import { Quote } from "lucide-react";

export default function TestimonyCard() {
  const profileImage = "/agents/agent-default.jpg";

  return (
    <div className="flex flex-col rounded-3xl h-fill p-8 shadow-md gap-8">
      <div className="flex justify-start">
        <Quote color="mediumturquoise" fill="mediumturquoise" size={32} />
      </div>
      <div className="m-auto border-4 border-mediumturquoise rounded-full h-[110px] w-[110px] p-1">
        <div className="flex justify-center rounded-full h-full w-full relative">
          <Image
            src={profileImage}
            alt="testimony client"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      <div>
        <p className="text-2xl font-semibold">
          "Best job platform i have ever used. Super easy and found a job
          immediately. Now I am the CEO"
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <h1 className="text-2xl font-bold">
          CEO, <span className="text-gold">Company</span>
        </h1>
      </div>
    </div>
  );
}
