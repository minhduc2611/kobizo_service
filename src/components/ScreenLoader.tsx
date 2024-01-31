import { useEffect } from "react";
import { useCountdown } from "usehooks-ts";
import { cn } from "../utils/tailwind";
import Lottie from "react-lottie";
import { solarLotties } from "../assets";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: solarLotties,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ScreenLoader = () => {
  const [count, { startCountdown }] = useCountdown({
    countStart: 3,
  });

  useEffect(() => {
    startCountdown();
  }, []);
  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 w-full h-[100vh] z-50 bg-[#102560] flex flex-col justify-center items-center",
        !count && "hidden"
      )}
    >
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
      <span className="text-2xl">Preparing experience ... </span>
    </div>
  );
};

export default ScreenLoader;
