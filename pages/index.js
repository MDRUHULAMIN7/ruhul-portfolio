import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen w-full overflow-hidden relative">
      {/* Gradient background */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container h-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-12 lg:px-24 xl:px-32 pt-28 md:pt-32">
          {/* Text and button content */}
          <motion.h1
            className="text-[26px] sm:text-[32px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-semibold leading-tight mb-4 sm:mb-6"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            Transforming Ideas <br /> into{" "}
            <span className="text-accent">Developed Ideas</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg max-w-[90%] md:max-w-[520px] xl:max-w-[620px] mb-4 md:mb-8"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            Creative and Professional Web Developer Crafting Interactive and
            Responsive Websites for an Exceptional User Experience
          </motion.p>

          {/* Button container */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="mt-2 sm:mt-4"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Background explosion and particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden xl:block absolute inset-0 bg-explosion bg-no-repeat bg-right bg-cover mix-blend-color-dodge"></div>
        <ParticlesContainer />
      </div>

      {/* Avatar */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        className="absolute xsm:bottom-23 sm:bottom-20 xl:bottom-0 w-full flex justify-center md:justify-end items-end px-6 sm:px-12 xl:pr-24"
      >
        <div className="w-[320px]  md:w-[350px]  lg:w-[500px] xl:w-[600px] 2xl:w-[750px] transition-all">
          <Avatar />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
