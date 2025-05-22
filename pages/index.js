import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-screen w-full overflow-hidden">
     
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container   h-full flex flex-col md:justify-center md:pt-28  lg:pt-0 items-center xl:items-start  text-center md:text-left xl:mx-auto  ">
        <div className="md:pr-56 sm:pl-20 md:pl-0 pt-12  md:pt-0 ">
           
          <motion.h1
        
            className="text-[20px]  sm:text-[28px] md:text-[36px] lg:text=[52px] xl:text-[60px] font-semibold leading-tight md:leading-[1.3] mb-4 sm:mb-6 pt-12 sm:pt-0"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            Transforming Ideas <br /> into{" "}
            <span className="text-accent">Developed Ideas</span>
          </motion.h1>

        
          <motion.p
            className="text-base sm:text-sm md:text-lg  max-w-[320px] sm:max-w-xsm lg:max-w-lg xl:max-w-xl mb-2 sm:mb-4 xl:mb-16 mx-auto lg:mx-0"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            Creative and Professional Web Developer Crafting Interactive and
            Responsive Websites for an Exceptional User Experience
          </motion.p>

          <div className="flex  pr-96 lg:mr-0 justify-start">
            <ProjectsBtn />
          </div>
        </div>

         

          
        </div>
      </div>

      <div className="absolute w-full h-full bottom-0 right-0 pointer-events-none">
  
        <div className="hidden xl:block absolute w-full h-full bg-explosion bg-no-repeat bg-right bg-cover mix-blend-color-dodge"></div>

       
        <div>
          <ParticlesContainer />
        </div>

      
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          className="
            absolute 
            bottom-20 
            xl:bottom-0
            w-full 
            lg:ml-10
            md:ml-28
            xl:ml-10
            flex 
            justify-center 
            md:justify-end 
            px-14 
            sm:px-8 
            xl:px-0 
            xl:right-[2%]
            
          "
        >
          <div
            className="
            xs:w-[220px]
           sm:w-[220px]
            md:w-[350px] 
            lg:w-[500px]
            xl:w-[600px] 
            xl:mr-28
            2xl:w-[1000px] 
            
            transition-all
          "
          >
            <Avatar />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
