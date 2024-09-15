
import {motion} from 'framer-motion'
import Image from 'next/image';


const transitionVariants = {
  initial : {
    x:'100%' , 
    width : '100%'
  } , 
  animate : {
    x: '0%',
    width : '0%'
  } , 
  exit :{
    x:['0%','100%'],
    width : ['0%','100%']
  }
}

const Transition = () => {
  return (
    <>
    <motion.div className='fixed flex justify-center items-center top-0 right-full w-screen h-screen z-30 bg-[#0D1117]' variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={ {delay : 0.2 , duration :  0.6 , ease : 'easeInOut'}}>
       {/* 1 */}
       <Image src={'/transition.png'} width={500} height={700} alt="logo" priority={true} className=' w-auto h-auto object-cover  '/>
    </motion.div> 
    <motion.div className='fixed flex justify-center items-center top-0 right-full w-screen h-screen z-20 bg-[#222222]' variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={ {delay : 0.4 , duration :  0.6 , ease : 'easeInOut'}}>
       {/* 1 */}
       {/* <Image src={'logo.svg'} width={300} height={100} alt="logo" priority={true} className='opacity-50' /> */}
    </motion.div> 
    <motion.div className='fixed flex justify-center items-center top-0 right-full w-screen h-screen z-10 bg-[#272727]' variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={ {delay : 0.6 , duration :  0.6 , ease : 'easeInOut'}}>
       {/* 1 */}
       {/* <Image src={'logo.svg'} width={300} height={100} alt="logo" priority={true} className='opacity-40' /> */}
    </motion.div> 
    </>
  );
};

export default Transition;
