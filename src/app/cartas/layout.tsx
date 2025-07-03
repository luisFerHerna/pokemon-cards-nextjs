import Image from 'next/image';
import { MenuLateral } from '../components/MenuLateral';


export default 
    function MenuLayout( {children}: 
        {children: React.ReactNode;}){
    return(
        <div>
            

<div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
    <div className="flex flex-col relative w-screen">
        <MenuLateral />
        <div className='ml-64 p-4 w-full text-slate-800'>
            {children}
        </div>
      
    </div>
</div>




        </div>
    );
}

/*
snippets
https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets
https://marketplace.visualstudio.com/items?itemName=yuzu.snippets-next-13
*/