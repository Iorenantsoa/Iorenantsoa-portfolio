
//component
import ServiceSlider from "../../components/ServiceSlider"; 
// framer motion

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import AvatarMyService from "../../components/AvatarMyService";
import ParticlesContainer from "../../components/ParticlesContainer"; 

const Services = () => {
  return (
    <div className="min-h-screen  flex items-center py-36 ">
      <div className="w-full xl:w-[100%] h-full absolute right-0 bg-[#0D1117] -z-50 ">
        <ParticlesContainer />
      </div>
      {/* Avatar image */}
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -right-[200px] -z-20">
        <AvatarMyService />
      </motion.div>

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col  justify-start lg:text-left xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h3 text-slate-50"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-slate-50  ">
              My work revolves around developing software with an emphasis, on quality and innovation. Crafting web and mobile solutions that are customized to meet the unique requirements of our clients.
            </motion.p>

          </div>

          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]">
            {/* slider */}
            <ServiceSlider />
          </motion.div>

        </div>
      </div>
      {/* <Bulb /> */}
    </div>
  )
};

export default Services;
