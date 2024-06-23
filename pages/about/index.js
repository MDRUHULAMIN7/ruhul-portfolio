// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,

} from "react-icons/fa";

import {

  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import Circles from "../../components/Circles";
import { useState } from "react";


//  data
const aboutData = [

  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
        <FaHtml5  className="text-green-500"></FaHtml5>  ,
          <FaCss3  className="text-blue-500" />, 
          <SiTailwindcss  className="text-cyan-500"></SiTailwindcss>,
          <FaJs  className="text-yellow-500" />,
          <FaReact className="text-cyan-300" />,
          
          <SiNodedotjs className="text-[#3c873a]" ></SiNodedotjs>,
          <SiExpress  className="text-[#504d4d]" ></SiExpress>,
          <SiMongodb  className="text-[#68c139]"></SiMongodb>,
          ,
       
        ],
      },
      
    ],
  },
  
  {
    title: 'experience',
    info: [
     
      {
        title: ' Complet Web Development  ',
        stage: '2024-present',
      },
     
    ],
  },
  {
    title: 'Education',
    info: [
     
      {
        title: 'Computer Science Technology',
        stage: '2023 - present',
      },
      
    ],
  },
];

import {motion} from "framer-motion"
import {fadeIn } from "../../variants"
import Avatar from "../../components/Avatar";
import CountUp from "react-countup";
const About = () => {
  const [index,setIndex]= useState(0)
  console.log(index);
  return <div className="h-full bg-primary/30 py-12 xl:py-4 text-center xl:text-left">
    <Circles></Circles>
    <motion.div className="hidden xl:flex absolute bottom-0 -left-[170px] "
     variants={fadeIn('right',0.3)}
     initial="hidden"
     animate="show"
     exit="exit">
      <Avatar></Avatar>
    </motion.div>
    <div className=" container xl:ml-[20%] mx-auto h-full w-full xl:w-[75%] py-32 flex flex-col items-center xl:flex-row">
      <div className="flex-1  flex  flex-col justify-center">
        <motion.h1
        variants={fadeIn('right',0.2)}
        initial="hidden"
        animate="show"
        exit="exit"
         className="xl:text-3xl text-2xl text-semibold ">
        Crafting Tomorrows <span className="text-accent">Web</span> Today !</motion.h1>
        <motion.p
        variants={fadeIn('right',0.4)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="max-w-[500px] text-md xl:text-lg mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 " >
        Iam a passionate web developer with expertise in HTML, CSS, JavaScript, and modern frameworks like React . I love creating user-friendly and responsive websites. With a keen eye for design and a dedication to seamless functionality. Let’s build something great together!
        </motion.p>
        <motion.div
        variants={fadeIn('right',0.6)}
        initial="hidden"
        animate="show"
        exit="exit"
         className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-4">
        <div className=" flex flex-1 xl:gap-x-6 ">
          
        
          {/* experience */}

          <div className=" relative  xl:ml-20 pl-2  flex-1  after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0">
          <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
          <CountUp start={0} end={1} duration={0}></CountUp>+
          </div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>

          </div>
          {/* project*/}

          <div className=" relative  xl:ml-20 pl-2  flex-1  after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0">
          <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
          <CountUp start={0} end={31} duration={10}></CountUp>+
          </div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">projects</div>

          </div>
          {/*Awards */}

          <div className=" relative  xl:ml-20 pl-2  flex-1  after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0">
          <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
          <CountUp start={0} end={2} duration={0}></CountUp>+
          </div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Awards</div>

          </div>
        </div>
        </motion.div>
      
      </div>
      <motion.div
      variants={fadeIn('left',0.6)}
      initial="hidden"
      animate="show"
      exit="exit"
       className=" flex flex-col w-full xl:max-w-[48%] h-[70%]">
        <div className="flex  gap-x-8 xl:gap-x-8 mx-auto xl:mx-0 mb-0">
          {aboutData.map((item,itemIndex)=>{
        
            return <button key={itemIndex} className={`${ index === itemIndex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-200"} cursor-pointer
            capitalize xl:text-lg relative after:w-8
             after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
             onClick={()=>setIndex(itemIndex)}>{item.title}</button>
          })}
        </div>

        <div className="mt-14  py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-0 items-center xl:items-start ">
          {
            aboutData[index].info.map((items,itemsIndex)=>{
              return <div className="flex-1 flex flex-col text-white/60 md:flex-row
               max-w-max gap-x-2 items-center" key={itemsIndex}>
        <div className="font-light mb-2 md:mb-0"> {items.title}</div>
        <div className="hidden md:flex">-</div>
        <div>{items. stage}</div>
        <div className=" flex gap-x-4 ">
          { items.icons?.map((icon,iconIndex)=>{
            return <div className="text-3xl xl:text-4xl text-white" key={iconIndex}>{icon}</div>
          })}
        </div>
              </div>
            })
          }
        </div>
      
      </motion.div>
    </div> 
  </div>;
};

export default About;
