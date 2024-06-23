import Image from "next/image";

const Bulb = () => {
  return <div className="absolute -left-36 -bottom-8 rotate-12 mix-blend-color-dodge animate-pulse  duration-75 w-[200px] xl:w-[260px]
  "> <Image src={'/bulb.png'}
       width={260}
       height={200}
       alt=""
       className="h-full w-full"
       ></Image>
  
       

       </div>;
};

export default Bulb;
