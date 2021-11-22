import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";
import iphoneHero from "../public/iphone-hero.png";
import appStore from "../public/app-store.png";

export default function Home() {
  const NavBarSection = () => {
    return (
      <section className="bg-primary w-full h-32 relative">
        <div className="  w-24 pt-4">
          <Image
            src={logo}
            alt="Shadow Logo"
            width={120}
            height={120}
            placeholder="blur"
          />
        </div>
      </section>
    );
  };

  const HeroSection = () => {
    return (
      <section className="bg-primary -p-72 ">
        <div className=" absolute top-10 right-6 w-36">
          <Image
            src={appStore}
            alt="Apple Store Button"
            width={187.5}
            height={62.6718}
            placeholder="blur"
          />
        </div>
        <h1 className="text-white p-6 text-2xl">
          Minimal / <br />
          Sleek /<br /> Private /
        </h1>
        <div className="">
          <div className="text-center ">
            <Image
              src={iphoneHero}
              alt="Shadow App Iphone"
              width={250}
              height={504.58}
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="bg-white h-72 -mt-64 "></div>
        <div className=" w-full bg-white ">
          <div className="text-2xl w-72 text-center m-auto  ">
            Shadow. The cleanest podcast app.
          </div>
        </div>
      </section>
    );
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBarSection />
        <HeroSection />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
