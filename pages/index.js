import Head from "next/head";
import Image from "next/image";
import logo from "../public/shadow-logo.png";
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
        {/* <div className="absolute top-10 pt-0 mt-0 right-6 w-36 bg-blue  sm:invisible">
          <Image
            src={appStore}
            alt="Apple Store Button"
            width={187.5}
            height={62.6718}
            placeholder="blur"
          />
        </div> */}
        <div className="text-white p-6 text-2xl sm:absolute sm:top-64 sm:text-3xl sm:mt-4 lg:mt-64 lg:pt-8  ">
          Minimal / <br />
          Sleek /<br /> Private /
        </div>
        <div className="transform w-36 absolute top-10 right-4 sm:mt-96 sm:pt-6 lg:pt-96 lg:mt-72 lg:w-48 lg:mr-4  ">
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
          <div className="text-2xl w-72  text-center m-auto pb-12 pt-6 sm:text-3xl sm:w-96 ">
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
            <h1 className="font-bold sm:text-lg  lg:text-xl  ">
              Podcasts only
            </h1>
            <div className="mt-6 lg:text-lg">
              Shadow is an app that is purely dedicated to podcasts. It was
              carefully designed to remove any distractions for you to focus on
              one thing at a time.
            </div>
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
            <h1 className="font-bold sm:text-lg lg:text-xl     ">
              {" "}
              Customizeable Appearance
            </h1>
            <div className="mt-6 lg:text-lg">
              Make the app look the way you want it to look. Change the accent
              colors and choose between light and dark mode for an experience
              that suits your taste.
            </div>
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
      <section>
        <div className="  text-center text-base m-auto  lg:grid grid-cols-2 lg:pt-0 lg:pr-32">
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
              <div className="font-bold text-center m-auto pb-6  pt-4 lg:text-left lg:pt-2 lg:-ml-8 lg:text-lg ">
                Share Play
              </div>
              <div className="mb-12 w-52 m-auto text-left lg:w-96 lg:-ml-8 lg:text-lg">
                Enjoy iOS 15's latest feature. Listen to podcasts with your
                friends and family via FaceTime.
              </div>
            </div>
          </div>

          <div className="  text-center text-base m-auto pt-24 lg:grid grid-cols-2 lg:pt-28 lg:pb-24">
            <div className="mt-20">
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
              <div className="font-bold text-center m-auto pb-6 pt-4 lg:text-left lg:mt-20 lg:text-lg">
                Private
              </div>

              <div className="mb-28 w-56 m-auto text-left lg:w-96 lg:text-lg">
                We value your privacy. No third-party analytics, ad services, or
                tracking code. Listen to any podcast you like without the world
                knowing about it.
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
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* colum 1 */}
          <div>
            <div className="font-bold text-xl m-auto pb-24 w-full pl-12 pr-12 sm:text-3xl sm:w-auto lg:text-2xl lg:w-96 m-0 ">
              The easiest way to follow, download and listen to podcasts
            </div>
            <div class="grid grid-cols-2 gap-4 pl-12 text-white  sm:text-3xl pb-16 w-10/12 lg:w-96 ">
              <div>
                <h2 className="font-bold text-lg  w-42 m-auto sm:m-0  sm:pt-6 sm:w-52 sm:text-3xl lg:text-2xl  ">
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
                  className="transform scale-100  sm:scale-75 md:scale-50  lg:scale-75"
                />
              </div>
            </div>
          </div>
          {/* colum 2 */}
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <div>
                <div className=" pl-12 pb-12 font-normal text-lg font-light lg:text-xl">
                  Available for
                </div>
                <h1 className=" ml-12 font-normal text-3xl leading-10	">
                  {" "}
                  iPhone
                </h1>
                <h1 className="ml-12 font-normal text-3xl leading-10	"> iPad</h1>
              </div>
              <div className=" text-center animate-bounce mt-20 sm:mr-24 lg:invisible	">
                <Image
                  src={airPod}
                  alt="qr code to download shadow app on apple app store"
                  quality={100}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          {/* colum 3 */}
          <div>
            <div className=" lg:flex-col	">
              <div className="">
                <div className="invisible text-center animate-bounce -mt-36  sm:mr-24 lg:visible lg:mt-0	">
                  <Image
                    src={airPod}
                    alt="qr code to download shadow app on apple app store"
                    quality={100}
                    placeholder="blur"
                  />
                </div>
                <div className="grid grid-cols-3 gap-0 pl-8 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-4">
                  <div className="w-24 pt-4">
                    <Image
                      src={logo}
                      alt="Shadow Logo"
                      width={120}
                      height={120}
                      placeholder="blur"
                    />
                  </div>
                  <div className="text-3xl pt-12 pb-24 pm-36 lg:pr-64">
                    Shadow
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
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
        <MainFeaturesSection />
        <ExtraFeaturesSection />
        <footer className="flex items-center justify-center w-full ">
          <FooterSection />
        </footer>
      </main>
    </div>
  );
}
