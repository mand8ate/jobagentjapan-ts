import Header from "@/components/nav/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/nav/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Agent Japan",
  description:
    "Revolutionize your job search experience in Japan with our AI-powered job platform. Say goodbye to repetitive resume uploads. Simply sign up using your LinkedIn profile and apply to your dream job with a single click. Get instant feedback on your compatibility with the position, and if you're a great match, one of our agents will reach out to you promptly.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <Header />
        <div className="pt-[80px] md:pt-[100px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
