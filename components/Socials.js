import Link from "next/link";

import { GoDownload } from "react-icons/go";
const Socials = () => {
  return <div className="flex xsm:flex-col sm:flex-row  items-center gap-x-5 text-xl">

   
    <Link className="hover:text-accent transition-all duration-300 flex justify-center items-center gap-x-2" href={'https://drive.google.com/file/d/1nUnmbo0TawPZNR34KaWbyyrPB11s1teK/view?usp=sharing'} >Resume <GoDownload /></Link>
  </div>;
};

export default Socials;
