// icons
import {

  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper,SwiperSlide } from "swiper/react";

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import {FreeMode,Pagination} from "swiper";

// data
const serviceData = [

  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Our website design service creates visually stunning, user-friendly, and responsive sites.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Our web development service delivers robust, efficient, and scalable solutions for diverse digital needs.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Our copywriting service crafts engaging, persuasive, and SEO-optimized content for your brand.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Our SEO service enhances your online visibility, driving organic traffic and boosting rankings. ',
  },
];

const ServiceSlider = () => {
  return <Swiper
          breakpoints={{
            320:{
              slidesPerView:1,
              spaceBetween:15
            },
            640:{
              slidesPerView:3,
              spaceBetween:15
            },
          }}
          freeMode={true}
          pagination={{
            clickable:true
          }}
          modules={[FreeMode,Pagination]}
          className="h-[240px] sm:h-340px]"
          >
            {
              serviceData.map((item,index)=>{
                return <SwiperSlide key={index}>
                  <div className=" bg-[rgba(65,47,123,0.15)] 
                   h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0
                    group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all
                    duration-300  ">
                    <div className="text-4xl text-accent">
                      {item.icon}

                    </div>
                   <div className="mb-8">
                   <div className="mb-2 text-lg">
                      {item.title}                    
                    </div>
                    <p className="max-w-[350px] leading-none">
                      {item.description}
                    </p>
                   </div>
                   
                    <div className="text-3xl">
                      <RxArrowTopRight className=" group-hover:rotate-45
                      group-hover:text-accent translate-all duration- 
                       300"></RxArrowTopRight>
                    </div>
                  </div>

                </SwiperSlide>
              })
            }
          </Swiper>;
};

export default ServiceSlider;
