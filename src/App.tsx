import { Navbar } from "./components";

import { BrowserRouter } from "react-router-dom";
import Background from "./components/landing-page/Background";
import LandingPageContent from "./components/landing-page/LandingPageContent";
import ScrollIndicator from "./components/ScrollIndicator";
import About from "./components/landing-page/About";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center">
          <div className="Rectangle12 gradient-bg bg-gradient-to-b from-blue-900 to-black w-full h-[100vh] ">
            <Navbar />
            <LandingPageContent />
            <Background />
            <ScrollIndicator />
          </div>
          <About />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
