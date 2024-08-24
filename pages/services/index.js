
//component
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

// framer motion

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Services = () => {
  return (
    <div className="h-full  flex items-start py-36 ">
      {/* <Circles /> */}

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col  justify-start lg:text-left xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2   "
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              I provide software development services focused on quality and innovation, creating robust web, mobile, and digital solutions tailored to the specific needs of clients.
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
