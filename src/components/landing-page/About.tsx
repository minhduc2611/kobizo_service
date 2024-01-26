import StarWrapper from "../../hoc/SectionWrapper";
import AboutBranding from "./AboutBranding";
import AboutUxDesign from "./AboutUxDesign";

const About = StarWrapper(() => {
  return (
    <>
      <div className="gradients-container">
        <div className="g6"></div>
      </div>
      <AboutBranding />
      <AboutUxDesign />
    </>
  );
}, "about");

export default About;
