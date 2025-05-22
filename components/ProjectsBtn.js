import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";


const ProjectsBtn = () => {
  return <div className="xl:mx-0  hidden md:flex justify-start">
    <Link className="relative sm:w-[185px] sm:h-[185px] h-[155px] w-[155px] flex justify-center items-center
     bg-circleStar bg-cover bg-no-repeat group" 
     href={'/work'}>
    <Image src={'/rounded-text.png'} width={141} height={148} alt="" 
    className="animate-spin-slow sm:h-full max-w-[141px] w-[130px] h-[130px] max-h-[148px]"></Image>
    <HiArrowRight className="absolute text-4xl  group-hover:translate-x-2
    transition-all duration-300"></HiArrowRight>
    </Link>
  </div>;
};

export default ProjectsBtn;
