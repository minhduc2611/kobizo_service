import StarWrapper from "../../hoc/SectionWrapper";
import Footer from "./ShowCaseFooter";
import ShowCaseGallery from "./ShowCaseGallery";
import RequestInformation from "./ShowCaseRequestInformation";
import ShowCaseText from "./ShowCaseText";

const Background = () => {
  return (
    <div className="gradients-container hidden lg:block !w-[125%] left-[-15%] top-[14%] h-[110%] overflow-hidden z-1">
      <div className="g7"></div>
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
