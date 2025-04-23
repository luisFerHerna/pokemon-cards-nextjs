'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface Props {
    path: string
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

export const ElementoLateral = (
            { path, icon, title, subtitle }: Props
    ) => 
{
    const currentPath = usePathname(); //hook
    console.log(currentPath);

    return (
        <Link href={path} className=
        
        {`${path == currentPath ? 'bg-blue-800' : '' }  w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150`}
        
        >
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">{title}</span>
                <span className="text-sm text-slate-500 hidden md:block">{subtitle}</span>
            </div>
        </Link>

    );
}