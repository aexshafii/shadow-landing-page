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
import rui from "../public/rui.png";
import dana from "../public/dana.png";
import gary from "../public/gary.png";

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
        <div className="text-white p-6 text-2xl sm:absolute sm:top-64 sm:text-3xl sm:mt-4 lg:mt-64 lg:pt-8 lg:text-4xl  ">
          Minimal / <br />
          Sleek /<br /> Private /
        </div>
        <div className="transform w-36 absolute top-10 right-4 sm:mt-96 sm:pt-6 lg:pt-96 lg:mt-72 lg:w-48 lg:mr-4  ">
          <Image
            src={appStore}
            alt="Apple Store Button"
            placeholder="blur"
            className="object-contain"
          />
        </div>
        <div className=" w-64 m-auto lg:w-96 pt-8">
          <Image src={iphoneHero} quality={100} className="object-contain" />
        </div>
        <div className="bg-white h-72 -mt-64"></div>
        <div className=" w-full bg-white md: pb-4 pt-4 pb-12">
          <div className="text-2xl w-72  text-center m-auto pb-12 pt-6 sm:text-3xl sm:w-96 lg:text-5xl lg:w-1/2 lg:font-bold lg:leading-normal">
            Shadow. The Cleanest Podcast App.
          </div>
        </div>
      </section>
    );
  };
  const MainFeaturesSection = () => {
    return (
      <section className="bg-primary -p-72 pb-16">
        <div className="grid grid-cols-1 text-white text-left text-base m-auto w-72 pb-6 pt-24 lg:grid-cols-2 lg:gap-48 lg:w-11/12   	">
          <div className="max-w-xs">
            <h1 className="font-bold sm:text-lg  lg:text-xl lg:mt-20">
              Podcasts only
            </h1>
            <div className="mt-6 lg:text-lg lg:w-96">
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
            <h1 className="font-bold sm:text-lg lg:text-xl lg:pt-20    ">
              Customizeable Appearance
            </h1>
            <div className="mt-6 lg:text-lg lg:w-96">
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
            <div className="grid grid-cols-2 gap-4 pl-12 text-white  sm:text-3xl pb-16 w-10/12 lg:w-96 ">
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
        <div className="grid grid-cols-12 gap-12  p-36  mb-24">
          <div className="border-solid border-2 border-black text-xl p-6 col-span-4 w-72 h-72">
            <div className="relative -top-48 -left-36 ">
              <Image
                src={rui}
                alt="Gary portrait"
                placeholder="blur"
                className="scale-50 border-2"
              />
            </div>
            <div className="relative -top-64 ">
              “On Spotify, I’ve found myself being frustrated with how many
              features are unintuitive or clunky” <br />
              <br />
              <div className="text-base">- Gary Richards, Indie Hacker</div>
            </div>
          </div>
          <div className="border-solid border-2 border-black text-xl p-6 col-span-4 w-72 h-72">
            “This is the best podcast app I’ve used. I love how I can customize
            how it looks.”
            <br />
            <br />
            <div className="text-base">- Dana Tentis, Photographer</div>
            <div className="relative -top-10 left-36 ">
              <Image
                src={dana}
                alt="Gary portrait"
                placeholder="blur"
                className="scale-50 border-2"
              />
            </div>
          </div>
          <div className="border-solid border-2 border-black text-xl p-6 col-span-4 w-72 h-72">
            “I'm so happy I finally found beautifully designed, minimalist
            podcast app”
            <br />
            <br /> <div className="text-base">- Rui Silvestre, Designer</div>
            <div className="relative -top-40 left-36 ">
              <Image
                src={gary}
                alt="Gary portrait"
                placeholder="blur"
                className="scale-50 border-2"
              />
            </div>
          </div>
        </div>
        <MainFeaturesSection />
        <ExtraFeaturesSection />
        <div className="w-6/12 mx-auto  text-oscuro pb-36">
          <div className="flex flex-col justify-center w-full">
            <h3 className="mb-8 text-center">
              <span className="text-3xl sm:text-3xl lg:text-4xl leading-titles font-bold w-full sm:w-6/12 lg:w-full lg:text-black lg:text-center">
                FAQ
              </span>
            </h3>
            <div>
              <div className="relative mb-4">
                <input type="checkbox" id="toggle1" className="toggle hidden" />
                <label
                  className="title block font-bold bg-primary p-4 cursor-pointer"
                  for="toggle1"
                >
                  Why should I use Shadow when I have Spotify or Apple Music?
                </label>
                <div className="content bg-primary overflow-hidden">
                  <p className="p-4">
                    You probably use those apps for music already. It can be
                    easy to get distracted between the countless artists,
                    albums, and songs that you're listening on there. And let's
                    get real, these apps are not optimized for podcasts. Shadow
                    is.
                  </p>
                </div>
              </div>
              <div className="relative mb-4">
                <input type="checkbox" id="toggle2" className="toggle hidden" />
                <label
                  className="title block font-bold bg-primary p-4 cursor-pointer"
                  for="toggle2"
                >
                  How can I listen to podcasts with my family and friends using
                  Shadow?
                </label>
                <div className="content bg-primary overflow-hidden">
                  <p className="p-4">
                    1. Start a FaceTime call.
                    <br /> 2. Go to the Home Screen, then open Shadow. <br />
                    3. Select a the podcast you want to watch, tap the Play
                    button, then select Play for Everyone (if it appears) to
                    begin watching with everyone on the call. The podcast will
                    then start playing for everyone at the same time.
                  </p>
                </div>
              </div>
              <div className="relative mb-4">
                <input type="checkbox" id="toggle3" className="toggle hidden" />
                <label
                  className="title block font-bold bg-primary p-4 cursor-pointer"
                  for="toggle3"
                >
                  Is Shadow available on Android?
                </label>
                <div className="content bg-primary overflow-hidden">
                  <p className="p-4">
                    Unfortunately not. The app is currently only available on
                    iPhones and iPads with iOS 14 or iPadOS 14 and higher.
                  </p>
                </div>
              </div>
              <div className="relative mb-4">
                <input type="checkbox" id="toggle4" className="toggle hidden" />
                <label
                  className="title block font-bold bg-primary p-4 cursor-pointer"
                  for="toggle4"
                >
                  Is Shadow free?
                </label>
                <div className="content bg-primary overflow-hidden">
                  <p className="p-4">
                    We do offer Shadow for free. However, you can also get
                    Shadow+, which will give you more customization options and
                    extra features. You can get the monthly plan for only $1.49
                    per month and an annual plan for $14.49.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center w-full ">
          <FooterSection />
        </footer>
      </main>
    </div>
  );
}
