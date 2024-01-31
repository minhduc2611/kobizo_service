import { Navbar } from "./components";

import { BrowserRouter } from "react-router-dom";
import Background from "./components/landing-page/Background";
import LandingPageContent from "./components/landing-page/LandingPageContent";
import ScrollIndicator from "./components/ScrollIndicator";
import About from "./components/landing-page/About";
import ShowCase from "./components/landing-page/ShowCase";
import ScreenLoader from "./components/ScreenLoader";

function App() {
  return (
    <BrowserRouter>
      <ScreenLoader />
      <div className="background-wrapper relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center">
          <div className="Rectangle12 gradient-bg w-full h-[100vh] ">
            <Navbar />
            <LandingPageContent />
            <Background />
            <ScrollIndicator />
          </div>
          <div className="noise transparent-bg w-full h-[100vh] "></div>
          <About />
          <ShowCase />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
