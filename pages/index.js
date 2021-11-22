import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";
import iphoneHero from "../public/iphone-hero.png";
import appStore from "../public/app-store.png";
import ipadMockup from "../public/ipad-mockup.png";
import customizedIphones from "../public/customized-iphones.png";
import shareplayLogo from "../public/shareplay-logo.png";
import cloudSecurityIllustration from "../public/cloud-security.png";
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
        <div className="text-white p-6 text-2xl">
          Minimal / <br />
          Sleek /<br /> Private /
        </div>
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
          <div className="text-2xl w-72 text-center m-auto pb-12 pt-6  ">
            Shadow. The cleanest podcast app.
          </div>
        </div>
      </section>
    );
  };
  const MainFeaturesSection = () => {
    return (
      <section className="bg-primary -p-72  ">
        <div className="text-white text-left text-base m-auto w-72  pb-6 pt-24   	">
          <h1 className="font-semibold  "> Only Podcasts</h1>A specialized app
          dedicated to podcasts, without any distractions.
          <div className="mt-12 text-center">
            <Image
              src={ipadMockup}
              alt="Ipad displaying Shadow app"
              quality={100}
              width={250}
              height={205.97}
              placeholder="blur"
            />
          </div>
        </div>

        <div className="text-white text-left text-base m-auto w-72   pt-12 pb-24  	">
          <h1 className="font-semibold  "> Customizeable Appearance</h1>Change
          the accent colors and choose between light and dark mode.
          <div className="mt-12 text-center">
            <Image
              src={customizedIphones}
              alt="Colorful iphones showing color customization"
              quality={100}
              width={250}
              height={217.44}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    );
  };
  const ExtraFeaturesSection = () => {
    return (
      <section className="   ">
        <div className=" text-center text-base m-auto  pt-24   	">
          <Image
            src={shareplayLogo}
            alt="Apple share play logo"
            quality={100}
            width={125}
            height={125}
            placeholder="blur"
          />
        </div>
        <div className="font-semibold text-center m-auto pb-6  ">
          Share Play
        </div>

        <div className="mb-12 w-48 m-auto">
          Enjoy your favorite podcast with your favorite people on FaceTime.{" "}
        </div>
        <div className=" text-center text-base m-auto  pt-12   	">
          <Image
            src={cloudSecurityIllustration}
            alt="cloud security 3d illustration"
            quality={100}
            width={180}
            height={140}
            placeholder="blur"
          />
        </div>
        <div className="font-semibold text-center m-auto pb-6  ">Privacy</div>

        <div className="mb-24 w-48 m-auto">
          No third-party analytics, ad services, or tracking code.
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
        <MainFeaturesSection />
        <ExtraFeaturesSection />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
