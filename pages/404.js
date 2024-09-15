import React from 'react'
import ParticlesContainer from '../components/ParticlesContainer'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Image from 'next/image'

const PageNotFound = () => {
    return (
        <div className="h-full  flex items-center py-36  absolute bottom-0  right-0 left-0">

            <div className="w-full xl:w-[100%] h-full absolute right-0 bottom-0 bg-[#0D1117] -z-50  ">

                <ParticlesContainer />
            </div>
            <div className="container mx-auto h-full  flex justify-center items-center ">
                {/* text */}
                <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 "
                    >
                        <div className='flex flex-col justify-center items-center gap-x-6'>
                            <div className=' flex '>
                                <Image src="/404notFound.png" width={400} height={300} alt='404 not found' objectFit="cover" objectPosition='cover' />
                            </div>
                        </div>
                    </motion.h2>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
