"use client";

import { toast } from "react-toastify";

export default function LoginFormEmail() {
  const formActionUrl = `${location.origin}/api/auth/signin`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await fetch(formActionUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      toast.error(errorMessage.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="email"
            name="email"
            className="appearance-none rounded-full py-2 px-4 text-gray-700 bg-silver-100 w-full focus:outline-none focus:ring-1 focus:ring-palevioletred-200 focus:border-transparent"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            name="password"
            className="appearance-none rounded-full py-2 px-4 text-gray-700 bg-silver-100 w-full focus:outline-none focus:ring-1 focus:ring-palevioletred-200 focus:border-transparent"
            placeholder="Password"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-palevioletred-100 hover:bg-palevioletred-500 text-white font-medium py-2 px-4 rounded-full transition duration-200 ease-in-out"
          >
            Email Signin
          </button>
        </div>
      </form>
    </div>
  );
}
