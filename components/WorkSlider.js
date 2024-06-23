// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.png",
          live:'https://soultie.web.app/',
          github:'https://github.com/MDRUHULAMIN7/SoulTie-Client',

        },
        {
          title: "title",
          path: "/thumb21.jpg",
          live:'https://foodnet-fb12c.web.app/',
          github:'https://github.com/MDRUHULAMIN7/FoodNeT-client',
        },
     
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb5.jpg",
          live:'https://assignment-10-client-ec401.web.app/',
          github:'https://github.com/MDRUHULAMIN7/ExploreSouthEastAsia?tab=readme-ov-file',
        },
        {
          title: "title",
          path: "/thumb-6.jpg",
          live:'https://mdruhulamin7.github.io/assignment-5/',
          github:'https://github.com/MDRUHULAMIN7/assignment-5',
        },
     
      ],
    },
  ],
};



import { Swiper, SwiperSlide } from "swiper/react";
import{BsArrowRight,BsCode} from "react-icons/bs"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[200px]  xl:h-[280px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2  gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg bg-purple-500
                    overflow-hidden flex items-center cursor-pointer justify-center group"
                    key={index}
                  >
                    <div className="  relative   overflow-hidden flex items- center justify-center">
                      <Image
                        src={image.path}
                        width={500}
                        height={500}
                        alt=""
                      ></Image>
                      <div
                        className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd]
                        opacity-0 group-hover:opacity-80 transition-all duration-700"
                      ></div>
                      <div
                        className="absolute bottom-0
                         translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                         translate-all  duration-300"
                      >
                        <di className="flex items-center gap-x-4 text-sm tracking-[0.2em]">
                          <Link href={image.live} className="delay-100 flex gap-x-1">Live
                                 <span>  <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all delay-100 duration-300
                          "><BsArrowRight></BsArrowRight></div></span>
                          </Link>
                          
                        
                          <Link href={image.github} className="translate-y-[500%] group-hover:translate-y-0 transition-all delay-150 duration-300 flex gap-x-1">Code
                            <span>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all delay-200 duration-300"><BsCode></BsCode></div>
                            </span>
                          </Link>
       
                        </di>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
