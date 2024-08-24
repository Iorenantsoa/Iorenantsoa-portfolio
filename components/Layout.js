import { Sora } from '@next/font/google'


const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'
const Layout = ({ children }) => {
  return (

    <div className={`page   text-[#111827] bg-cover  bg-repeat  ${sora.variable} font-sora relative `} >
      {/* <TopLeftImg /> */}
      <Nav />
      {/* <div className='flex flex-col justify-between items-center'> */}
        <Header />
        {children}
      {/* </div> */}

    </div>
  )
};

export default Layout;
