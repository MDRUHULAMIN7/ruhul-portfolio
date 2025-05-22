import Image from "next/image";

const Avatar = () => {
  return <div className="   " >
    <Image src={'/mahafuj.png'}
            width={700}
            height={800}
            priority
           alt=""
           className="translate-z-0 w-full h-full"></Image>
  </div>;
};

export default Avatar;
