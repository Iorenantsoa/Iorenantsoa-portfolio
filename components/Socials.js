import Link from "next/link";
 
import { RiLinkedinBoxFill, RiGithubFill, RiFacebookFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';

import { 
    HiEnvelope,
  } from 'react-icons/hi2';
  
const Socials = () => {
    return <div className=" flex items-center gap-x-5 text-lg">
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#C9D1D9]">
            <RiGithubFill />
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#C9D1D9]">
            <HiEnvelope /> 
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#C9D1D9]"> 
            <RiLinkedinBoxFill />
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#C9D1D9]">
            <RiFacebookFill/>
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#C9D1D9]">
            <RiInstagramFill />
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300 text-[#C9D1D9]">
            <RiWhatsappFill />
        </Link>


    </div>;
};

export default Socials;
