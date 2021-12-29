import { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-y-auto">
        <header className="flex items-center justify-center text-3xl h-32 bg-neutral-900">
          <h1>My fullstack todo app with Nextjs + Prisma</h1>
        </header>
        <main className="">{children}</main>
      </div>
    </>
  );
}
