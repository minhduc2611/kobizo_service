import {
  discord,
  facebook,
  instagram,
  linkedIn,
  logo,
  space1,
  space2,
  space3,
  twitter
} from "../../assets";
import StarWrapper from "../../hoc/SectionWrapper";
import Button from "../Button";

const ShowCaseText = () => {
  return (
    <div className="Frame1586 h-[60vh] flex items-center justify-center p-48">
      <div className="Frame31 relative p-5">
        {/* flex-col justify-start items-center gap-5 inline-flex */}
        <div className="StepIntoDigitalExperience text-center text-white text-4xl font-semibold font-['Source Sans Pro'] uppercase">
          Step into digital
          <br />
          experience
        </div>
        <div className="Solar w-full h-full absolute top-0 left-[-2%] origin-top-left" />

        <div className="w-96 text-center text-white text-xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
          With the orientation to become the No.1 experience research and
          analysis team in the market, we deploy research services exclusively
          for customers as follows.
        </div>
        <div className="Frame1580 w-full h-full top-0 left-0 absolute">
          <div className="SpanAccent w-4 h-4 left-0 bottom-0 absolute border-l border-b border-white border-opacity-80" />
          <div className="SpanAccent w-4 h-4 right-[-1rem] top-[1rem] absolute origin-top-left -rotate-180 border-l border-b border-white border-opacity-80" />
        </div>
      </div>
    </div>
  );
};

// DivCardInner

const ShowCaseGallery = () => {
  return (
    <div className="Frame1587 h-[100vh] relative py-28 px-28 grid grid-rows-4 grid-cols-1 lg:grid-cols-3 grid-flow-row gap-10">
      <div className="DivCardInner lg:row-span-4 lg:col-span-1 w-full h-full rounded-2xl bg-black">
        {/* <div className=" text-white text-opacity-70 text-3xl font-bold font-['Source Sans Pro']">
          01
        </div>
        <div className="DivCardGraphics justify-start items-start inline-flex">
          <div className="SvgGraphics justify-start items-start flex">
            <div className="Frame relative" />
          </div>
        </div>
        <div className="UnlockingTheSecretsOfSeamless self-stretch h-64 text-white text-5xl font-semibold font-['Source Sans Pro'] capitalize">
          Unlocking the Secrets of Seamless
        </div> */}
        <img
          src={space1}
          alt="space1"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="DivCardInner lg:row-span-2 lg:col-span-2 w-full h-full rounded-2xl bg-black">
        {/* <div className=" text-white text-opacity-70 text-3xl font-bold font-['Source Sans Pro']">
          02
        </div>
        <div className="Frame1579 self-stretch justify-between items-center inline-flex">
          <div className="DesigningForDelight w-60 text-white text-5xl font-semibold font-['Source Sans Pro'] capitalize">
            Designing for Delight
          </div>
          <div className="DivContainer w-80 h-40 relative">
            <div className="Svg left-[-34px] top-[-161.88px] absolute justify-start items-start inline-flex">
              <div className="Frame w-96 h-96 relative">
                <div className="ClipPathGroup w-96 h-96 left-[-0px] top-[24.24px] absolute">
                  <div className="Group w-96 h-96 left-[-4.29px] top-[-83.65px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <img
          src={space2}
          alt="space2"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="DivCardInner lg:row-span-2 lg:col-span-2 bg-black w-full h-full rounded-2xl ">
        {/* <div className=" text-white text-opacity-70 text-3xl font-bold font-['Source Sans Pro']">
          03
        </div>
        <div className="Frame1579 justify-start items-center gap-10 inline-flex">
          <div className="RevolutionizingCustomerEngagement w-96 text-white text-5xl font-semibold font-['Source Sans Pro'] capitalize">
            Revolutionizing Customer Engagement
          </div>
          <div className="Frame w-72 h-52 relative">
            <div className="Group w-32 h-32 left-[75.73px] top-[29.82px] absolute"></div>
          </div>
        </div>
       */}
        <img
          src={space3}
          alt="space3"
          className="w-full h-full lg:object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

const Background = () => {
  return (
    <div className="gradients-container hidden lg:block !w-[125%] left-[-15%] top-[14%] h-[110%] overflow-hidden z-1">
      <div className="g7"></div>
      {/* <div className="noise transparent-bg w-full h-[100vh] "></div> */}
    </div>
  );
};

const RequestInformation = () => {
  return (
    <div className="FooterTwBgNoRepeat w-full h-[60vh] py-20 flex flex-col gap-5 mix-blend-lighten justify-center items-center">
      <div className="Frame15 flex-col justify-center items-center gap-5 flex">
        <div className="RequestMoreInformation text-center text-white text-4xl font-bold font-['Source Sans Pro'] uppercase">
          Request More Information
        </div>
        <div className=" w-96 text-center text-white text-xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
          We are obsessed from creating amazing products for our customers to
          then succeeding with you to celebrate together.
        </div>
      </div>
      <Button className="bg-[#007AFF] hover:bg-[#4383c8] active:bg-[#007AFF]">
        <div className="flex content-between">Contact Us</div>
      </Button>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="Frame1583 w-full h-[35vh] px-20 py-20 flex flex-col mix-blend-lighten justify-center items-center gap-10  bg-black">
      <div className="DivTwFlex flex justify-between items-center w-full gap-10">
        <div className="FooterLogoSvg justify-start items-start flex cursor-pointer">
          <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
        </div>
        <div className="DivTwFlexGrow justify-start items-start gap-10 hidden lg:flex">
          <div className="AppWebDevelopment text-white text-xl font-normal font-['Source Sans Pro'] leading-normal tracking-tight cursor-pointer">
            App & Web Development
          </div>
          <div className="BlockchainDevelopment text-white text-xl font-normal font-['Source Sans Pro'] leading-normal tracking-tight cursor-pointer">
            Blockchain Development
          </div>
          <div className="BrandingUiUxDesign text-white text-xl font-normal font-['Source Sans Pro'] leading-normal tracking-tight cursor-pointer">
            Branding & UI/UX Design
          </div>
          <div className="Contact text-white text-xl font-normal font-['Source Sans Pro'] leading-normal tracking-tight cursor-pointer">
            Contact
          </div>
          <div className="Career text-white text-xl font-normal font-['Source Sans Pro'] leading-normal tracking-tight cursor-pointer">
            Career
          </div>
        </div>
        <div className="DivTwFlex justify-start items-center gap-2.5 flex">
          <div className="LinkedinSvg justify-start items-start flex cursor-pointer">
            <img src={linkedIn} alt="linkedIn" />
          </div>
          <div className="FacebookSvg justify-start items-start flex cursor-pointer">
            <img src={facebook} alt="facebook" />
          </div>
          <div className="InstagramSvg justify-start items-start flex cursor-pointer">
            <img src={instagram} alt="instagram" />
          </div>
          <div className="TwitterSvg justify-start items-start flex cursor-pointer">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="DiscordSvg justify-start items-start flex cursor-pointer">
            <img src={discord} alt="discord" />
          </div>
        </div>
      </div>
      <div className=" w-full py-7 border-t border-white border-opacity-40 flex-col justify-center items-start gap-2.5 flex">
        <div className="DivTwFlex w-full justify-between items-start inline-flex flex-col md:flex-row">
          <div className="2023KobizoAllRightsReserved text-center text-white text-xl font-normal font-['Source Sans Pro'] leading-tight tracking-tight">
            © 2023 Kobizo. All Rights Reserved.
          </div>
          <div className="DivTwFlex justify-start items-start gap-2.5 flex">
            <div className="Imprint text-white text-xl font-normal font-['Source Sans Pro'] leading-tight tracking-tight">
              Imprint
            </div>
            <div className=" text-white text-xl font-normal font-['Source Sans Pro'] leading-tight tracking-tight">
              |
            </div>
            <div className="PrivacyPolicy text-white text-xl font-normal font-['Source Sans Pro'] leading-tight tracking-tight">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ShowCase = StarWrapper(() => {
  return (
    <div className="Frame1588 relative w-full h-[260vh]">
      <Background />
      <ShowCaseText />
      <ShowCaseGallery />
      <RequestInformation />
      <Footer />
    </div>
  );
}, "services");

export default ShowCase;
