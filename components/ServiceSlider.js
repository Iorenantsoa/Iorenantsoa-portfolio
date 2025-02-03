import { Swiper, SwiperSlide } from 'swiper/react'
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";
import { FaChartLine } from "react-icons/fa6";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Crafting a identity that embodies particular values and objectives.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Designing modern and intuitive interfaces for an optimal user experience.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Developing high-performance and secure websites and mobile applications.',
  },
  {
    icon: <FaChartLine />,
    title: 'Data Analysis',
    description: 'Detailed data analysis and reporting to drive informed decisions.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Crafting relevant and optimized content to capture and retain users\' attention.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Search engine optimization to enhance online visibility.',
  },
  {
  icon: <SiGoogleads />,
  title: 'SEA (Search Engine Advertising)',
  description: 'Managing paid campaigns on search engines to drive traffic and boost conversions.',
},
{
  icon: <FaClipboard />,
  title: 'Content Creation',
  description: 'Creating engaging content for social media to enhance brand awareness and interaction.',
},
{
  icon: <FaChartBar />,
  title: 'Performance Analysis',
  description: 'Optimizing digital campaigns to improve performance and maximize ROI.',
},
{
  icon: <SiFacebook />,
  title: 'Social Media Management',
  description: 'Growing social media presence to strengthen brand visibility and community engagement.',
},
{
  icon: <SiHootsuite />,
  title: 'Social Media Strategy',
  description: 'Developing strategies to boost social media reach and engagement.',
},
{
  icon: <SiBuffer />,
  title: 'Social Media Scheduling',
  description: 'Scheduling posts to ensure consistent online presence and engagement.',
},

];

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


// import required modules
import { FreeMode, Pagination } from 'swiper';
import { FaChartBar, FaClipboard } from 'react-icons/fa';
import { SiBuffer, SiFacebook, SiGoogleads, SiHootsuite } from 'react-icons/si';

const ServiceSlider = () => {
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
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[300px] sm:h-[340px] '
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='z-20 bg-[#010101] bg-opacity-90  min-h-[218px] md:min-h-[300px] md:max-h-[300px] mb-3 rounded-lg px-6 py-8 flex  sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#010101] hover:bg-opacity-30 transition-all duration-300'>
              
                {/* icon */}
                <div className='text-4xl text-accent mb-4'>
                  {item.icon}
                </div>
                {/* title and desc */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg text-accent font-bold'>{item.title}</div>
                  <p className='max-w-[250px] leading-normal  text-sm text-gray-300 font-normal'>
                    {item.description}
                  </p>
                </div>
                {/* arrow */}
                <div className='text-3xl '>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300 text-[#F5F5F5]' />
                </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default ServiceSlider;
