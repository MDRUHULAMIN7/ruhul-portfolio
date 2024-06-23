import Image from "next/image";

const Circles = () => {
  return <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-100 z-10
  "> <Image src={'/circles.png'}
  className="w-full h-full"
            width={260}
            height={200}
            alt=""></Image></div>;
};

export default Circles;
