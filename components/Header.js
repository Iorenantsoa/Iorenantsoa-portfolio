import Image from "next/image";
import Link from "next/link";

import Socials from '../components/Socials'

const Header = () => {
  return (
    <header
      className=" absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] py-6 bg-[#0D1117] shadow-sm shadow-slate-50 "
      // className=" absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] py-6 bg-[#0D1117] shadow-sm shadow-black"
    >
      <div className='container mx-auto'>
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6  ">
          {/* logo */}
          <Link href={'/'}>
            <Image src={'logo.svg'} width={220} height={48} alt="logo" priority={true} />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
