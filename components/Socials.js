import Link from "next/link";
 
import { RiLinkedinBoxFill, RiGithubFill, RiFacebookFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';

import { 
    HiEnvelope,
  } from 'react-icons/hi2';
  
const Socials = () => {
    return <div className=" flex items-center gap-x-5 text-lg">
        {/* <Link href={''} className="hover:text-accent transition-all duration-300 text-[#C9D1D9]"> */}
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#F1F1F1]">
            <RiGithubFill />
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#F1F1F1]">
            <HiEnvelope /> 
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#F1F1F1]"> 
            <RiLinkedinBoxFill />
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#F1F1F1]">
            <RiFacebookFill/>
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#F1F1F1]">
            <RiInstagramFill />
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#F1F1F1]">
            <RiWhatsappFill />
        </Link>


    </div>;
};

export default Socials;
