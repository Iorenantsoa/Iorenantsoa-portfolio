
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'


import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
const Home = () => {
  return (
    <div className="  ">
      <div className="w-full h-full   ">
        <div className="text-center flex flex-col justify-center  py-36 xl:text-left h-full container mx-auto ">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className=" h2"
          >
            Let{"'"}s Coding  <br /> the Future,
            <span className="text-accent ">Today</span>
          </motion.h1>

          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0  text-black   " //text-slate-700
          >
            I’m Ratsimbazafy Iorenantsoa Cédric Antsamalala, a junior developer specializing in crafting web and mobile applications. I focus on delivering creative and efficient solutions to help bring your vision to life.
          </motion.p>

          <div className="flex justify-center xl:hidden relative ">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className="hidden xl:flex "
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0   "> 
        {/* bg img */}
        <div className="bg-none xl:bg-home1 xl:bg-cover xl:bg-center    w-[40%] h-[88%] z-20 absolute  bottom-0 
        right-10 translate-z-0 "> 
        </div>
        {/* particle */}
        <div className="w-full xl:w-[50%] h-full absolute right-0 bg-[#0D1117] "> 
          <ParticlesContainer />
        </div>


      </div>
    </div>

  )
};

export default Home;



