'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Dashboard() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      {session ? (
        <div>
          {/* <Image src={session. } /> */}

          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            <Image
              src={session?.user?.image as string}
              alt="photo"
              className="rounded-full border-2"
              width={50}
              height={50}
            />
            <h1 className="text-2xl">
              Welcome back, {'  '}
              <span className="font-bold">{session?.user?.name}</span>
            </h1>
          </div>
        </div>
      ) : (
        <h1 className=" text-xl text-red-800">You are not logged In</h1>
      )}

      <section className="mt-10">
        {session ? (
          <div className="flex gap-4 mx-auto justify-center">
            <button
              className="bg-red-800 rounded-xl p-3 font-bold text-white"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex gap-4  mx-auto justify-center">
            <button
              className="bg-slate-800 rounded-xl p-3 font-bold text-white"
              onClick={() => signIn('google')}
            >
              Sign In with Google
            </button>
            <button
              className="bg-slate-800 rounded-xl p-3 font-bold text-white"
              onClick={() => signIn('github')}
            >
              Sign In with Github
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
