import Link from "next/link";
import { RiFacebookLine,  RiGithubLine, RiLinkedinLine, } from 'react-icons/ri'
const Socials = () => {
  return <div className="flex items-center gap-x-5 text-xl">

    <Link className="hover:text-accent transition-all duration-300" href={'https://www.linkedin.com/in/ruhul7/'}> <RiLinkedinLine></RiLinkedinLine></Link>
    <Link className="hover:text-accent transition-all duration-300" href={'https://github.com/MDRUHULAMIN7'}> <RiGithubLine></RiGithubLine></Link>
    <Link className="hover:text-accent transition-all duration-300" href={'https://www.facebook.com/profile.php?id=100075508398981'}> <RiFacebookLine></RiFacebookLine></Link>
  </div>;
};

export default Socials;
