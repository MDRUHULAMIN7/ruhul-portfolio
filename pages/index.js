import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { motion} from "framer-motion";
import {fadeIn} from '../variants'




const Home = () => {



  return <div className="bg-primary/60 h-full ">
    <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pl-40 xl:text-left h-full container max-auto">
        <motion.h1
           className="h1"
           variants={fadeIn('down',0.2)}
           initial='hidden'
           animate='show'
           exit='exit'>
          Transforming Ideas <br></br> Into{' '}
          <span className="text-accent">Developed Ideas</span>
        </motion.h1>
        <motion.p 
          variants={fadeIn('down',0.3)}
          initial='hidden'
          animate='show'
          exit='exit'
        className="max-w-xm xl:max-w-xl mx-auto xl:mx-0 mb-0 sm:mb-10 xl:mb-16">Creative and Professional Web Developer: Crafting Interactive and Responsive Websites for an Exceptional User Experience</motion.p>
        <div className=" flex justify-center xl:hidden relative">
          <ProjectsBtn></ProjectsBtn>
        </div>
        <motion.div 
         className="hidden xl:flex"
         variants={fadeIn('down',0.4)}
         initial='hidden'
         animate='show'
         exit='exit' >
        <ProjectsBtn></ProjectsBtn>
        </motion.div>
  
      </div>
    </div>

    <div className=" w-[1200px] h-full absolute right-0 bottom-0">
      <div className=" bg-none xl:bg-explosion  xl:bg-cover xl:bg-right h-full w-full xl:bg-no-repeat
      absolute mix-blend-color-dodge  translate-z-0" >

      </div>
      <div>
        <ParticlesContainer></ParticlesContainer>
      </div>
      <motion.div
        variants={fadeIn('up',0.5)}
        initial="hidden"
        animate="show"
       className="w-full absolute right-[8%] max-w-[900px] bottom-0">
      <Avatar></Avatar>
      </motion.div>
      
    </div>
  </div>;
};

export default Home;
