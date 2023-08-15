// testimonial data
export const testimonialSlider= [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'This is Awsome',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'With desire often than duties or pleases those not!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
         'Loving It',
  },
];



import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




//import required modules
import {  Navigation,Pagination } from  'swiper';
import {FaQuoteLeft} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';


const TestimonialSlider = () => {
  return (
  <Swiper
   navigation={true}
   pagination={{
    clickable:true,
    }}
    modules={{Navigation,Pagination}}
   className='h-[400px]'
   >
    {testimonialSlider.map((person,index)=>{
        return( 
        <SwiperSlide key={index}>
         <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>  
          {/* {avatar,name,position} */}
           <div className='w-full max-w-[300px] flex flex-col  xl:justify-center items-center relative mx-auto xl:mx-0'>
             <div className='flex flex-col justify-center text-center'>
                {/* {avatar} */}
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={100} height={100} alt=''/>
                </div>
                {/* {names} */}
                <div className='text-lg'>{person.name}</div>
                 {/* {position} */}
                 <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
             </div>
           </div>
           {/* {quate and messages} */}
           <div className='flex-1 flex flex-col justify-center before:w-[4px] xl:before:bg-white/50 xl:before:absolute xl:before:left-0 
            xl:before:h-[200px] relative xl:pl-20'>
            {/* {quote icon} */}
            <div className='mb-4'> 
              <FaQuoteLeft  className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
            </div>
            {/* {message} */}
            <div className='xl:text-lg text-center md:text-left '>{person.message}</div>
           </div>
         </div>
         
        </SwiperSlide>
        );
      })}
    </Swiper>);
};

export default TestimonialSlider;