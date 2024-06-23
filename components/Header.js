import Link from "next/link";
import Socials from "../components/Socials";
const Header = () => {
  return <header className="w-full absolute z-30 flex justify-center items-center
  px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <Link href={'/'}>
        <h1 className="text-2xl font-mono font-semibold text-accent">Ruhul<span className="text-2xl font-light text-white">Amin</span>.</h1>
        </Link>
        <Socials></Socials>
      </div>



    </div>
  </header>;
};

export default Header;
