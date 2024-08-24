// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'TutoForYou',
          path: '/TutoForYou.jpg',
        },
        {
          title: 'title',
          path: '/RenalScanAI.jpg',
        },
        {
          title: 'title',
          path: '/Gstage.jpg',
        },
        {
          title: 'title',
          path: '/gasyCarImage.jpg',
        },
        
        
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/G-permiConstruire4.jpg',
        },
        {
          title: 'title',
          path: '/NybaibolikoImage.jpg',
        },
        
        // {
        //   title: 'title',
        //   path: '/thumb2.jpg',
        // },
        // {
        //   title: 'title',
        //   path: '/thumb3.jpg',
        // },
      ],
    },
  ],
};



import { Swiper, SwiperSlide } from 'swiper/react'
// icons
import {
  BsArrowRight
} from "react-icons/bs";




import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4  cursor-pointer'>
              {
                slide.images.map((image, index) => {
                  return (
                    <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt='imageWorks'
                        />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-[#020202] via-[#474747] to-[#020202] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                        </div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-[#F5F5F5] font-semibold'>
                            {/* title part 1 */}
                            <div className='delay-100'>LIVE</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                            {/* icon */}
                            <div className=' text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)
                })
              }
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default WorkSlider;

