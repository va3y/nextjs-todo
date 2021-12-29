import { ReactElement } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export const DefaultLayout = ({ children }: { children: ReactElement }) => {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-y-auto">
        <header className="flex flex-col items-center justify-center text-3xl h-32 bg-neutral-900">
          <h1>My fullstack todo app with Nextjs + Prisma</h1>
          <div className="text-lg">
            session: {session} {status}
          </div>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault;
              signIn();
            }}
          >
            signIn
          </a>
        </header>
        <main className="">{children}</main>
      </div>
    </>
  );
};
