import Image from "next/image";

const Avatar = () => {
  return <div className="   " >
    <Image src={'/ruhulhd 1.png'}
            width={700}
            height={600}
            priority
           alt=""
           className="translate-z-0 w-full h-full"></Image>
  </div>;
};

export default Avatar;
