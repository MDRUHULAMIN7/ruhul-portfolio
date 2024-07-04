import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";


const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      "Creative genius; our website's design and performance have never been better.",
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      "Remarkable web developer; delivered a stunning, intuitive site beyond our vision.",
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      "Transformative web developer; engineered a digital masterpiece with precision and flair.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
    
      modules={[Navigation, Pagination]}
      className="sm:h-[400px] h-[280px] "
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col md:flex-row xl:gap-x-8 gap-x-2 h-full md:px-16">
            <div className="w-full max-w-[300px] flex flex-col justify-center items-center relative mx-auto xl:mx-0">
              <div>
                <div className="mb-2 mx-auto">
                  <Image src={person.image} width={100} height={100} alt="" />
                </div>
                <div className="text-g">{person.name}</div>
                <div>{person.position}</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              <div className="xl:text-lg  text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
