import { arrowRight, iconBrain, iconGuide, iconIdentity } from "../../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import Button from "../Button";

const AboutBranding = () => {
  return (
    <div className="Frame1584 px-36 lg:h-[100vh] justify-between items-center flex flex-col lg:flex-row">
      <div className="Frame15 w-full lg:w-[30%] flex-col justify-center items-center lg:justify-start lg:items-start gap-5 flex">
        <p className="Branding  text-white text-5xl font-bold font-['Source Sans Pro'] uppercase">
          Branding
        </p>
        <p className="text-center lg:text-left text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
          We focus on digital brands: virtual identities for online and software
          products and companies.
        </p>
        <Button className="bg-[#007AFF] hover:bg-[#007bffe3] active:bg-[#007AFF]">
          <div className="flex content-between">
            Book Now
            <div className="flex items-center">
              <img src={arrowRight} alt="arrowRight" />
            </div>
          </div>
        </Button>
      </div>
      <div className="Frame1576  w-full lg:w-[70%] items-center justify-center flex h-full">
        <div className="w-[90%] h-[70%] grid grid-rows-4 lg:grid-rows-12 lg:grid-cols-12 grid-flow-row gap-10 p-5">
          <motion.div
            variants={fadeIn("right", "spring", 1 * 0.125, 0.75)}
            className="lg:row-span-5 lg:col-span-6 px-10 py-7 rounded-lg border bg-white bg-opacity-10 border-teal-200 backdrop-blur-xl flex-col justify-start items-start gap-5 inline-flex bg-transparent"
          >
            <div className="flex w-full">
              <div className="w-[100px] relative">
                <div className="Ellipse2 w-14 h-14 left-2 top-[2px] absolute bg-teal-300 rounded-full blur-lg" />
                <img
                  className="IconBrain1 w-14 h-14 left-2 top-0 absolute"
                  src={iconBrain}
                />
              </div>
              <div className="h-[60px] w-[70%] flex items-center text-white text-xl font-bold font-['Source Sans Pro'] capitalize">
                Brand insights and strategy
              </div>
            </div>
            <div className=" text-white text-opacity-80 text-[15px] overflow-scroll font-normal font-['Source Sans Pro'] leading-loose">
              We will define the angle from which the product should be
              presented to the customer. It defines who your brand speaks to and
              how, what the message is, the values, the posi-tioning, the tone
              and the image.
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 2 * 0.125, 0.75)}
            className="lg:row-span-6 lg:col-span-6 px-10 py-7 rounded-lg border bg-white bg-opacity-10 border-teal-200 backdrop-blur-xl flex-col justify-start items-start gap-5 inline-flex bg-transparent"
          >
            <div className="flex w-full">
              <div className="w-[100px] relative">
                <div className="Ellipse2 w-14 h-14 left-2 top-[2px] absolute bg-teal-300 rounded-full blur-lg" />
                <img
                  className="IconBrain1 w-14 h-14 left-2 top-0 absolute"
                  src={iconGuide}
                />
              </div>
              <div className="h-[60px] w-[70%] flex items-center text-white text-xl font-bold font-['Source Sans Pro'] capitalize">
                Brand guidelines
              </div>
            </div>
            <div className=" text-white text-opacity-80 text-[15px] overflow-scroll font-normal font-['Source Sans Pro'] leading-loose">
              Finally, we need to gather all our findings into one solid
              guideline document that is to become the handbook for your brand.{" "}
              <br />
              The guidelines include all strategic, verbal and visual rules and
              recommendations for the brand.
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 3 * 0.125, 0.75)}
            className="lg:row-span-7 lg:col-span-5 px-10 py-7 rounded-lg border bg-white bg-opacity-10 border-teal-200 backdrop-blur-xl flex-col justify-start items-start gap-5 inline-flex bg-transparent"
          >
            <div className="flex w-full">
              <div className="w-[100px] relative">
                <div className="Ellipse2 w-14 h-14 left-2 top-[2px] absolute bg-teal-300 rounded-full blur-lg" />
                <img
                  className="IconBrain1 w-14 h-14 left-2 top-0 absolute"
                  src={iconIdentity}
                />
              </div>
              <div className="h-[60px] w-[70%] flex items-center text-white text-xl font-bold font-['Source Sans Pro'] capitalize">
                Brand <br />
                identity
              </div>
            </div>
            <div className=" text-white text-opacity-80 text-[15px] overflow-scroll font-normal font-['Source Sans Pro'] leading-loose">
              With the variety of media we have now, visual identity goes way
              beyond just a logotype or a symbol. We develop a visual DNA that
              links all the branding elements, making your brand instantly
              recognizable.{" "}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 4 * 0.125, 0.75)}
            className="lg:row-span-6 lg:col-span-7 px-10 py-7 rounded-lg border bg-white bg-opacity-10 border-teal-200 backdrop-blur-xl flex-col justify-start items-start gap-5 inline-flex bg-transparent"
          >
            <div className="flex w-full">
              <div className="w-[100px] relative">
                <div className="Ellipse2 w-14 h-14 left-2 absolute bg-teal-300 rounded-full blur-lg" />
                <img
                  className="IconBrain1 w-14 h-14 left-2 top-0 absolute"
                  src={iconBrain}
                />
              </div>
              <div className="h-[60px] w-full lg:w-[70%] flex items-center text-white text-xl font-bold font-['Source Sans Pro'] capitalize">
                Custom logo design
              </div>
            </div>
            <div className="text-white text-opacity-80 text-[15px] overflow-scroll font-normal font-['Source Sans Pro'] leading-loose">
              With the variety of media we have now, visual identity goes way
              beyond just a logotype or a symbol. We develop a visual DNA that
              links all the branding elements, making your brand instantly
              recognizable.{" "}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutBranding;
