import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { RxCrop, RxDesktop, RxPencil2, RxReader, RxRocket, RxArrowTopRight } from 'react-icons/rx';
import { FreeMode, Pagination } from 'swiper';

const ServiceSlider = () => {
  const serviceData = [
    {
      icon: <RxCrop />,
      title: 'Branding',
      description: 'Hi this is Branding',
    },
    {
      icon: <RxPencil2 />,
      title: 'Design',
      description: 'Hi this is Design',
    },
    {
      icon: <RxDesktop />,
      title: 'Development',
      description: 'Hi this is Development',
    },
    {
      icon: <RxReader />,
      title: 'Copywriting',
      description: 'Hi this is Copywriting',
    },
    {
      icon: <RxRocket />,
      title: 'SEO',
      description: 'Hi this is SEO',
    },
  ];

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={{ FreeMode, Pagination }}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-purple-200 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-purple-300 transition-all duration-300">
            <div className="text-4xl text-accent mb-4" aria-label={item.title}>
              {item.icon}
            </div>
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
