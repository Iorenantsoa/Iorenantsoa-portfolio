import React, { useState } from 'react'
// icons
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
  FaFigma,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiNestjs,
  SiKotlin,
  SiExpo,
  SiSymfony,
  SiNumpy,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <RiJavascriptFill />,
          <BiLogoTypescript />,
          <FaReact />,
          <SiNextdotjs />,
          <FaNode />,
          <SiNestjs />,
          <SiSymfony />,

        ],

      },
      {
        title: 'Mobile Development',
        icons: [
          <SiKotlin />,
          <TbBrandReactNative />,
          <SiExpo />,

        ],
      },
      {
        title: 'Artificial Intelligence (AI)',
        icons: [
          <SiPython />,
          <SiNumpy />,
          <SiPandas />,
          <SiScikitlearn />,
          <SiTensorflow />,
          <SiKeras />,

        ],
      },

      {
        title: 'Databases',
        icons: [<SiSqlite />, <SiPostgresql />, <SiMongodb />, <SiMysql />,],
      },
      {
        title: 'Version Control',
        icons: [<FaGitAlt />, <FaGithub />],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },

  {
    title: 'experience',
    info: [
      {
        title: 'Bachelor’s Project - IES-AV (Institut d’Enseignement Supérieur d’Antsirabe Vakinankaratra)',
        school: 'Developed an image classification model to detect kidney diseases using Convolutional Neural Networks (CNNs).',
        stage: 'july 2023',
      },
      {
        title: 'Intern Developer - Paositra Malagasy',
        school: 'Worked on internal projects to enhance company processes.',
        stage: 'august 2022 - november 2022',
      },
    ],
  },
  {
    title: 'formations & credentials',
    info: [
      {
        title: 'First Year of Master’s in Software Engineering (M1)  ',
        school: 'IES-AV (Institut d’Enseignement Supérieur d’Antsirabe Vakinankaratra)',
        stage: '2024',
      },
      {
        title: 'Maintenance and Networks',
        school: "Nir’Info",
        stage: '2023',
      },
      {
        title: 'Third Year of Bachelor’s in Software Engineering (L3)',
        school: 'IES-AV (Institut d’Enseignement Supérieur d’Antsirabe Vakinankaratra)',
        stage: '2023',
      },
      {
        title: 'Baccalaureate Series D ',
        school: 'Lycée Sainte Famille Anosivavaka Ambohimanarina',
        stage: '2018',
      },
    ],
  },
];

import Avatar from '../../components/Avatar'
import CountUp from 'react-countup';
import ParticlesContainer from '../../components/ParticlesContainer';
import AvatarAbout from '../../components/AvatarAbout';
import { ReactTyped } from 'react-typed';


const About = () => {
  const [index, setIndex] = useState(0)

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
        className="hidden xl:flex absolute bottom-0 justify-end -z-20 ">
        <AvatarAbout />
      </motion.div>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 '>

        {/* text */}
        <div className='flex-1 flex flex-col justify-start items-center xl:items-start z-40  '>
          <motion.h2 className='h3 md:text-4xl xl:text-4xl text-center xl:text-left '
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >

            Passionate <br /> <span className='text-accent'>JavaScript </span> &  <span className='text-accent'> TypeScript</span><br /> Developer

          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-center xl:text-left '>
            <ReactTyped
              strings={[
                "As a JavaScript and TypeScript developer, I focus on creating functional and elegant web solutions. My professional and innovative approach aims to meet client needs while ensuring the performance and reliability of applications."
              ]}
              typeSpeed={1}
            />
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-10'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* Experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-[#bec3ca] after:absolute after:top-0 after:right-0 pr-5'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={7} />
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-slate-50 font-bold'>Years of Study</div>
              </div>
              {/* Clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-[#bec3ca] after:absolute after:top-0 after:right-0 px-5'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={7} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-slate-50 font-bold'>Projects</div>
              </div>
              {/* Projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-[#bec3ca] after:absolute after:top-0 after:right-0 px-5'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={7} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-slate-50 font-bold'>Completed Projects</div>
              </div>
            </div>
          </motion.div>



        </div>


        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex flex-col w-full xl:max-w-[48%] min-h-[480px]'>

          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {
              aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[3px]
                       after:absolute after:-bottom-1 after:left-0 z-10 font-medium t ${index === itemIndex ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' : 'after:bg-slate-50 text-slate-50'}
                     `}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                )
              })
            }
          </div>

          <div className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-start xl:items-start flex-wrap mx-auto xl:mx-0'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-start flex-wrap font-bold text-slate-50 my-1 '
                >
                  <div className='flex justify-between '>
                    <div >
                      <div className="font-normal mb-2 md:mb-0 md:mr-8 ">{item.stage && `( ${item.stage} )`} {item.title}</div>
                      <div className="mb-2 md:mb-0 md:mr-8  text-[0.8rem] text-sm text-gray-500 font-normal">{item.school}</div>

                    </div>
                  </div>
                  <div className='flex gap-x-4 flex-wrap gap-y-2'>
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className='text-2xl text-slate-200 ' key={itemIndex} >
                          {icon}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>



        </motion.div>
      </div>
    </div>
  );
};

export default About;
