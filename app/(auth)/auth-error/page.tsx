import { redirect } from "next/navigation";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function AuthError(props: Props) {
  const searchParams = props.searchParams;
  const error = searchParams.error;

  if (!error || (error as string) !== "auth_error") {
    redirect("/");
  }

  return (
    <pre>Something went wrong! You must have messed it up, you dickhead</pre>
  );
}
