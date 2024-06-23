import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none" >
    <Image src={'/ruhulhd 1.png'}
           width={737}
           height={1978}
           alt=""
           className="translate-z-0 w-full h-full"></Image>
  </div>;
};

export default Avatar;
