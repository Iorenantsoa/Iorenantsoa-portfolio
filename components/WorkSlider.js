import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

// Importation du Modal personnalisé
import ModalPage from '../pages/modal';  // Assure-toi de l'importer depuis le bon fichier
import { SiBootstrap, SiDotnet, SiExpo, SiFacebook, SiJavascript, SiJquery, SiKeras, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPython, SiQt, SiReact, SiRedux, SiSymfony, SiTailwindcss, SiTensorflow } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";



// Data (Exemple fourni)
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'SueMag',
          path: '/SueMAg.jpg',
          description: "I manage the Facebook page of SueMag, an online store specializing in clothing, bags, shoes , ETC... My role includes content creation, community engagement, and optimizing ad campaigns to increase brand visibility and drive sales.",
          technologies: [
            <SiFacebook key={7} className='w-[25px] h-[25px]' />, 
          ],
          link: 'https://web.facebook.com/Suesoary/'
        },
        {
          title: 'TutoForYou',
          path: '/TutoForYou (3).jpg',
          description: "TutoForYou is an online learning platform offering tutorials and courses in various fields, including web development and programming. Users can explore a structured catalog of courses, organized into predefined playlists, making it easier to progressively learn new technologies. The platform features an intuitive and responsive interface, allowing users to easily access explanatory videos and enriching articles, while tracking their progress through the courses.",
          technologies: [
            <SiJavascript key={0} className='w-[25px] h-[25px]' />,
            <SiNextdotjs key={1} className='w-[25px] h-[25px]' />,
            <SiTailwindcss key={3} className='w-[25px] h-[25px]' />,
            <SiDotnet key={2} className='w-[25px] h-[25px]' />,
            <SiMongodb key={4} className='w-[25px] h-[25px]' />
          ],
          link: 'https://github.com/Iorenantsoa/TutoForYouNextJs'
        },
        {
          title: 'Sweetiiies',
          path: '/sweetiiies.png',
          description: "Facebook page dedicated to my poetry: sharing original creations and managing interaction with a community passionate about literature.",
          technologies: [
            <SiFacebook key={7} className='w-[25px] h-[25px]' />, 
          ],
          link: 'https://web.facebook.com/profile.php?id=100092687839134'
        },
         
        {
          title:
            'GasyCar',
          path: '/gasyCarImage.jpg',
          description: "GasyCar is an application for booking and managing seats in shared taxis (taxis-brousse). It allows users to reserve seats for intercity trips by selecting their destination, travel date, and preferred seat number from available options. The app simplifies trip planning by providing a real-time view of available seats and optimizing reservation management for transport companies.",
          technologies: [
            <SiJavascript key={3} className='w-[25px] h-[25px]' />,
            <SiReact key={1} className='w-[25px] h-[25px]' />,
            <SiRedux key={0} className='w-[25px] h-[25px]' />,
            <SiTailwindcss key={4} className='w-[25px] h-[25px]' />,
            <SiNodedotjs key={5} className='w-[25px] h-[25px]' />,
            <SiMongodb key={2} className='w-[25px] h-[25px]' />,
          ],
          link: 'https://github.com/Iorenantsoa/Reservation-automobile'
        },
      ],
    },
    {
      images: [
        {
          title: 'G-permiConstruire',
          path: '/G-permiConstruire (4).jpg',
          description: "FoncierPlus is an application dedicated to managing land properties, including titled land, cadastral information, and land certificates. Designed to facilitate tracking for property owners, the application allows users to manage their land documents, submit building permit applications, and monitor the progress of those requests. With a user-friendly interface, FoncierPlus provides simplified access to property information, assists in verifying the legality of property titles, and offers tools for efficient real estate management.",
          technologies: [
            <SiPhp key={3} className='w-[25px] h-[25px]' />,
            <SiSymfony key={1} className='w-[25px] h-[25px]' />,
            <SiJquery key={5} className='w-[25px] h-[25px]' />,
            <SiBootstrap key={4} className='w-[25px] h-[25px]' />,
            <SiMysql key={2} className='w-[25px] h-[25px]' />,
          ],
          link: 'https://github.com/IsmaelFanomezantsoa/gestion_fonciere_et_PC'
        },
        {
          title: 'nyBaiboliko',
          path: '/Ny baiboliko (3).jpg',
          description: "NyBaiboliko is a mobile application designed to provide easy access to the Bible in Malagasy, including both the Old and New Testaments. It offers a user-friendly interface, allowing users to read and explore the Scriptures in their native language. The app includes features such as verse search, personal annotations, and the ability to create favorites. With nyBaiboliko, users can enrich their spiritual journey and stay connected to their faith daily.",
          technologies: [
            <SiJavascript key={3} className='w-[25px] h-[25px]' />,
            <TbBrandReactNative key={1} className='w-[25px] h-[25px]' />,
            <SiRedux key={0} className='w-[25px] h-[25px]' />,
            <SiExpo key={2} className='w-[25px] h-[25px]' />
          ],
          link: 'https://github.com/Iorenantsoa/ny_baiboliko'
        },
        {
          title: 'My Portfolio',
          path: '/portfolio.jpg',
          description: "This portfolio displays the skills and projects I've worked on as a developer and offers insights, into the services I provide as details, about my background and how to reach me.",
          technologies: [
            <SiJavascript key={7} className='w-[25px] h-[25px]' />,
            <SiNextdotjs key={0} className='w-[25px] h-[25px]' />,
            <SiTailwindcss key={2} className='w-[25px] h-[25px]' />
          ],
          link: 'https://github.com/Iorenantsoa/'
        },
        {
          title: 'RenalScanAI',
          path: '/RenalScanAI (1).jpg',
          description: "RenalScanAI is an innovative application that uses artificial intelligence to detect and classify various kidney diseases from medical images. Developed to assist healthcare professionals in diagnosing renal conditions, the application relies on a convolutional neural network (CNN) model trained with TensorFlow Keras to analyze images and provide accurate predictions on four types of kidney diseases.",
          technologies: [
            <SiPython key={2} className='w-[25px] h-[25px]' />,
            <SiTensorflow key={1} className='w-[25px] h-[25px]' />,
            <SiKeras key={3} className='w-[25px] h-[25px]' />,
            <SiQt key={4} className='w-[25px] h-[25px]' />
          ],
          link: 'https://github.com/Iorenantsoa/G_stage'
        },
      ],
    },
    {
      images: [
       {
          title: 'G-stage',
          path: '/Gstage (5).jpg',
          description: "G-Stage is an application for managing internships, thesis defenses, and student supervision in academic institutions. Designed to facilitate coordination between students, supervisors, and administrators, the application allows for tracking the internship process from submission to the final defense. Students can submit their internship applications, view the details of their supervision, and schedule their thesis defenses, while supervisors and administrators can monitor project progress and approve various stages.",
          technologies: [
            <SiPhp key={3} className='w-[25px] h-[25px]' />,
            <SiSymfony key={1} className='w-[25px] h-[25px]' />,
            <SiJquery key={5} className='w-[25px] h-[25px]' />,
            <SiBootstrap key={4} className='w-[25px] h-[25px]' />,
            <SiMysql key={2} className='w-[25px] h-[25px]' />,
          ],
          link: 'https://github.com/Iorenantsoa/G_stage'
        },
        
      ],
    },
  ],
};

const WorkSlider = () => {
  // Gestion de l'état pour le modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', path: '' });

  // Fonction pour ouvrir le modal avec les données spécifiques
  const openModal = (image) => {
    setModalContent(image);  // Met à jour le contenu du modal
    setIsModalOpen(true);    // Ouvre le modal
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="min-h-[280px]"
      >
        {workSlides.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer opacity-95">
              {slide.images.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  onClick={() => openModal(image)}  // Ouvre le modal au clic
                >
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    {/* image */}
                    <Image
                      src={image.path}
                      width={500}
                      height={300}
                      alt={image.title}
                    />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-[#020202] via-[#474747] to-[#020202] opacity-0 group-hover:opacity-80 transition-all duration-700" />
                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-[#F5F5F5] font-semibold">
                        {/* title part 1 */}
                        <div className="delay-100">CLICK</div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          ME
                        </div>
                        {/* icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {isModalOpen && (
        <ModalPage
          isOpen={isModalOpen}
          closeModal={closeModal}
          content={modalContent}
        />
      )}
    </div>
  );
};

export default WorkSlider;
