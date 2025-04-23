import Image from 'next/image';
import { GrCloudComputer } from "react-icons/gr";
import { CgPiano } from "react-icons/cg";
import { GiSoccerBall } from "react-icons/gi";
import { BarraLateral } from './BarraLateral';
import { ElementoLateral } from './ElementoLateral';

const elementos =[
    {
        path: "/productos/cajas",
        titulo: "Cajas de juguetes",
        subtitulo: "Cajas de juguetes",
        icono: <GrCloudComputer />
    },
    {
        path: "/productos/pianos",
        titulo: "Pianos",
        subtitulo: "Para aprender",
        icono: <CgPiano />
    },{
        path: "/productos/balones",
        titulo: "Balones :D",
        subtitulo: "Balones de soccer",
        icono: <GiSoccerBall />
    }

];

export const MenuLateral = () => {
    return (

        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">
                    <GrCloudComputer /> Dash<span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Bienvenido,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            width={40}
                            height={40}
                            className="rounded-full w-8 h-8"
                            src="https://i.abcnewsfe.com/a/7c76ddba-5378-46ca-ad27-0ac814697d1d/scotus-1-gty-gmh-250408_1744126476481_hpMain_16x9.jpg?w=992"
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
