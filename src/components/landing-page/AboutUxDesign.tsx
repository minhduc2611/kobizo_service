import { iconConsult, iconImplement } from "../../assets";
import Button from "../Button";

const AboutUxDesignCallToAction = () => {
  return (
    <div className="Frame1575 flex-col justify-around items-center gap-5 flex p-20">
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
    <div className="Frame1573 w-96 h-96 relative">
      <div className="Frame1540 px-14 pt-10 pb-14 left-0 top-0 absolute rounded-3xl border border-teal-200 backdrop-blur-3xl flex-col justify-start items-start gap-10 inline-flex">
        <div className="Frame1572 w-32 h-32 relative">
          <div className="Ellipse2 w-32 h-32 left-0 top-[2px] absolute bg-teal-300 rounded-full blur-lg" />
          <img
            className="ConsultIcon1 w-28 h-32 left-[5px] top-[2px] absolute"
            src={iconConsult}
          />
        </div>
        <div className="UiUxConsulting text-white text-3xl font-bold font-['Source Sans Pro']">
          UI/UX Consulting
        </div>
        <div className="Frame1538 justify-start items-start gap-14 inline-flex">
          <div className="Frame1561 flex-col justify-start items-start gap-4 inline-flex">
            <div className="Frame1542 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="EvaluateTheLevelOfMaturity text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                Evaluate the level of maturity
              </div>
            </div>
            <div className="Frame1543 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="UserResearch text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                User research
              </div>
            </div>
            <div className="Frame1544 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="DataAnalysis text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                Data analysis
              </div>
            </div>
            <div className="Frame1545 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="AppraisalOfUserExperience text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                Appraisal of user experience
              </div>
            </div>
          </div>
          <div className="Frame1560 flex-col justify-start items-start gap-4 inline-flex">
            <div className="Frame1546 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="TestSolution text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                Test solution
              </div>
            </div>
            <div className="Frame1547 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="ABTesting text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                A/B Testing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Frame1541 h-96 px-14 pt-10 pb-14 left-[760px] top-0 absolute rounded-3xl border border-teal-200 backdrop-blur-3xl flex-col justify-start items-start gap-10 inline-flex">
        <div className="Frame1572 w-32 h-32 relative">
          <div className="Ellipse2 w-32 h-32 left-0 top-[2px] absolute bg-teal-300 rounded-full blur-lg" />
          <img
            className="ImplementIcon1 w-28 h-32 left-[8px] top-[3.63px] absolute"
            src={iconImplement}
          />
        </div>
        <div className="UiUxImplementation text-white text-3xl font-bold font-['Source Sans Pro']">
          UI/UX Implementation
        </div>
        <div className="Frame1538 self-stretch justify-start items-start gap-14 inline-flex">
          <div className="Frame1556 w-80 flex-col justify-start items-start gap-4 inline-flex">
            <div className="Frame1548 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="InformationArchitecture text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                Information architecture
              </div>
            </div>
            <div className="Frame1549 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="UserFlow text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                User Flow
              </div>
            </div>
            <div className="Frame1550 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="WebMap text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                Web Map
              </div>
            </div>
            <div className="Frame1551 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="Prototype text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                Prototype
              </div>
            </div>
          </div>
          <div className="Frame1557 flex-col justify-start items-start gap-4 inline-flex">
            <div className="Frame1554 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="UsabilityTesting text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                Usability Testing
              </div>
            </div>
            <div className="Frame1552 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="InteractionDesign text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                Interaction Design
              </div>
            </div>
            <div className="Frame1553 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="ABTesting text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                A/B Testing{" "}
              </div>
            </div>
            <div className="Frame1555 px-7 py-3.5 bg-white bg-opacity-5 rounded-3xl border border-white justify-start items-start gap-2.5 inline-flex">
              <div className="UserExperienceTesting text-white text-2xl font-normal font-['Source Sans Pro'] leading-9 tracking-tight">
                User Experience Testing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const AboutUxDesign = () => {
  return (
    <div className="Frame1584 px-36 h-[100vh] justify-between items-center flex flex-col">
      <AboutUxDesignCallToAction />
      <AboutUxDesignServiceList />
    </div>
  );
};

export default AboutUxDesign;
