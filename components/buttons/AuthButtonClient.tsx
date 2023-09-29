"use client";

import Link from "next/link";

const AuthButtonClient = () => {
  return (
    <Link href={`/`} className="no-underline hover:underline">
      <button
        className="rounded-[30px] py-2 px-4 text-white text-md bg-blueviolet-200 text-decoration:none flex items-center justify-center cursor-pointer"
      >
        Signin
      </button>
    </Link>
  );
};

export default AuthButtonClient;
