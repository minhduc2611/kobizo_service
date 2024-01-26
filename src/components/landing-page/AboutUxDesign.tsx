import { iconConsult, iconImplement } from "../../assets";
import Button from "../Button";

const AboutUxDesignCallToAction = () => {
  return (
    <div className="Frame1575 h-[40%] flex-col justify-around items-center gap-4 flex p-16">
      <div className="UiUxDesign text-white text-4xl font-bold font-['Source Sans Pro'] uppercase">
        UI/UX Design
      </div>
      <div className="w-[40%] text-center text-white text-xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
        With the orientation to become the No.1 experience research and analysis
        team in the market, we deploy research services exclusively for
        customers as follows.
      </div>
      <Button className="bg-[#007AFF] hover:bg-[#007bffe3] active:bg-[#007AFF]">
        <div className="flex content-between">Get started</div>
      </Button>
    </div>
  );
};

const Card = () => {};

const AboutUxDesignServiceList = () => {
  return (
    <div className="Frame1573 w-full flex-col lg:flex-row h-[70%] flex gap-10 p-10">
        <div className="Frame1540 lg:w-[45%] px-14 pt-10 pb-14 bg-white bg-opacity-10 rounded-3xl border border-teal-200 backdrop-blur-lg flex-col justify-start items-start gap-10 inline-flex">
          <div className="Frame1570 flex lg:flex-col flex-row w-full gap-10">
            <div className="Frame1572 w-32 h-32 relative">
              <div className="Ellipse2 w-32 h-32 left-0 top-[2px] absolute bg-teal-300 rounded-full blur-lg" />
              <img
                className="ConsultIcon1 object-cover w-28 h-32 left-[5px] top-[2px] absolute"
                src={iconConsult}
              />
            </div>
            <div className="UiUxConsulting flex items-center text-white text-2xl font-bold font-['Source Sans Pro']">
              UI/UX Consulting
            </div>
          </div>
          <div className="Frame1538 w-full h-[80%] overflow-auto xl:overflow-unset justify-start items-start gap-9 xl:inline-flex">
            {/* TODO: to reuseable component */}
            <div className="grid w-full grid-cols-1 xl:grid-cols-2 grid-flow-row gap-10">
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  Evaluate the level of maturity
                </span>
              </div>
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  User research
                </span>
              </div>
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  Data analysis
                </span>
              </div>
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  Appraisal of user experience
                </span>
              </div>
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  Test solution
                </span>
              </div>
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  A/B Testing
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="Frame1541 lg:w-[55%] h-full px-14 pt-10 pb-14 bg-white bg-opacity-10 rounded-3xl border border-teal-200 backdrop-blur-lg flex-col justify-start items-start gap-10 inline-flex">
          <div className="Frame1572 w-32 h-32 relative">
            <div className="Ellipse2 w-32 h-32 left-0 top-[2px] absolute bg-teal-300 rounded-full blur-lg" />
            <img
              className="ImplementIcon1 w-28 h-32 left-[8px] top-[3.63px] absolute"
              src={iconImplement}
            />
          </div>
          <div className="UiUxImplementation text-white text-2xl font-bold font-['Source Sans Pro']">
            UI/UX Implementation
          </div>
          <div className="Frame1538 w-full h-[80%] justify-start items-start gap-9 inline-flex">
            <div className="grid w-full h-[80%] grid-cols-1 xl:grid-cols-2 grid-flow-row gap-10">
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  Information architecture
                </span>
              </div>
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  User Flow
                </span>
              </div>
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  Web Map
                </span>
              </div>

              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  Prototype
                </span>
              </div>
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  Usability Testing
                </span>
              </div>
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  Interaction Design
                </span>
              </div>
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  A/B Testing
                </span>
              </div>
              <div className="Frame1542 justify-start items-start inline-flex">
                <span className="EvaluateTheLevelOfMaturity px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white text-white text-md font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                  User Experience Testing
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

const AboutUxDesign = () => {
  return (
    <div className="justify-between items-center flex flex-col">
      <AboutUxDesignCallToAction />
      <AboutUxDesignServiceList />
    </div>
  );
};

export default AboutUxDesign;
