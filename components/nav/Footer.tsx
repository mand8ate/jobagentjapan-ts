import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="w-full bg-blueviolet-200 text-white">
      <div className="container py-10 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:space-x-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-10 h-10 relative">
              <Image
                className="rounded-full"
                alt="jaj logo"
                src="/group1@2x.png"
                width={50}
                height={50}
              />
            </div>
            <div className="mt-2">
              <h1 className="text-xl font-bold md:text-2xl">Job Agent Japan</h1>
              <p className="text-sm text-crimson-300 md:text-base">JAJ</p>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div
              key={section.title}
              className="text-center md:text-left mt-8 md:mt-2"
            >
              <h2 className="text-lg font-semibold md:text-xl">
                {section.title}
              </h2>
              <ul className="mt-2 space-y-2">
                {section.links.map((link) => (
                  <li key={link.title} className="text-center md:text-left">
                    <Link
                      className="cursor-pointer [text-decoration:none] font-medium"
                      href={link.url}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm md:text-left md:flex md:justify-between md:items-center">
          <p>&copy; 2023 Job Agent Japan. All Rights Reserved</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link
              className="cursor-pointer [text-decoration:none] font-medium"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] font-medium"
              href="/terms-of-use"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
