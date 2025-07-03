import Image from 'next/image';
import { GrCloudComputer } from "react-icons/gr";
import { CgPiano } from "react-icons/cg";
import { GiSoccerBall } from "react-icons/gi";
import { ElementoLateral } from './ElementoLateral';
import path from 'path';

const elementos =[
    {
        path: "/cartas/poke",
        titulo: "Pokemones",
        subtitulo: "Pokemones",
        icono: <Image
            width={20}
            height={20}
            src="https://images.icon-icons.com/851/PNG/512/pikachu_icon-icons.com_67535.png"
            alt="" />
    }

];

export const MenuLateral = () => {
    return (

        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
            
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Bienvenido,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            width={40}
                            height={40}
                            className="rounded-full w-8 h-8"
                            src="https://styles.redditmedia.com/t5_2rw42/styles/communityIcon_12wqgeqd82t71.png"
                            alt="" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Mi tienda
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {
                    elementos.map(
                        elem => 
                            <ElementoLateral
                                    key={elem.path}
                                    path={elem.path}
                                    icon={elem.icono}
                                    title ={elem.titulo}
                                    subtitle = {elem.subtitulo}
                            />                            
                    )

                }

            </div>
        </div>
    );
}


// npm i react-icons
// https://react-icons.github.io/react-icons/
// https://react-icons.github.io/react-icons/search/#q=disk
