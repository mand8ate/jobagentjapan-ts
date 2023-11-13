import Link from "next/link";

export default function CompanySection() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 px-8 text-white font-inter sm:py-12 sm:px-4">
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl shadow-md p-4 text-center">
        <h2 className="text-xl font-semibold uppercase text-white sm:text-lg">
          企業向け情報
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 text-center sm:p-4">
        <p className="text-md text-gray-800 sm:text-sm">
          企業向け情報は下記のリンクをご利用ください
        </p>

        <Link
          href="/company"
          className="block mt-4 text-lg font-bold text-blue-600 hover:underline sm:text-md"
        >
          こちら
        </Link>
      </div>
    </div>
  );
}
