import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/dist/client/router"

const NavItem: FunctionComponent<{
  activeItem: string,
  setActiveItem: Function,
  name: string,
  route: string
}> = ({activeItem, name, route, setActiveItem}) => {
  return (
    activeItem !== name ? (
      <Link href={ route}>
        <a>
          <span onClick={()=>setActiveItem(name)} className="hover:text-green-300">{name}</span>
        </a>
      </Link>
    ) : null
  )
}

const Navbar = () => {

  const [activeItem, setActiveItem] = useState<string>('')

  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname === '/') setActiveItem('About')
    else if (pathname === '/projects') setActiveItem('Projects')
    else if (pathname === '/resume') setActiveItem('Resume')
  }, [pathname])
  
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-green-300 border-b-4 border-green-300 md:text-2xl">{activeItem}</span>
      <div className="flex space-x-5 text-lg text-red-400 ">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects" />
      </div>
    </div>
  )
}

export default Navbar
