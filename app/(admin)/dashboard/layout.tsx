import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute top-0 left-0 z-10 bg-card-foreground w-full h-full text-primary-foreground">
      <div className="grid grid-cols-4 h-screen">
        <div className="col-span-1 bg-primaryAdmin p-4 m-4 rounded-lg">
          <Link href="/" className={buttonVariants({})}>
            Home
          </Link>
          <Link href="/dashboard" className={buttonVariants({})}>
            Dashboard
          </Link>
          <Link
            href="/dashboard/user-management"
            className={buttonVariants({})}
          >
            User Management
          </Link>
          <Link
            href="/dashboard/company-management"
            className={buttonVariants({})}
          >
            Company Management
          </Link>
        </div>
        <div className="col-span-3 p-4 mx-2 my-4 bg-primaryAdmin rounded-lg">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}
