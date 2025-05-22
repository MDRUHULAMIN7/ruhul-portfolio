import Link from "next/link";
import Socials from "../components/Socials";
import { RiFacebookLine,  RiGithubLine, RiLinkedinLine, } from 'react-icons/ri'
const Header = () => {
  return <header className="w-full absolute z-30 flex justify-center items-center
  px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center gap-y-6 py-8">
        <div className="flex items-center gap-2">
          <Link href={'/'}>
        <h1 className="text-2xl font-mono font-semibold text-accent">Ruhul<span className="text-2xl font-light text-white">Amin</span>.</h1>
      
        </Link>
         <div className="flex items-center gap-x-5 text-xl">
          <Link className="hover:text-accent transition-all duration-300" href={'https://www.linkedin.com/in/ruhul7/'}> <RiLinkedinLine></RiLinkedinLine></Link>
    <Link className="hover:text-accent transition-all duration-300" href={'https://github.com/MDRUHULAMIN7'}> <RiGithubLine></RiGithubLine></Link>
    <Link className="hover:text-accent transition-all duration-300" href={'https://www.facebook.com/profile.php?id=100075508398981'}> <RiFacebookLine></RiFacebookLine></Link>
       </div>
        </div>
        <Socials></Socials>
      </div>



    </div>
  </header>;
};

export default Header;
