import logo from '../assets/mohsinlogo.png'
import { FaLinkSlash } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center b justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='w-[90px] rounded-full' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkSlash/>
            <FaGithub/>
            <FaSquareXTwitter/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar