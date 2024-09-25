import Circles from '/components/Circles'

import { BsArrowRight } from 'react-icons/bs'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Image from 'next/image';
import ParticlesContainer from '../../components/ParticlesContainer';
import Head from 'next/head';
const Contact = () => {
  return (
    <>
      <Head>
        <title>Iorenantsoa | Contact</title>
        <meta name="description" content="Get in touch with Iorenantsoa. This page provides contact information and a form for inquiries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
 
      <div className='min-h-screen  flex items-center py-36'>

        <div className="w-full xl:w-[100%] h-full absolute right-0 bottom-0 bg-[#0D1117] -z-50 ">

          <ParticlesContainer />
        </div>
        <div className='container mx-auto h-full flex flex-col items-center  xl:flex-row gap-x-6 '>

          <div className='flex-1 hidden  xl:flex flex-col justify-center  items-center max-w-[50%] max-h-[10%]  '>
            <Image src={'/contact.png'} width={450} height={450} alt="logo" priority={true} className='' />
          </div>

          <div className='flex flex-col w-full  items-end justify-center xl:max-w-[50%] min-h-[480px]  z-40   px-5 self-start '>
            {/* text & form */}
            <div className='flex flex-col w-full max-w-[700px] '>
              {/* text */}
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h3 text-center '>
                Let{"'"}s <span className='text-accent'>connect.</span>
              </motion.h2>
              {/* form */}
              <motion.form
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='flex-1 flex flex-col gap-6 w-full mx-auto mt-10 '>
                {/* input group */}
                <div className='flex gap-x-6 w-full'>
                  <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full sm:text-sm  xl:text-[1rem] text-slate-50 bg-transparent border-0 border-b-2 border-slate-50 appearance-none dark:text-slate-50 dark:border-slate-50 dark:focus:border-accent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                    <label htmlFor="floating_name" className=" font-light peer-focus:font-light absolute sm:text-sm w-1/2 xl:text-[1rem] text-slate-50 dark:text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent 
                  peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
                  ">Name</label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full sm:text-sm  xl:text-[1rem] text-slate-50 bg-transparent border-0 border-b-2 border-slate-50 appearance-none dark:text-slate-50 dark:border-slate-50 dark:focus:border-accent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                    <label htmlFor="floating_email" className=" font-light peer-focus:font-light absolute sm:text-sm w-1/2 xl:text-[1rem] text-slate-50 dark:text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent 
                  peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
                  ">Email</label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="floating_subject" id="floating_subject" className="block py-2.5 px-0 w-full sm:text-sm  xl:text-[1rem] text-slate-50 bg-transparent border-0 border-b-2 border-slate-50 appearance-none dark:text-slate-50 dark:border-slate-50 dark:focus:border-accent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                  <label htmlFor="floating_subject" className=" font-light peer-focus:font-light absolute sm:text-sm w-1/2 xl:text-[1rem] text-slate-50 dark:text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent 
                  peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
                  ">Subject</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <textarea type="text" name="floating_message" id="floating_message" className="block py-2.5 px-0 w-full sm:text-sm  xl:text-[1rem] text-slate-50 bg-transparent border-0 border-b-2 border-slate-50 appearance-none dark:text-slate-50 dark:border-slate-50 dark:focus:border-accent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                  <label htmlFor="floating_message" className=" font-light peer-focus:font-light absolute sm:text-sm w-1/2 xl:text-[1rem] text-slate-50 dark:text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent 
                  peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
                  ">Message</label>
                </div>
                {/* <textarea placeholder='message' className='textarea'></textarea> */}
                <button className='btn rounded-full   border-2 border-slate-50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group '>
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-semibold text-slate-50'>Let{"'"}s talk</span>
                  <BsArrowRight className='font-bold text-slate-50 -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                </button>

              </motion.form>
            </div>
          </div>



        </div>


      </div>
    </>
  )
};

export default Contact;




