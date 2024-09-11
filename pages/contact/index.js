import Circles from '/components/Circles'

import { BsArrowRight } from 'react-icons/bs'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Image from 'next/image';
const Contact = () => {
  return (
    <div className='h-full py-36'>

      <div className='container mx-auto h-full flex flex-col items-center  xl:flex-row gap-x-6'>

        <div className='flex flex-col w-full  items-end justify-center xl:max-w-[48%] h-[480px] '>
          {/* text & form */}
          <div className='flex flex-col w-full max-w-[700px] '>
            {/* text */}
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 text-center '>
              Let{"'"}s <span className='text-accent'>connect.</span>
            </motion.h2>
            {/* form */}
            <motion.form
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex-1 flex flex-col gap-6 w-full mx-auto mt-10'>
              {/* input group */}
              <div className='flex gap-x-6 w-full'>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full sm:text-sm  xl:text-[1rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-[#010101] dark:border-gray-700 dark:focus:border-accent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                  <label htmlFor="floating_name" className=" font-medium peer-focus:font-medium absolute sm:text-sm w-1/2 xl:text-[1rem] text-[#010101] dark:text-[#010101] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full sm:text-sm  xl:text-[1rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-[#010101] dark:border-gray-700 dark:focus:border-accent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                  <label htmlFor="floating_email" className=" font-medium peer-focus:font-medium absolute sm:text-sm w-1/2 xl:text-[1rem] text-[#010101] dark:text-[#010101] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_subject" id="floating_subject" className="block py-2.5 px-0 w-full sm:text-sm  xl:text-[1rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-[#010101] dark:border-gray-700 dark:focus:border-accent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                <label htmlFor="floating_subject" className=" font-medium peer-focus:font-medium absolute sm:text-sm w-1/2 xl:text-[1rem] text-[#010101] dark:text-[#010101] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <textarea type="text" name="floating_message" id="floating_message" className="block py-2.5 px-0 w-full sm:text-sm  xl:text-[1rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-[#010101] dark:border-gray-700 dark:focus:border-accent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                <label htmlFor="floating_message" className=" font-medium peer-focus:font-medium absolute sm:text-sm w-1/2 xl:text-[1rem] text-[#010101] dark:text-[#010101] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
              </div>
              {/* <textarea placeholder='message' className='textarea'></textarea> */}
              <button className='btn rounded-full border border-[#000000] max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group '>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-semibold'>Let{"'"}s talk</span>
                <BsArrowRight className=' font-black -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>

            </motion.form>
          </div>
        </div>
        <div className='flex-1 hidden  xl:flex flex-col justify-center  items-center w-full h-full '>
          <Image src={'/babakoto.png'} width={200} height={100} alt="logo" priority={true} className='w-[70%] h-[70%] object-cover ' />
        </div>


      </div>


    </div>
  )
};

export default Contact;




