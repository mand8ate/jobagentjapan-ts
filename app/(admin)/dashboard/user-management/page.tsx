import isAdminRoute from "@/lib/auth/adminRoute";

export default async function Page() {
  await isAdminRoute();

  return <div>user management</div>;
}
