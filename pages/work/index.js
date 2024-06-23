import {motion} from "framer-motion"
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return <div className="h-full bg-primary/30 py-32
   flex items-center">
    <Circles></Circles>
    <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row gap-x-8"> 
          {/* text */}
     <div className="text-center  flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0"> 
     <div className="h2 xl:mt-6 mx-auto xl:mx-0">

<motion.h2
   variants={fadeIn('up',0.2)}
   initial="hidden"
   animate="show"
   exit="exit">My Projects<span className="text-accent">.</span></motion.h2>
<motion.p
 variants={fadeIn('up',0.4)}
 initial="hidden"
 animate="show"
 exit="exit"
 className="mb-4 text-sm xl:text-lg  max-w-[400px]  ">Innovative projects merging creativity and code to deliver seamless web experiences..</motion.p>

</div>
     </div>
      
      <motion.div
       variants={fadeIn('down',0.6)}
       initial="hidden"
       animate="show"
       exit="exit"
       className="w-full xl:max-w-[65%]">
      <WorkSlider></WorkSlider>
      </motion.div>
      
      
       </div>
    </div>

    
    <Bulb></Bulb>
  </div>;
};

export default Work;

