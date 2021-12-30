import { ReactElement } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const DefaultLayout = ({ children }: { children: ReactElement }) => {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-y-auto">
        <header className="flex flex-col items-center justify-center text-3xl h-32 bg-neutral-900">
          <h1>My fullstack todo app with Nextjs + Prisma </h1>
          <div className="text-lg">session: {status}</div>
          {status === "unauthenticated" ? (
            <Link href="/api/auth/signin">
              <a>sign in</a>
            </Link>
          ) : null}

          {status === "authenticated" ? (
            <Link href="/api/auth/signout">
              <a>sign out</a>
            </Link>
          ) : null}
        </header>
        <main className="">{children}</main>
      </div>
    </>
  );
};
