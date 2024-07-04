
"use client"
import Circles from "/components/Circles"
import {BsArrowRight} from "react-icons/bs"
import {motion} from "framer-motion"
import { fadeIn } from "../../variants";

import Swal from "sweetalert2";
const Contact = () => {


  const submithandle=e=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const subject=e.target.subject.value;
    const messages=e.target.messages.value;
    const talkInfo={
      name,
      email,subject,messages,
    }
 
    if(talkInfo){
      e.target.reset()

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Message Send",
        showConfirmButton: false,
        timer: 2000
      });
      e.target.reset()
    }
  }

  return <div className="h-full bg-primary/30">
  <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center
 h-full">
  <div className=" ">  
    <motion.h2 
    variants={fadeIn('up',0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="h2 text-center mb-2 mt-2 sm:mb-12"> Let's <span className="text-accent">GetinTouch.</span>
         </motion.h2> 
         <motion.form
         onSubmit={submithandle}
          variants={fadeIn('up',0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col  gap-6 w-full mx-auto ">
          <div className="flex gap-x-6 w-full">

            <input required type="text" placeholder="name" name="name" className="input"></input>
            <input required  type="email" name="email" placeholder="email" className="input"></input>
          </div>
          <input required  type="text" name="subject" placeholder="subject" className="input"></input>
          <textarea required  className="textarea" name="messages" placeholder="message"></textarea>
          <button className="btn rounded-full border border-white/50 max-w-[160px]
          px-8 transition-all duration-300 flex items-center justify-center
          overflow-hidden  hover:border-accent group">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
            transition-all duration-500">Let's talk</span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
             group-hover:-translate-y-0 group-hover:opacity-100 transition-all
             duration-300 text-xl absolute"></BsArrowRight>

          </button>
         </motion.form>
         </div>

  </div>
  </div>;
};

export default Contact;
