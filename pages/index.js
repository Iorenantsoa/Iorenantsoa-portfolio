
import ParticlesContainer from '../components/ParticlesContainer' 
import Avatar from '../components/Avatar'


import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { LuDownload } from "react-icons/lu";
import { RiGithubFill } from 'react-icons/ri'

const Home = () => {



  return (

    <div className='min-w-[100vw] min-h-screen   absolute top-0 left-0  container mx-auto'>
      {/* particle */}
      <div className="w-full xl:w-[100%] h-full absolute right-0 bg-[#0D1117] -z-10">
        <ParticlesContainer />
      </div>

      <div className='flex justify-center items-center h-full '>
        <div className="text-center flex flex-col justify-center items-center py-48 xl:text-left container mx-auto flex-1">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className=" h2 z-30 text-slate-50 text-center"
          >
            Let{"'"}s Coding  <br /> the Future,
            <span className="text-accent ">Today</span>
          </motion.h1>

          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0  text-slate-50 z-30  text-center  " //text-slate-700
          >
            I’m Ratsimbazafy Iorenantsoa Cédric Antsamalala, a junior developer specializing in crafting web and mobile applications. I focus on delivering creative and efficient solutions to help bring your vision to life.
          </motion.p>

          <div className="flex flex-col items-center justify-center xl:hidden relative gap-y-3 mt-8">
            {/* <ProjectsBtn /> */}
            <button className="rounded-md flex items-center bg-accent text-slate-50 border border-transparent py-3 px-5 text-center text-sm font-semibold transition-all hover:bg-[#d12b1f] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#f05044] focus:ring-opacity-50 active:bg-[#b8251c] active:shadow-inner disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <LuDownload className="h-5 w-5 mr-2 text-slate-50 font-semibold" />
              DOWNLOAD MY CV
            </button>
            <button className="rounded-md flex items-center bg-transparent border border-slate50 text-gray-300 py-3 px-5 text-center text-sm font-semibold transition-all hover:bg-black hover:text-slate-50 hover:font-semibold hover:bg-opacity-30 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">

              <RiGithubFill className="h-5 w-5 mr-2 text-gray-300"   />
              GitHub
            </button>

          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className="hidden xl:flex text-slate-50 z-20 justify-around mt-8 gap-x-4 "
          >

            <button className="rounded-md flex items-center bg-accent text-slate-50 border border-transparent py-3 px-5 text-center text-sm font-semibold transition-all hover:bg-[#d12b1f] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#f05044] focus:ring-opacity-50 active:bg-[#b8251c] active:shadow-inner disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <LuDownload className="h-5 w-5 mr-2 text-slate-50 font-semibold" />
              DOWNLOAD MY CV
            </button>
            <button className="rounded-md flex items-center bg-transparent border border-slate50 text-gray-300 py-3 px-5 text-center text-sm font-semibold transition-all hover:bg-slate-100 hover:text-slate-50 hover:font-semibold hover:bg-opacity-10 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">

              <RiGithubFill className="h-5 w-5 mr-2 text-gray-300"   />
              GitHub
            </button>
          </motion.div>
        </div>

        <div className='h-full hidden xl:flex  flex-1  z-10 '>
          {/* bg img */}
          <div className="hidden xl:flex  bg-none xl:bg-home2 xl:bg-cover xl:bg-center    w-[45%] h-[88%] z-20 absolute  bottom-0 
         right-10 translate-z-0 ">
          </div>
        </div>
      </div>

    </div>

  )
};

export default Home;



