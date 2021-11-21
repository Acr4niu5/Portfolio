import { RiComputerLine } from 'react-icons/ri'
import { BsCircleFill } from 'react-icons/bs'
import { IService, ISkill } from '../interfaces/type'


export const services:IService[] = [
  {
    title: "Frontend Dev",
    about: "akl;sdkl;asdlk",
    Icon: RiComputerLine,
  },
  {
    title: "Frontend aasdasd",
    about: "akl;sdkl;asdlk",
    Icon: RiComputerLine,
  },
]

export const languages: ISkill[] = [
  {
    name: "Python",
    level: "70%",
    Icon: BsCircleFill
  }
]

export const tools: ISkill[] = [
  {
    name: "MySkill",
    level: "60%",
    Icon: BsCircleFill
  }
]