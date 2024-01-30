import Button from "../Button";
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

export default RequestInformation;
