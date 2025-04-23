import Image from 'next/image';
import { Fa500Px } from "react-icons/fa";
import { FaDrum } from "react-icons/fa";
import { BiAward } from "react-icons/bi";
import { CiFloppyDisk } from "react-icons/ci";
import { BarraLateralElem } from './BarraLateralElem';
import { GrPersonalComputer } from "react-icons/gr";
import { MdOutlineCatchingPokemon } from "react-icons/md";




// npm i react-icons
// https://react-icons.github.io/react-icons/
// https://react-icons.github.io/react-icons/search/#q=disk

const MenuElementos = [
    {
        path: "/products/computers",
        icon: <GrPersonalComputer size={40}/>,
        title: "Computers",
        subtitle: "Gamer PC's"
    },
    {
        path: "/products/ssd",
        icon: <CiFloppyDisk size={40}/>,
        title: "Solid State Disk",
        subtitle: "Super Fast"
    },
    {
        path: "/products/mostrador",
        icon: <BiAward size={40}/>,
        title: "Mostrador",
        subtitle: "Compras Online"
    },
    {
        path: "/products/toy",
        icon: <MdOutlineCatchingPokemon />,
        title: "Toys",
        subtitle: "For Kids"
    }
];


export const BarraLateral = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
        <div id="logo" className="my-4 px-6">
         <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
             <Fa500Px className='mr-2'/>
             <span>Dash</span>
             <span className="text-blue-500">8</span>.
             <FaDrum className='ml-2'/>
             </h1>
         <p className="text-slate-500 text-sm">Manage your actions and activities</p>
        </div>
        <div id="profile" className="px-6 py-10">
         <p className="text-slate-500">Welcome back,</p>
         <a href="#" className="inline-flex space-x-2 items-center">
             <span>
                 <Image 
                 width={40} 
                 height={40} 
                 className="rounded-full w-8 h-8" 
                 src="https://styles.redditmedia.com/t5_2rw42/styles/communityIcon_12wqgeqd82t71.png" 
                 alt=""/>
             </span>
             <span className="text-sm md:text-base font-bold">
                 Mi tienda
             </span>
             </a>
        </div>
        <div id="nav" className="w-full px-6">
        
         {
            MenuElementos.map((elemento) => (
                <BarraLateralElem key={elemento.path} 
                    path={elemento.path} 
                    icon={elemento.icon} 
                    title={elemento.title} 
                    subtitle={elemento.subtitle}
                 />
            ))
         }
        </div>
     </div>
     
    );
}
  