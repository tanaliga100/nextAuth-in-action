import Dashboard from '@/app/UI/Dashboard';
import Image from 'next/image';
import AppLogo from '../assets/favicon_io/apple-touch-icon.png';

export default function Home() {
  return (
    <main className="scale-90 text-center  mt-10 flex flex-col m-auto  justify-center items-center w-full ">
      <head className="scale-90 text-center  mt-10 flex items-center m-auto  justify-center w-full gap-3 ">
        <Image src={AppLogo} alt="logo" height={90} width={75} />
        <section className="">
          <h1 className="text-2xl font-bold rounded-2xl  ">
            NextAuth in action
          </h1>
          <p>sample usage using GoogleOAuth and GithubOAuth</p>
        </section>
      </head>
      <Dashboard />
    </main>
  );
}
