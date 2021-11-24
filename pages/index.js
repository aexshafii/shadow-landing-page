import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";
import iphoneHero from "../public/iphone-hero.png";
import appStore from "../public/app-store.png";
import ipadMockup from "../public/ipad-mockup.png";
import customizedIphones from "../public/customized-iphones.png";
import shareplayLogo from "../public/shareplay-logo.png";
import cloudSecurityIllustration from "../public/cloud-security.png";
import qrCode from "../public/qr.png";
import airPod from "../public/airpod.png";

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
        <div className="absolute top-10 pt-0 mt-0 right-6 w-36 bg-blue  sm:invisible">
          <Image
            src={appStore}
            alt="Apple Store Button"
            width={187.5}
            height={62.6718}
            placeholder="blur"
          />
        </div>
        <div className="text-white p-6 text-2xl sm:absolute top-72 lg:mt-60 text-3xl ">
          Minimal / <br />
          Sleek /<br /> Private /
        </div>
        <div className="invisible text-white p-6 text-2xl sm:visible absolute top-72 mt-14 right-0 w-52 pl-10 sm:w-32 lg:pt-96 w-72 pl-0 ">
          <Image
            src={appStore}
            alt="Apple Store Button"
            placeholder="blur"
            className="object-contain "
          />
        </div>
        <div className=" w-64 m-auto lg:w-96 pt-8">
          <Image src={iphoneHero} quality={100} className="object-contain " />
        </div>
        <div className="bg-white h-72 -mt-64 "></div>
        <div className=" w-full bg-white md: pb-4 pt-4 ">
          <div className="text-2xl w-72 text-center m-auto pb-12 pt-6 font-bold   ">
            Shadow. The cleanest podcast app.
          </div>
        </div>
      </section>
    );
  };
  const MainFeaturesSection = () => {
    return (
      <section className="bg-primary -p-72 pb-16  ">
        <div className=" grid grid-cols-1 text-white text-left text-base m-auto w-72 pb-6 pt-24 lg:grid-cols-2 lg:gap-48 lg:w-11/12   	">
          <div className="max-w-xs">
            <h1 className="font-semibold  lg:mt-24   ">Only Podcasts</h1>A
            specialized app dedicated to podcasts, without any distractions.
          </div>
          <div className="mt-12 text-center  lg:mt-0 lg:order-first	">
            <Image
              src={ipadMockup}
              alt="Ipad displaying Shadow app"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 text-white text-left text-base m-auto w-72 pb-6 pt-24 lg:grid-cols-2 lg:gap-48 lg:w-11/12   	">
          <div className="max-w-xs lg:mt-24">
            <h1 className="font-semibold  "> Customizeable Appearance</h1>Change
            the accent colors and choose between light and dark mode.
          </div>
          <div className="mt-12 text-center order-last lg:mt-0 lg:order-last lg:pb-16 ">
            <Image
              src={customizedIphones}
              alt="Colorful iphones showing color customization"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    );
  };
  const ExtraFeaturesSection = () => {
    return (
      <section className="">
        <div className="  text-center text-base m-auto pt-24 lg:grid grid-cols-2 lg:pt-0">
          <div className="  text-center text-base m-auto pt-24 lg:grid grid-cols-2 lg:pt-24 lg:pb-24">
            <div>
              <Image
                src={shareplayLogo}
                alt="Apple share play logo"
                quality={100}
                width={125}
                height={125}
                placeholder="blur"
              />
            </div>
            <div>
              <div className="font-semibold text-center m-auto pb-6 lg:text-left ">
                Share Play
              </div>
              <div className="mb-12 w-52 m-auto text-left">
                Enjoy your favorite podcast with your favorite people on
                FaceTime.
              </div>
            </div>
          </div>

          <div className="text-center text-base m-auto pt-24 lg:grid grid-cols-2 lg:pt-24 lg:pb-24">
            <div>
              <Image
                src={cloudSecurityIllustration}
                alt="cloud security 3d illustration"
                quality={100}
                width={180}
                height={140}
                placeholder="blur"
              />
            </div>
            <div>
              <div className="font-semibold text-center m-auto pb-6 lg:text-left  ">
                Privacy
              </div>

              <div className="mb-24 w-56 m-auto">
                No third-party analytics, ad services, or tracking code.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const FooterSection = () => {
    return (
      <section className="bg-primary pt-24 text-white w-full">
        <div className="font-bold text-xl  m-auto pb-24 w-full pl-12 pr-12  ">
          The easiest way to follow, download and listen to podcasts
        </div>
        <div class="grid grid-cols-2 gap-4 pl-12 text-white  sm:text-3xl pb-16 w-10/12 ">
          <div>
            <h2 className="font-bold  w-42 m-auto  sm:pt-6  ">
              Scan to download Shadow
            </h2>
            →
          </div>
          <div>
            <Image
              src={qrCode}
              alt="qr code to download shadow app on apple app store"
              quality={100}
              placeholder="blur"
              className="transform scale-100 md:scale-75 lg:scale-50"
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="m-auto pl-12 pb-12 font-normal">Available for</div>
            <h1 className=" ml-12 font-normal text-3xl"> iPhone</h1>
            <h1 className="ml-12 font-normal text-3xl"> iPad</h1>
          </div>
          <div className="m-auto text-center pt-12 animate-bounce">
            <Image
              src={airPod}
              alt="qr code to download shadow app on apple app store"
              quality={100}
              width={300}
              height={150}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex pt-12">
          <div className="ml-8 w-24 pt-4">
            <Image
              src={logo}
              alt="Shadow Logo"
              width={120}
              height={120}
              placeholder="blur"
            />
          </div>
          <div className="text-3xl pt-12 pb-24">Shadow</div>
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
        <footer className="flex items-center justify-center w-full ">
          <FooterSection />
        </footer>
      </main>
    </div>
  );
}
