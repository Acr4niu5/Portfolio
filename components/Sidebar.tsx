import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div>
      <img
        src="avatar.jpg"
        alt="avatar"
        className='w-32 h-32 mx-auto rounded-full ring-green-300 ring-4'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className="text-green-300">Florian </span>
        Schmidt
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Software Developer</p>
      <a
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'
        href=''
        download=''>
        <GiTie className='w-6 h-6' /> Download Resume
      </a>

      {/* social */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-300 md:w-full">
        {/* GitHub */}
        <a href="https://github.com/Acr4niu5">
          <AiFillGithub className='w-8 h-8 cursor-pointer'/>
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/florian-schmidt-546552140/">
          <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
        </a>
      </div>
      {/* address */}
      <div className="py-4 my-5 bg-gray-200" style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Marbug, Germany</span>
        </div>
        <p className="my-2">florian.d3v@gmail.com</p>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-300 to-indigo-300 focus:outline-none"
        onClick={() => window.open('mailto:florian.d3v@gmail.com')}>
        <h3 className="text-lg">Write a Mail</h3>
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-300 to-indigo-300 focus:outline-none">
        <h3 className="text-lg">Toggle Theme</h3>
      </button>
    </div>
  )
}

export default Sidebar