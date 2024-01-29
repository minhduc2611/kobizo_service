import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-50">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#4BB3F0] flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 30, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 rounded-full bg-[#4BB3F0] mb-1"
          />
        </div>
       {/* Todo: the arrow */}
      </a>
    </div>
  );
};

export default ScrollIndicator;
