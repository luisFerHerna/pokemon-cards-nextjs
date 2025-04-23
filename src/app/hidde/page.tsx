import Image from 'next/image';
import ShowHideElement from "@/app/components/ShowHideElement";
import { preguntas } from '@/app/components/pregunta';

export default function HidePage() {
    return(
        <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>
    
            <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
                <div className="flex justify-between md:flex-row flex-col">
                    <div className="md:mb-0 mb-8 md:text-left text-center">
                        <h2 className="font-medium dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">Questions</h2>
                        <p className="font-normal dark:text-gray-300 text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">If you don't find your answer, Please contact us or Leave a Message, we'll be more than happy to assist you.</p>
                    </div>
    
                    <div className="flex justify-center items-center">
                        <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
                            <input className="focus:outline-none bg-white" type="text" placeholder="Search" />
                            <Image
                                width={40}
                                height={40}
                                className="rounded-full w-8 h-8"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg1.svg"
                                alt="search" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-8/12 w-full mx-auto">
                <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
                
                {preguntas.map((item) => (
                    <div key={item.id}>
                        <ShowHideElement
                            numero={item.numero}
                            pregunta={item.pregunta}
                            respuesta={item.respuesta}
                        />
                        <hr className="w-full lg:mt-10 my-8" />
                    </div>
                ))}
            </div>
        </div>
    );
}