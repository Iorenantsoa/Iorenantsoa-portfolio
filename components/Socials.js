import Link from "next/link";
 
import { RiLinkedinBoxFill, RiGithubFill, RiFacebookFill, RiInstagramFill } from 'react-icons/ri';

import { 
    HiEnvelope,
  } from 'react-icons/hi2';
  
const Socials = () => {
    return <div className=" flex items-center gap-x-5 text-lg">
        <Link href={''} className="hover:text-accent transition-all duration-300">
            <RiGithubFill />
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300">
            <HiEnvelope /> 
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300"> 
            <RiLinkedinBoxFill />
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300">
            <RiFacebookFill/>
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300">
            <RiInstagramFill />
        </Link>


    </div>;
};

export default Socials;
