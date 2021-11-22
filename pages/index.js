import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Home() {
  const NavBarSection = () => {
    return (
      <section className="bg-primary w-full h-32 relative">
        <Image
          src={logo}
          alt="Shadow Logo"
          width={120}
          height={120}
          placeholder="blur"
        />
      </section>
    );
  };
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <NavBarSection></NavBarSection>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
