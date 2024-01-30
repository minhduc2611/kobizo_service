import {
  discord,
  facebook,
  instagram,
  linkedIn,
  logo,
  twitter
} from "../../assets";

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

export default Footer;
