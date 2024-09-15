
//component
import WorkSlider from "../../components/WorkSlider"; 

// framer motion

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import ParticlesContainer from "../../components/ParticlesContainer";
import AvatarWork from "../../components/AvatarWork";

const Work = () => {
  return (
    <div className="min-h-screen  flex items-center py-36">

      <div className="w-full xl:w-[100%] h-full absolute right-0 bottom-0 bg-[#0D1117] -z-50 ">
      
        <ParticlesContainer  />
      </div> 
      {/* Avatar image */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[25px] -z-20 opacity-85">
        <AvatarWork />
      </motion.div>

      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-x-8 ">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h3 "
            >
              My works <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Explore a selection of projects I{"'"}ve worked on, showcasing my skills and creativity in developing innovative and functional solutions.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]">
            {/* slider */}
            <WorkSlider />
          </motion.div>

        </div>
      </div>
      {/* <Bulb /> */}
    </div>
  )
};

export default Work;
